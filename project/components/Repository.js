import React from 'react';
import Link from 'next/prefetch';


function Repository(props) {
  return (
    <article className="row">
      <h2 className="col-xs-12 col-sm-4 col-md-3">
        <Link
          href={`/repo?name=${props.name}`}
          as={`/repo/${props.name}`}
          target="_blank"
          rel="nofollow"
        >
          <a>{props.name}</a>
        </Link>
      </h2>

      <p className="col-xs-9 col-sm-7">
        {props.description}
      </p>

      <div className="col-xs-3 col-sm-2">
        <mark>
          <i className="fa fa-star" aria-hidden="true" />
          <br />
          {props.stargazers_count}
        </mark>
      </div>

      <style jsx>{`
        article {
          align-items: center;
          background-color: white;
          border-radius: .5rem;
          display: flex;
          margin: 1rem;
          padding: .5rem .25rem;
        }
        a {
          color: #058ecd;
          text-decoration: none;
          font-size: 1rem;
        }
        a:hover {
          text-decoration: underline;
        }
        h2, p, mark {
          font-size: 1rem;
        }
        p {
          color: #3a3c3f;
          width: 100%;
        }
        div {
          text-align: right;
          margin: 0;
        }
        mark {
          background: #f3f3f6;
          border: 1px solid #c7c7c7;
          border-radius: .5em;
          color: gray;
          display: inline-block;
          text-align: center;
          line-height: 2rem;
          width: 2em;
        }
        i {
          color: #3a3c3f;
        }
      `}</style>
    </article>
  )
}


export default Repository;
