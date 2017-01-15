import Head from 'next/head';
import Link from 'next/link';
import React, { Component } from 'react';
import { List as list } from 'immutable';
import 'isomorphic-fetch';

import RepositoryList from '../components/RepositoryList';

import { P_PROT, P_HOST, P_PORT } from '../constants';


class Home extends Component {
  static async getInitialProps() {
    const response = await fetch(`${P_PROT}://${P_HOST}:${P_PORT}/api/repos`);
    const repos = await response.json();
    return { repos };
  }

  get repos() {
    return list(this.props.repos);
  }

  render() {
    return (
      <section id="OSS">
        <Head>
          <meta charSet="utf-8" />
          <title>Platzi - Open Source Software</title>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1"
          />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/flexboxgrid/6.3.1/flexboxgrid.min.css"
          />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
          />
          <meta
            name="description"
            content="The Platzi Open Source Software published packages."
          />
          <meta
            name="language"
            content="en"
          />
          <meta
            name="author"
            content="Platzi"
          />
          <meta
            name="pagename"
            content="Platzi - Open Source Software"
          />
          <meta
            name="HandheldFriendly"
            content="True"
          />
          <meta
            name="MobileOptimized"
            content="320"
          />
          <meta
            name="apple-mobile-web-app-title"
            content="Platzi - Open Source Software"
          />
          <meta
            content="IE=edge,chrome=1"
            http-equiv="X-UA-Compatible"
          />
          <meta
            name="twitter:card"
            value="summary"
          />
          <meta
            name="twitter:site"
            value="@PlatziTeam"
          />
          <meta
            name="twitter:creator"
            value="@PlatziTeam"
          />
          <meta
            name="twitter:url"
            value="https://oss.platzi.com/"
          />
          <meta
            name="twitter:title"
            value="Platzi - Open Source Software"
          />
          <meta
            name="twitter:description"
            value="The Platzi Open Source Software published packages."
          />
          <meta
            name="twitter:image"
            value=""
          />
          <meta
            name="twitter:summary"
            value="The Platzi Open Source Software published packages."
          />
          <meta
            property="og:type"
            content="website"
          />
          <meta
            property="og:title"
            content="Platzi - Open Source Software"
          />
          <meta
            property="og:description"
            content="The Platzi Open Source Software published packages."
          />
          <meta
            property="og:image"
            content=""
          />
          <meta
            property="og:url"
            content="http://sergio.xalambri.xyz/"
          />
          <meta
            property="og:site_name"
            content="Platzi - Open Source Software"
          />
          <meta
            property="og:locale"
            content="en"
          />
        </Head>

        <header>
          <Link href="/">
            <figure>
              <img
                alt="Platzi"
                src="/static/logo.svg"
                height="72"
                width="230"
              />
            </figure>
          </Link>
          <h1>Open Source Software</h1>
        </header>

        <RepositoryList list={this.repos} />

        <style jsx global>{`
          body {
            background-color: #f3f3f6;
            color: white;
            font-family: Helvetica, Arial;
            font-size: 16px;
            margin: 0;
          }
        `}</style>

        <style jsx>{`
          header {
            background: linear-gradient(90deg, #1c3643, #1e5372);
            padding: 1.5rem 0;
          }
          h1 {
            font-size: 1.5rem;
            margin: 0;
            text-align: center;
          }
          figure {
            font-size: 2rem;
            margin: 0;
            text-align: center;
          }
          h2 {
            font-size: 1.5rem;
          }
        `}</style>
      </section>
    );
  }
}


export default Home;
