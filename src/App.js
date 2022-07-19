import React from 'react';
import './App.css';
import AboutMe from './components/About-me';
import Portfolio from './components/Portfolio';
import Nav from './components/Nav';
import ContactForm from './components/Contact';
import Resume from './components/Resume';



function App() {
  return (
    <div>
      <Nav></Nav>
     
      <main>
        <AboutMe></AboutMe>
        <Portfolio></Portfolio>
      
        
          <ContactForm></ContactForm>
          <Resume></Resume>
      
      </main>
    </div>
  );
}

export default App;
