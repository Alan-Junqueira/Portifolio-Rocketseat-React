import React from 'react';
import { UserContext } from '../UserContext';
import styles from './Css/Contact.module.css';
import { ReactComponent as Pin } from '../assets/map-pin.svg';
import { ReactComponent as Wallet } from '../assets/briefcase.svg';
import { ReactComponent as Github } from '../assets/github.svg';
import { ReactComponent as Linkedin } from '../assets/linkedin.svg';
import { ReactComponent as Twitter } from '../assets/twitter.svg';
import { ReactComponent as Globe } from '../assets/globe.svg';
import { ReactComponent as Mail } from '../assets/mail.svg';

const Contact = () => {
  const { data } = React.useContext(UserContext);
  const { login, twitter_username, html_url } = data;

  return (
    <ul className={`Card ${styles.contact}`}>
      <li>
        <Pin />
        <p>Brasil</p>
      </li>

      <li>
        <Wallet />
        <p>Autonomo</p>
      </li>

      <li>
        <Github />
        <p>{login}</p>
      </li>

      <li>
        <Linkedin />
        <p>alan-junqueira</p>
      </li>

      <li>
        <Twitter />
        <p>{twitter_username}</p>
      </li>

      <li>
        <Globe />
        <a
          href="https://github.com/Alan-Junqueira"
          target="_blank"
          rel="noreferrer"
        >
          {html_url}
        </a>
      </li>

      <li>
        <Mail />
        <p>contato.alanjunqueira@gmail.com</p>
      </li>
    </ul>
  );
};

export default Contact;
