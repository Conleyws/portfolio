import React from 'react';
import Header from './components/header';
import About from './components/about';
import Projects from './components/projects';
import Contact from './components/contact';
import './App.css'

function App() {
  return (
    <div className="app" class="flex flex-col space-y-4 items-center"> 
          <Header />
          <About />
          <Projects />
          <Contact />
      </div>
  );
}

export default App;
