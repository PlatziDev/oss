require('isomorphic-fetch');
const express = require('express');
const next = require('next');
const LRUCache = require('lru-cache');

const { HOST, PORT, NODE_ENV } = require('./constants');

const dev = NODE_ENV !== 'production';
const app = next({ dir: '.', dev });
const handle = app.getRequestHandler();


/**
 * Initialize a LRU in-memory cache
 */
const cache = new LRUCache({
  max: 100,
  maxAge: 1000 * 60 * 60 * 24,
});


/**
 * Check if we already render the page and render it if not
 * @method renderAndCache
 * @param  {Object}       req         The HTTP request
 * @param  {Object}       res         The HTTP response
 * @param  {string}       pagePath    The Next.js page path to render
 * @param  {Object}       queryParams The query params to use in the render
 */
function renderAndCache(req, res, pagePath, queryParams) {
  if (cache.has(req.url)) {
    console.log(`CACHE HIT: ${req.url}`);
    res.send(cache.get(req.url));
    return;
  }

  app.renderToHTML(req, res, pagePath, queryParams)
    .then((html) => {
      console.log(`CACHE MISS: ${req.url}`);
      cache.set(req.url, html);

      res.send(html);
    })
    .catch((err) => {
      app.renderError(err, req, res, pagePath, queryParams);
    });
}


/**
 * Check if we already fetched the data from the Github API and fetch it if not.
 * @method fetchAndCache
 * @param  {Object}      req    The HTTP request
 * @param  {Object}      res    The HTTP response
 * @param  {string}      apiURL The Github API to fetch
 */
function fetchAndCache(req, res, apiURL) {
  if (cache.has(req.url)) {
    console.log(`CACHE HIT: ${req.url}`);
    res.send(cache.get(req.url));
    return;
  }

  console.log(`CACHE MISS: ${req.url}`);
  fetch(apiURL)
    .then(response => response.json())
    .then(data => {
      cache.set(req.url, JSON.stringify(data));
      res.json(data);
    });
}


/**
 * Start server
 */
app.prepare()
.then(() => {
  const server = express();


  /**
   * Fetch data for the list of repos
   */
  server.get('/api/repos', (req, res) => {
    fetchAndCache(
      req,
      res,
      'https://api.github.com/orgs/PlatziDev/repos?type=public'
    );
  });


  /**
   * Fetch the README of a single repo
   */
  server.get('/api/repos/:name', (req, res) => {
    const {
      params: { name },
    } = req;

    fetchAndCache(
      req,
      res,
      `https://api.github.com/repos/PlatziDev/${name}/readme`
    );
  });


  /**
   * Render the readme of a single repo (if is not dev use cache)
   */
  server.get('/repo/:name', (req, res) => {
    const params = Object.assign(req.query, req.params);

    if (dev) return app.render(req, res, '/repo', params);
    return renderAndCache(req, res, '/repo', params);
  });


  /**
   * Render the list of repos (if is not dev use cache)
   * @type {[type]}
   */
  server.get('/', (req, res) => {
    const params = Object.assign(req.query, req.params);

    if (dev) return app.render(req, res, '/', params);
    return renderAndCache(req, res, '/', params);
  });


  /**
   * Let next.js handle every other possible URL
   */
  server.get('*', (req, res) => {
    return handle(req, res);
  });


  /**
   * Run server in the setted host and port (localhost and 3000 by default)
   */
  server.listen(PORT, HOST, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://${HOST}:${PORT}/`);
  });
})
.catch(error => {
  console.error(error);
  process.exit(0);
});
