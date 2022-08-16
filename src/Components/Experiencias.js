import React from 'react';
import styles from './Css/Experiencias.module.css';

const minhasExperiencias = [
  {
    id: 1,
    empresa: 'Roma Empreendimentos',
    funcao: 'Alx. Escritório',
    entrada: 2012,
    saida: 2013
  },
  {
    id: 2,
    empresa: 'Araruna Fotografia',
    funcao: 'Fotógrafo',
    entrada: 2013,
    saida: 2014
  },
  {
    id: 3,
    empresa: 'Viva Caldas',
    funcao: 'Promotor de Marketing',
    entrada: 2014,
    saida: 2014
  },
  {
    id: 4,
    empresa: 'Resort do Lago',
    funcao: 'Promotor de Marketing',
    entrada: 2014,
    saida: 2016
  },
  {
    id: 5,
    empresa: 'Resort do Lago',
    funcao: 'Supervisor de Captação',
    entrada: 2016,
    saida: 2021
  },
  {
    id: 6,
    empresa: 'Evian Thermas Residence',
    funcao: 'Supervisor de Captação',
    entrada: 2022,
    saida: 2022
  }
];

const Experiencias = () => {
  return (
    <section className={`Card ${styles.Experiencias}`}>
      <h2 className={`Titulo ${styles.titulo}`}>Experiencias</h2>
      <ul className={styles.ul}>
        {minhasExperiencias.map((experiencia) => (
          <li key={experiencia.id} className={styles.lista}>
            <h3 className={styles.empresa}>{experiencia.empresa}</h3>
            <p className={styles.periodo}>
              {experiencia.entrada} - {experiencia.saida}
            </p>
            <p className={styles.funcao}>{experiencia.funcao}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Experiencias;
