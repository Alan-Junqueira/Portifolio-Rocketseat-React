import React from 'react';
import { UserContext } from '../../UserContext';
import styles from './styles.module.css';

const Perfil = () => {
  const { data } = React.useContext(UserContext);
  const { avatar_url, name, bio } = data;

  return (
    <div className={`Card ${styles.Perfil}`}>
      <img className={styles.img} src={avatar_url} alt="Imagem de Perfil" />
      <h2 className={styles.name}>{name}</h2>
      <p className={styles.bio}>{bio}</p>
    </div>
  );
};

export default Perfil;
