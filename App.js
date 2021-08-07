import React from 'react';
import './App.css';
import './custom.scss';
import Who from './who.js';
import What from './what.js';
import Done from './done.js';
import Contact from './contact.js';

import {Row, Col, Container} from 'react-bootstrap';


function App() {
  
  return (
    <div className="App">
      <header className="Main">
          <Container fluid="md">
            <Row> 
              <Col sm={4}>
                <Who />
              </Col>
              <Col>
                <What />
              </Col>
            </Row>
            <br />
            <Row>
              <Col>
                <Done />
              </Col>
              <Col sm={4}>
                <Contact />
              </Col>
            </Row>
          </Container>
      </header>
      <footer className='foot' style={{fontSize: 10 , backgroundColor: 'black', color: 'white'}}>
        Paul Staples 2021
        Background courtesy of WallpaperAccess
      </footer>
    </div>
  );
}

export default App;
