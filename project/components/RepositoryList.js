import Repository from './Repository';


function RepositoryList(props) {
  return (
    <section id="repos">
      {props.list
        .sortBy(repo => repo.stargazers_count)
        .reverse()
        .map(repo => <Repository {...repo} key={repo.id} />)
        .toArray()
      }
      <style jsx>{`
        section {
          margin: 0 auto 2rem;
          max-width: 1024px;
        }
      `}</style>
    </section>
  );
}


export default RepositoryList;
