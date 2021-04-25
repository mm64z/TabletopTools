import React from 'react';
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import { FaPlus } from 'react-icons/fa';
import { v4 as generateUuid } from 'uuid';

import { NarrativeState } from '../state/interfaces';
import { StateDispatcher } from '../state/StateDispatcher';
import { NarrativeBeatList } from './NarrativeBeatList';

export class AddNarrativeBeatButton extends React.Component<{}, {}> {

  addBlankBeat () {
    StateDispatcher.addNarrativeBeat({
      id: generateUuid(),
      title: '',
      summary: '',
      outcomes: []
    });
  }

  render() {
    return (
       <span>
         <OverlayTrigger placement="right" overlay={<Tooltip id='add-narrative-beat-tooltip'>Add narrative beat</Tooltip>}>
           <Button variant="secondary" onClick={() => this.addBlankBeat()}><FaPlus/></Button>
         </OverlayTrigger>
       </span>
     );
   }
}
