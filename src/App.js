import React from 'react';

import './App.css';
import AboutMe from './components/About-me';
import Portfolio from './components/About-me/Portfolio';

function App() {
  return (
    <div>
      <main>
        <AboutMe></AboutMe>
        <Portfolio></Portfolio>
      </main>
    </div>
  );
}

export default App;
