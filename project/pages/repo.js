import Head from 'next/head';
import Link from 'next/prefetch';
import React, { Component } from 'react';
import { atob } from 'abab';
import 'isomorphic-fetch';

import Detail from '../components/Detail';

import { P_PROT, P_HOST, P_PORT } from '../constants';

class Repo extends Component {
  static async getInitialProps(context) {
    const response = await fetch(`${P_PROT}://${P_HOST}:${P_PORT}/api/repos/${context.query.name}`);
    const { content } = await response.json();
    return { content, name: context.query.name };
  }

  get content() {
    return atob(this.props.content);
  }

  render() {
    return (
      <section id="OSS">
        <Head>
          <title>Platzi - {this.props.name}</title>
        </Head>

        <header>
          <figure>
            <Link href="/">
              <img alt="Platzi" src="/static/logo.svg" height="72" width="230" />
            </Link>
          </figure>
          <h1>Open Source Software</h1>
        </header>

        <Detail content={this.content} name={this.props.name} />

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

export default Repo;
