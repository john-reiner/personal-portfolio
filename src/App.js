import React, {useState, useEffect} from 'react';
//Components 
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import MainBody from './Components/MainBody';

import './App.css';

function App() {

  const [data, setData] = useState({})
  const [darkmode, setDarkMode] = useState(false)

  const switchDarkmode = () => {
    setDarkMode(!darkmode)
    console.log(darkmode)
  }

  useEffect(() => {
    fetch('/resumeData.json')
    .then(response => response.json())
    .then(data => setData(data))
  }, [])

  return (
    <div className={'App'}>
      <NavBar darkmode={darkmode} switchDarkmode={switchDarkmode}/>
      <MainBody data={data} />
      <Footer />
    </div>
  );
}

export default App;