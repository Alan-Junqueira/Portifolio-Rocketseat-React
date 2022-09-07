import React from 'react';
import { ReactComponent as Folder } from '../../assets/folder.svg';
import { ReactComponent as Star } from '../../assets/star.svg';
import { ReactComponent as GitBranch } from '../../assets/git-branch.svg';

import { UserContext } from '../../UserContext';

import { FiSettings } from 'react-icons/fi';
import {
  ReactJs,
  Javascript,
  Html5,
  CssThree,
  Typescript
} from '@icons-pack/react-simple-icons';

import { IconContext } from 'react-icons';
import styles from './styles.module.css';

const Repositories = () => {
  const { repositories } = React.useContext(UserContext);

  // console.log(repositories);

  return (
    <section className={styles.Repositories}>
      <ul className={styles.repoUl}>
        {repositories.map((repo) => (
          <li
            id={repo.id}
            key={repo.id}
            className={`Card ${styles.repositoriesLi}`}
          >
            <div className={styles.repository}>
              <a href={repo.html_url} target="_blank" rel="noreferrer">
                <Folder />
              </a>
              <a href={repo.html_url} target="_blank" rel="noreferrer">
                <h3>{repo.name}</h3>
              </a>
            </div>
            <div className={styles.description}>
              <p className={styles.maxLines}>
                {repo.description
                  ? repo.description
                  : 'Acesse o github para ver o código do projeto'}
              </p>
            </div>
            <div className={styles.footer}>
              <div>
                <div className={styles.starBranch}>
                  <Star />
                  <p>100</p>
                  <GitBranch className={styles.hidden} />
                  <p className={styles.hidden}>100</p>
                </div>
              </div>

              {repo.language === 'JavaScript' ? (
                <div>{<Javascript className={styles.javaScriptLogo} />}</div>
              ) : null}

              {repo.language === 'HTML' ? (
                <div>{<Html5 className={styles.html5Logo} />}</div>
              ) : null}

              {repo.language === 'CSS' ? (
                <div>{<CssThree className={styles.cssThreeLogo} />}</div>
              ) : null}

              {repo.language === 'TypeScript' ? (
                <div>{<Typescript className={styles.typescriptLogo} />}</div>
              ) : null}

              {repo.language === 'ReactJs' ? (
                <div>{<ReactJs className={styles.reactLogo} />}</div>
              ) : null}

              {repo.topics[0] === 'config' ? (
                <div>
                  {
                    <IconContext.Provider
                      value={{ color: 'rgba(255,255,255,0.5)' }}
                    >
                      <div>
                        <FiSettings />
                      </div>
                    </IconContext.Provider>
                  }
                </div>
              ) : null}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Repositories;
