import React from 'react';
import './App.css';
import Footer from './Components/Footer';
import Home from './pages/Home';
import { UserStorage } from './UserContext';

function App() {
  return (
    <div className="App">
      <UserStorage>
        <Home />
        <Footer />
      </UserStorage>
    </div>
  );
}

export default App;
