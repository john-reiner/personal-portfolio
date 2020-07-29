import React, {useState, useEffect} from 'react';
//Components 
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import MainBody from './Components/MainBody';

import './App.css';

function App() {

  const [data, setData] = useState({})

  useEffect(() => {
    fetch('/resumeData.json')
    .then(response => response.json())
    .then(data => setData(data))
  }, [])

  return (
    <div className={'App'}>
      <NavBar />
      <MainBody data={data} />
      <Footer />
    </div>
  );
}

export default App;