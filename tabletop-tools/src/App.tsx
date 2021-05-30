import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { FaBars, FaGlobe, FaProjectDiagram } from 'react-icons/fa';

import { Grid } from './core/components/Grid';
import './narrative';
import { NarrativeBeatList } from './narrative/components/NarrativeBeatList';

import './App.scss';
import SquareGrid from './mapTokens/SquareGrid';
import { LocalStorage } from './core/utils/LocalStorage';

interface AppState {
  gridOn: boolean;
  narrativeOn: boolean;
}

const stateOff: AppState = {
    gridOn: false,
    narrativeOn: false
}

class App extends React.Component<any,AppState> {
  state: AppState;
  constructor(props) {
    super(props);
    this.state = LocalStorage.read('lastState') || {
      narrativeOn: true,
      gridOn: false
    };
  }

  activateGrid = () => {
    const newState = Object.assign({}, stateOff, {
      gridOn: true
    })
    this.setState(newState);
    LocalStorage.set('lastState', newState)
  }

  activateNarrative = () => {
    const newState = Object.assign({}, stateOff, {
      narrativeOn: true
    })
    this.setState(newState);
    LocalStorage.set('lastState', newState)
  }

  render() {
    const displayedComponent = this.state.gridOn ? <SquareGrid/> :
                                                  <NarrativeBeatList/>;
    return (
      <div className="App">
        <Container>
          <Row>
            <Col xs={9}>DM Tools Application</Col>
            <Col xs={3}>
              <button onClick={this.activateGrid} className="ActionBarButton"><FaGlobe/></button>
              <button onClick={this.activateNarrative} className="ActionBarButton"><FaProjectDiagram/></button>
              <button className="ActionBarButton"><FaBars/></button>
            </Col>
          </Row>
          <Grid>
            {displayedComponent}
          </Grid>
        </Container>
      </div>
    );
  }
}

export default App;
