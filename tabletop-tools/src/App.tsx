import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { FaBars } from 'react-icons/fa';

import { Grid } from './core/components/Grid';

import './App.scss';
import SquareGrid from './mapTokens/SquareGrid';

function App() {
  return (
    <div className="App">
      <Container>
        <Row>
          <Col xs={11}>DM Tools Application</Col>
          <Col><FaBars/></Col>
        </Row>
        <Row>
          <Grid />
        </Row>
        <Row>
          <SquareGrid/>
        </Row>
      </Container>
    </div>
  );
}

export default App;
