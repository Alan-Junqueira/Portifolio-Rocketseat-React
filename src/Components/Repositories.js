import React from 'react';
import styles from './Css/Repositories.module.css';
import { ReactComponent as Folder } from '../assets/folder.svg';
import { ReactComponent as Star } from '../assets/star.svg';
import { ReactComponent as GitBranch } from '../assets/git-branch.svg';
import { UserContext } from '../UserContext';

const Repositories = () => {
  const { repositories } = React.useContext(UserContext);

  // console.log(repositories);

  return (
    <section className={styles.Repositories}>
      <ul className={styles.repoUl}>
        {repositories.map((repo) => (
          <li id={repo.id} className={`Card ${styles.repositoriesLi}`}>
            <div className={styles.repository}>
              <a href={repo.html_url} target="_blank" rel="noreferrer">
                <Folder />
              </a>
              <a href={repo.html_url} target="_blank" rel="noreferrer">
                <h3>{repo.name}</h3>
              </a>
            </div>

            <div className={styles.description}>
              <p className={styles.maxLines}>{repo.description}</p>
            </div>

            <div className={styles.footer}>
              <div>
                <div className={styles.starBranch}>
                  <Star/>
                  <p>100</p>
                  <GitBranch className={styles.hidden}/>
                  <p className={styles.hidden}>100</p>
                </div>
              </div>
              {repo.language === 'JavaScript' ? (
                <div className={styles.languageJavaScript}>{repo.language}</div>
              ) : null}
              {repo.language === 'HTML' ? (
                <div className={styles.languageHtml}>{repo.language}</div>
              ) : null}
              {repo.language === 'CSS' ? (
                <div className={styles.languageCss}>{repo.language}</div>
              ) : null}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Repositories;
