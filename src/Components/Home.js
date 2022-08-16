import React from 'react';
import Contact from './Contact';
import Educacao from './Educacao';
import Experiencias from './Experiencias';
import Header from './Header';
import Perfil from './Perfil';
import Recent from './Recent';
import RecentPosts from './RecentPosts';
import Repositories from './Repositories';
import Tecnologias from './Tecnologias';

const Home = () => {
  return (
    <>
      <div className="container">
        <aside>
          <Perfil />
          <Contact />
          <Tecnologias />
          <Experiencias />
          <Educacao />
        </aside>
        <main>
          <Header />
          <Repositories />
        </main>
        <div className="RecentPosts">
          <Recent />
          <RecentPosts />
        </div>
      </div>
    </>
  );
};

export default Home;
