import React from 'react';
import styles from './Css/RecentPosts.module.css';
import { UserContext } from '../UserContext';
import { miliseccondsSincePost } from '../Hooks/miliseccondsSincePost';
import moment from 'moment';

const RecentPosts = () => {
  const { repositories } = React.useContext(UserContext);
  const regexDescription = /(#(\w*)\s*)/gm;
  const regexHashTag = /.*(\w+)(?= #)/gm;

  let lastPostsArray = repositories.map(function (elemento) {
    return Math.min(miliseccondsSincePost(elemento.created_at));
  });

  const lastPost = Math.min(...lastPostsArray);

  return (
    <section className={`Card ${styles.RecentPosts}`}>
      {repositories.map((repo) => (
        <>
          {Math.floor(lastPost / 1000 / 60 / 60) ===
          Math.floor(
            miliseccondsSincePost(repo.created_at) / 1000 / 60 / 60
          ) ? (
            <>
              <div className={styles.divImg}>
                <img src={repo.owner.avatar_url} alt={repo.owner.login} />
                {repo.avatar_url}
              </div>
              <div>
                <h2 className={styles.postName}>{repo.name}</h2>
                <p className={styles.creationData}>
                  Criado em:
                  {moment(repo.updated_at).format(' DD/MM/YYYY ')}
                  às
                  {moment(repo.updated_at).format(' HH:MM:SS')}
                </p>
                <h3 className={styles.description}>
                  {repo.description.replace(regexDescription, '')}
                </h3>
                <p className={styles.hash}>
                  {repo.description.replace(regexHashTag, '')}
                </p>
              </div>
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
