import React from 'react';
import styles from './Css/Tecnologias.module.css';

const Tecnologias = () => {


  return (
    <section className={`Card ${styles.Tecnologias}`}>
      <h2 className={`Titulo ${styles.Titulo}`}>Tecnologias</h2>
      <ul className={styles.Lista}>
        <li>JAVASCRIPT</li>
        <li>REACTJS</li>
        <li>GIT</li>
        <li>GITHUB</li>
        <li>HTML</li>
        <li>CSS</li>

      </ul>
    </section>
  );
};

export default Tecnologias;
