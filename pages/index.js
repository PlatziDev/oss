import Head from 'next/head';
import Link from 'next/link';
import { Component } from 'react';
import { List as list } from 'immutable';
import 'isomorphic-fetch';

import RepositoryList from '../components/RepositoryList';

import { URL } from '../constants';

class Home extends Component {
  static async getInitialProps() {
    const response = await fetch(`${URL}/api/repos`);
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
          <title>Platzi - Open Source Software</title>
        </Head>

        <header>
          <figure>
            <Link href="/">
              <img alt="Platzi" src="/static/logo.svg" height="72" width="230" />
            </Link>
          </figure>
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
