import React from 'react';
import './App.css';
import Contact from './Components/Contact';
import Educacao from './Components/Educacao';
import Experiencias from './Components/Experiencias';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Perfil from './Components/Perfil';
import Recent from './Components/Recent';
import RecentPosts from './Components/RecentPosts';
import Repositories from './Components/Repositories';
import Tecnologias from './Components/Tecnologias';
import { UserStorage } from './UserContext';

function App() {
  return (
    <div className="App">
      <UserStorage>
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
            <Recent />
            <RecentPosts />
          </main>
        </div>
        <Footer />
      </UserStorage>
    </div>
  );
}

export default App;
