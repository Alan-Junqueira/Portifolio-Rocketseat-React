import React from 'react';
import { UserContext } from '../../UserContext';
import styles from './styles.module.css';

const Header = () => {
  const { data } = React.useContext(UserContext);
  const { login } = data;
  return (
    <header className={`Card ${styles.Header}`}>
      <h2 className={styles.titulo}>My Projects</h2>
      <a
        href={`https://github.com/${login}?tab=repositories`}
        target="_blank"
        rel="noreferrer"
        className={styles.seeMore}
      >
        Veja Todos
      </a>
    </header>
  );
};

export default Header;
