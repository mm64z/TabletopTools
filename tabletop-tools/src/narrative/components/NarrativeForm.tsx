import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { NarrativeBeat } from '../interfaces';
import { StateDispatcher } from '../state/StateDispatcher';

interface NarrativeFormProps {
  beat: NarrativeBeat;
}

export class NarrativeForm extends React.Component {
  // @ts-ignore
  public props: NarrativeFormProps = { beat: {} };

  constructor (props: NarrativeFormProps) {
    super(props);
    this.props = props;
  }

  updateBeat (beat: NarrativeBeat) {
    StateDispatcher.updateNarrativeBeat(beat);
  }

 render() {
   return (
     <div className="NarrativeForm text-left">
       <Form>
         <Form.Control type="input" placeholder="Title" defaultValue={this.props.beat.title} />
         <Form.Control type="textarea" placeholder="Describe what happens in this plot beat" defaultValue={this.props.beat.summary} />
         <Button variant="primary" type="submit" onClick={() => this.updateBeat(this.props.beat)}>Save</Button>
       </Form>
     </div>
   );
 }
}
