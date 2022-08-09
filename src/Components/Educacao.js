import React from 'react';
import styles from './Css/Educacao.module.css';

const estudos = [
  {
    id: 1,
    instituicao: 'Rocketseat',
    inicio: '2022',
    fim: '2022',
    curso: 'Conectar'
  },
  {
    id: 2,
    instituicao: 'Rocketseat',
    inicio: '2022',
    fim: '2022',
    curso: 'Fundamentar'
  },
  {
    id: 3,
    instituicao: 'Origamid',
    inicio: '2022',
    fim: '2022',
    curso: 'JavaScript Completo ES6'
  },
  {
    id: 4,
    instituicao: 'Origamid',
    inicio: '2022',
    fim: '2022',
    curso: 'React Completo'
  },
  {
    id: 5,
    instituicao: 'Origamid',
    inicio: '2022',
    fim: '2022',
    curso: 'CSS Avançado Posicionamento'
  }
];

const Educacao = () => {
  return (
    <section className={`Card ${styles.Educacao}`}>
      <h2 className={`Titulo ${styles.titulo}`}>Educação</h2>
      <ul className={styles.ul}>
        {estudos.map((estudo) => (
          <li key={estudo.id} className={styles.lista}>
            <h3 className={styles.instituicao}>{estudo.instituicao}</h3>
            <p className={styles.periodo}>
              {estudo.inicio} - {estudo.fim}
            </p>
            <p className={styles.funcao}>{estudo.curso}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Educacao;
