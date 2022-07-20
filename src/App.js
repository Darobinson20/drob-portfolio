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
      <Nav
        // Portfolio={Portfolio}
        // setCurrentCategory={setCurrentCategory}
        // currentCategory={currentCategory}
        // contactSelected={contactSelected}
        // setContactSelected={setContactSelected}
      ></Nav>
      <main>
      
          <>
            
            <AboutMe></AboutMe>
            <Portfolio></Portfolio>
            <Resume></Resume>
          </>
    
          <ContactForm></ContactForm>
  
      </main>
    </div>
  );
}

export default App;
