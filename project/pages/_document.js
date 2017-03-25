import Document, { Head, Main, NextScript } from 'next/document';

class PlatziOSS extends Document {
  render() {
    return (
      <html>
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/flexboxgrid/6.3.1/flexboxgrid.min.css"
          />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
          />
          <meta name="description" content="The Platzi Open Source Software published packages." />
          <meta name="language" content="en" />
          <meta name="author" content="Platzi" />
          <meta name="pagename" content="Platzi - Open Source Software" />
          <meta name="HandheldFriendly" content="True" />
          <meta name="MobileOptimized" content="320" />
          <meta name="apple-mobile-web-app-title" content="Platzi - Open Source Software" />
          <meta content="IE=edge,chrome=1" http-equiv="X-UA-Compatible" />
          <meta name="twitter:card" value="summary" />
          <meta name="twitter:site" value="@PlatziTeam" />
          <meta name="twitter:creator" value="@PlatziTeam" />
          <meta name="twitter:url" value="https://oss.platzi.com/" />
          <meta name="twitter:title" value="Platzi - Open Source Software" />
          <meta
            name="twitter:description"
            value="The Platzi Open Source Software published packages."
          />
          <meta name="twitter:image" value="" />
          <meta
            name="twitter:summary"
            value="The Platzi Open Source Software published packages."
          />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Platzi - Open Source Software" />
          <meta
            property="og:description"
            content="The Platzi Open Source Software published packages."
          />
          <meta property="og:image" content="" />
          <meta property="og:url" content="https://oss.platzi.com/" />
          <meta property="og:site_name" content="Platzi - Open Source Software" />
          <meta property="og:locale" content="en" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}


export default PlatziOSS;
