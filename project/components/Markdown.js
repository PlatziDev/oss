import React from 'react';
import MarkdownContent from '@platzi/react-markdown';


function Markdown(props) {
  return (
    <section>
      <article>
        <MarkdownContent
          id="markdown"
          content={props.content}
        />
        <a href={`https://github.com/PlatziDev/${props.name}`} target="_blank">
          <i className="fa fa-github" />
        </a>
      </article>
      <style jsx global>{`
        #markdown {
          color: #3a3c3f;
        }
        #markdown h1 {
          border-bottom: 1px solid #3a3c3f;
          font-size: 2rem;
          margin: 0;
        }
        #markdown pre {
          background-color: #3a3c3f;
          color: white;
          margin: 0 -1rem;
          padding: .5rem 1rem;
        }
        #markdown a {
          color: #058ecd;
        }
      `}</style>
      <style jsx>{`
        section {
          margin: 0 auto 2rem;
          max-width: 1024px;
        }
        article {
          background-color: white;
          color: #3a3c3f;
          padding: 1rem;
          margin: 1rem .5rem;
          position: relative;
        }
        a {
          color: #058ecd;
          position: absolute;
          font-size: 1.75rem;
          top: 1rem;
          right: 1rem;
        }
      `}</style>
    </section>
  );
}


export default Markdown;
