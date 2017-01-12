const express = require('express');
const next = require('next');
const LRUCache = require('lru-cache');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dir: '.', dev });
const handle = app.getRequestHandler();

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || 'localhost';

const ssrCache = new LRUCache({
  max: 100,
  maxAge: 1000 * 60 * 60,
});

function renderAndCache(req, res, pagePath, queryParams) {
  if (ssrCache.has(req.url)) {
    console.log(`CACHE HIT: ${req.url}`);
    res.send(ssrCache.get(req.url));
    return;
  }

  app.renderToHTML(req, res, pagePath, queryParams)
    .then((html) => {
      console.log(`CACHE MISS: ${req.url}`);
      ssrCache.set(req.url, html);

      res.send(html);
    })
    .catch((err) => {
      app.renderError(err, req, res, pagePath, queryParams);
    });
}

app.prepare()
.then(() => {
  const server = express();

  server.get('/', (req, res) => {
    if (dev) return handle(req, res);
    return renderAndCache(req, res, '/', req.query);
  });

  server.get('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(PORT, HOST, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://${HOST}:${PORT}/`);
  });
})
.catch(error => {
  console.error(error);
  process.exit(0);
});
