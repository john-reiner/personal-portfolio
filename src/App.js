import React, {useState} from 'react';
//Components 
import Footer from './Components/Footer';
import Header from './Components/Header'
import Portfolio from './Components/Portfolio'
import Resume from './Components/Resume'
import About from './Components/About'
import Contact from './Components/Contact'

import './App.css';

function App() {

  const [showContact, setShowContact] = useState(false)

  return (
    <div className={'App'}>
      <Header setShowContact={setShowContact} />
      <Portfolio />
      <Resume />
      <About />
      <Footer />
      <Contact setShowContact={setShowContact} showContact={showContact} />
    </div>
  );
}

export default App;