import React from 'react';
import './App.scss';
import Header from './components/Header';
import Nav from './components/Nav'
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components//Contact.js';


function App() {
  return (
    <div className="App">
      <Header />
      <Nav/>
      <About />
      <Projects/>
      <Contact/>
      
    </div>
    
  );
}

export default App;
