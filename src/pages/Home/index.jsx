import React from 'react';
import Perfil from '../../Components/Perfil'
import Contact from '../../Components/Contact'
import Tecnologias from '../../Components/Tecnologias'
import Experiencias from '../../Components/Experiencias'
import Educacao from '../../Components/Educacao'
import Header from '../../Components/Header'
import Repositories from '../../Components/Repositories'
import Recent from '../../Components/Recent'
import RecentPosts from '../../Components/RecentPosts'


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
