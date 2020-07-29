import React, {useState, useEffect} from 'react';
import {Container, Row, Col} from 'react-bootstrap'
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
    <Container fluid className={'App'}>
      <Row>
        <Col>
          <NavBar />
          <MainBody data={data} />
          <Footer />
        </Col>
      </Row>
    </Container>
  );
}

export default App;