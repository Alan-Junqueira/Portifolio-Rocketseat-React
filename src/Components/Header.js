import React from 'react';
import styles from './Css/Header.module.css';

const Header = () => {
  return (
    <header className={`Card ${styles.Header}`}>
      <h2 className={styles.titulo}>My Projects</h2>
      <a href="#" className={styles.seeMore}>Veja Todos</a>
    </header>
  );
};

export default Header;
