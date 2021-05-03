import React from 'react';
import Form from 'react-bootstrap/Form';
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

 render() {
   return (
     <div className="NarrativeForm text-left">
       <Form>
         <Form.Control type="input" placeholder="Title" value={this.state.beat.title}
                       onChange={this.onTitleChange} onBlur={this.saveOnBlur}/>
         <Form.Control type="textarea" placeholder="Describe what happens in this plot beat" value={this.state.beat.summary}
                       onChange={this.onSummaryChange} onBlur={this.saveOnBlur}/>
       </Form>
     </div>
   );
 }
}
