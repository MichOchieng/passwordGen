import React from 'react';
import { Container, Row } from 'react-bootstrap';

import Header from './components/pageHeader';
import Preview from './components/passwordPreview';
import Options from './components/passswordOptions';

import './styles/App.css';

function App() {
  return (
    <div className="App-body">
      <Container>
        <Row>
          <Header/>
        </Row>

        <Row>
          <Preview/>
        </Row>

        <Row>
          <Options/>
        </Row>
      </Container>
    </div>
  );
}

export default App;
