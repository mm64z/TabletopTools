import React from 'react';
import { connect } from 'react-redux';

import { NarrativeBeat } from '../interfaces';
import { NarrativeState } from '../state/interfaces';

export class NarrativeBeatList extends React.Component<any, any> {
  private beats: Array<NarrativeBeat>;
  constructor (props: NarrativeState) {
    super (props);
    this.beats = props.beats;
  }

 render() {
   return (
     <div className="col-xs-12">
      {this.beats.map((beat: NarrativeBeat) => (
        <div className="Card">
          <div className="CardTitle">{beat.title}</div>
          <div className="CardBody">{beat.summary}</div>
        </div>
      ))}
     </div>
   );
 }
}

//export connect(mapStateToProps)(NarrativeBeatList);
