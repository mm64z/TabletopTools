import React from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import { FaTimes } from 'react-icons/fa';

import { NarrativeBeat } from '../interfaces';
import { StateDispatcher } from '../state/StateDispatcher';

interface NarrativeFormData {
  beat: NarrativeBeat;
}

export class NarrativeForm extends React.Component<NarrativeFormData, NarrativeFormData> {
  // @ts-ignore
  public state: NarrativeFormData;

  constructor (props: NarrativeFormData) {
    super(props);
    this.state = { beat: props.beat };
    this.onTitleChange = this.onTitleChange.bind(this);
    this.onSummaryChange = this.onSummaryChange.bind(this);
    this.saveOnBlur = this.saveOnBlur.bind(this);
  }

  onTitleChange (event: React.ChangeEvent<HTMLInputElement>) {
    var beat = Object.assign({}, this.state.beat, {title: event.target.value});
    this.setState({
      beat: beat
    })
  }

  onSummaryChange (event: React.ChangeEvent<HTMLTextAreaElement>) {
    var beat = Object.assign({}, this.state.beat, {summary: event.target.value});
    this.setState({
      beat: beat
    })
  }

  saveOnBlur () {
    this.updateBeat(this.state.beat);
  }


  updateBeat (beat: NarrativeBeat) {
    StateDispatcher.updateNarrativeBeat(beat);
  }

  removeBeat (beat: NarrativeBeat) {
    StateDispatcher.removeNarrativeBeat(beat);
  }

 render() {
   return (
     <div className="NarrativeForm text-left">
       <Form>
         <Row>
           <Col xs={11}>
             <Form.Control as="input" placeholder="Title" value={this.state.beat.title}
                           onChange={this.onTitleChange} onBlur={this.saveOnBlur}/>
           </Col>
           <Col xs={1} className="text-right text-light">
            <Button onClick={() => this.removeBeat(this.state.beat)}>
              <FaTimes/>
            </Button>
           </Col>
         </Row>
         <Form.Control as="textarea" rows={5} placeholder="Describe what happens in this plot beat" value={this.state.beat.summary}
                       onChange={this.onSummaryChange} onBlur={this.saveOnBlur}/>
       </Form>
     </div>
   );
 }
}
