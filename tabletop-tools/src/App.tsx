import React from 'react';
import Button from 'react-bootstrap/Button';

import { AddNarrativeBeatButton } from './narrative/components/AddNarrativeBeatButton';
import { NarrativeBeatList } from './narrative/components/NarrativeBeatList';

import './App.scss';
import { INITIAL_STATE } from './narrative/state/constants';
import { ReducerManager } from './core/state/ReducerManager';

function App() {
  const defaultProps = INITIAL_STATE;
  ReducerManager.configureStore({});

  return (
    <div className="App">
      <Button variant="primary">Start a narrative</Button>
      <AddNarrativeBeatButton/>
      <NarrativeBeatList beats={defaultProps.beats} />
    </div>
  );
}

export default App;
