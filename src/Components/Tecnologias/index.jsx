import React from 'react';
import {
  ReactJs,
  Javascript,
  Git,
  Github,
  Html5,
  CssThree,
  Typescript,
  Sass,
  Nextdotjs
} from '@icons-pack/react-simple-icons';

import styles from './styles.module.css';

const Tecnologias = () => {
  return (
    <section className={`Card ${styles.Tecnologias}`}>
      <h2 className={`Titulo ${styles.Titulo}`}>Tecnologias</h2>
      <ul className={styles.Lista}>
        <li>
          <Html5 className={styles.html5Logo} />
        </li>
        <li>
          <CssThree className={styles.cssThreeLogo} />
        </li>
        <li>
          <Javascript className={styles.javaScriptLogo} />
        </li>
        <li>
          <Git className={styles.gitLogo} />
        </li>
        <li>
          <Github className={styles.GithubLogo} />
        </li>
        <li>
          <ReactJs className={styles.reactLogo} />
        </li>
        <li>
          <Sass className={styles.sassLogo} />
        </li>
        <li>
          <Typescript className={styles.typescriptLogo} />
        </li>
        <li>
          <Nextdotjs className={styles.nextDotJsLogo} />
        </li>
      </ul>
    </section>
  );
};

export default Tecnologias;
