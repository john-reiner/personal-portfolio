import React from 'react';
//Components 
import Footer from './Components/Footer';
import Header from './Components/Header'
import Portfolio from './Components/Portfolio'
import Resume from './Components/Resume'
import About from './Components/About'


import './App.css';

function App() {

  return (
    <div className={'App'}>
      <Header />
      <Portfolio />
      <Resume />
      <About />
      <Footer />
    </div>
  );
}

export default App;