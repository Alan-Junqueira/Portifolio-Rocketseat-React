import React from 'react';
import styles from './Css/Recent.module.css';

const Recent = () => {
  return (
    <section className={`Card ${styles.Recent}`}>
      <h3 className={styles.titulo}>Recent Posts</h3>
    </section>
  );
};

export default Recent;
