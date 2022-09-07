import React from 'react';
import styles from './styles.module.css';
import { UserContext } from '../../UserContext';
import { miliseccondsSincePost } from '../../Hooks/miliseccondsSincePost';

const RecentPosts = () => {
  const { repositories } = React.useContext(UserContext);
  const regexDescription = /(#(\w*)\s*)/gm;
  const regexHashTag = /.*(\w+)(?= #)/gm;

  let lastPostsArray = repositories.map(function (repo) {
    return Math.min(miliseccondsSincePost(repo.updated_at));
  });

  const lastPost = Math.min(...lastPostsArray);
  console.log(lastPost);
  const newDate = new Date();
  const updatedAt = new Date(newDate - lastPost).toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  });

  console.log(updatedAt);

  return (
    <section className={`Card ${styles.RecentPosts}`}>
      {repositories.map((repo) => (
        <>
          {Math.floor(lastPost / 1000) ===
          Math.floor(miliseccondsSincePost(repo.updated_at) / 1000) ? (
            <>
              <img src={repo.owner.avatar_url} alt={repo.owner.login} />
              {repo.avatar_url}
              <ul>
                <li key={repo.pushed_at}>
                  <h2 className={styles.postName}>{repo.name}</h2>
                  <p className={styles.creationData}>
                    Atualizado em: {updatedAt}
                  </p>
                  <h3 className={styles.description}>
                    {repo.description
                      ? repo.description.replace(regexDescription, '')
                      : 'Acesse o github para ver o código do projeto'}
                  </h3>
                  <p className={styles.hash}>
                    {repo.description
                      ? repo.description.replace(regexHashTag, '')
                      : '#Programing #Development #FrontEndDeveloper'}
                  </p>
                </li>
              </ul>
            </>
          ) : (
            ''
          )}
        </>
      ))}
    </section>
  );
};

export default RecentPosts;
