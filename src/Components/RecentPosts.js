import React from 'react';
import styles from './Css/RecentPosts.module.css';
import { UserContext } from '../UserContext';
import { dateSubtration } from '../Hooks/DateSubtraction';

const RecentPosts = () => {
  const { repositories } = React.useContext(UserContext);
  const regexDescription = /(#(\w*)\s*)/gm;
  const regexHashTag = /.*(\w+)(?= #)/gm;

  return (
    <section className={`Card ${styles.RecentPosts}`}>
      {repositories
        .map((repo) => (
          <>
            <div className={styles.divImg}>
              <img src={repo.owner.avatar_url} alt={repo.owner.login} />
              {repo.avatar_url}
            </div>
            <div>
              <h2 className={styles.postName}>{repo.name}</h2>
              <p className={styles.creationData}>
                {dateSubtration(repo.created_at)}
              </p>
              <h3 className={styles.description}>
                {repo.description.replace(regexDescription, '')}
              </h3>
              <p className={styles.hash}>
                {repo.description.replace(regexHashTag, '')}
              </p>
            </div>
          </>
        ))
        .pop()}
    </section>
  );
};

export default RecentPosts;
