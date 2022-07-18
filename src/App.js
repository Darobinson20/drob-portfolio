import React from 'react';
import './App.css';
import AboutMe from './components/About-me';
import Portfolio from './components/Portfolio';
import Nav from './components/Nav';


function App() {
  return (
    <div>
      <Nav></Nav>
      <main>
        <AboutMe></AboutMe>
        <Portfolio></Portfolio>
      </main>
    </div>
  );
}

export default App;
