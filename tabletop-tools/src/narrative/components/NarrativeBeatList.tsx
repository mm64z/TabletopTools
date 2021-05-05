import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { connect } from 'react-redux';

import { GridItem } from '../../core/components/GridItem';
import { NarrativeBeat } from '../interfaces';
import { NarrativeState } from '../state/interfaces';
import { AddNarrativeBeatButton } from './AddNarrativeBeatButton';
import { NarrativeForm } from './NarrativeForm';

import './main.scss';
import { INITIAL_STATE } from '../state/constants';
import { StateDispatcher } from '../state/StateDispatcher';

interface NarrativeBeatListProps { // Read-only
  beats: Array<NarrativeBeat>;
  title: string;
}

interface NarrativeBeatListState { // Write-only
  title: string;
}

class NarrativeBeatListComponent extends React.Component<NarrativeBeatListProps, NarrativeBeatListState> {
  public props: NarrativeBeatListProps;
  public state: NarrativeBeatListState;

  constructor (props: NarrativeBeatListProps) {
    super (props);
    this.props = props;
    this.state = {
      title: props.title
    };
    this.onTitleChange = this.onTitleChange.bind(this);
    this.saveOnBlur = this.saveOnBlur.bind(this);
  }

  onTitleChange (event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({
      title: event.target.value
    });
  }

  saveOnBlur () {
    StateDispatcher.updateTitle(this.state.title);
  }

 render() {
   return (
     <GridItem>
       <Container fluid>
       <Row>
         <Col xs={11}>
         <Form.Control type="input" placeholder="Title this arc" value={this.state.title}
                       onChange={this.onTitleChange} onBlur={this.saveOnBlur}/>
         </Col>
         <Col xs={1}><AddNarrativeBeatButton/></Col>
       </Row>
        {this.props.beats.map((beat: NarrativeBeat) => (
          <Row key={beat.id}>
            <Col xs={12}>
              <div className="Card">
                <NarrativeForm beat={beat} />
              </div>
            </Col>
          </Row>
        ))}
      </Container>
    </GridItem>
   );
 }
}

const mapStateToProps = (externalState: { narrative: NarrativeState }): NarrativeBeatListProps => {
  if (externalState.narrative) {
    return {
      title: externalState.narrative.title,
      beats: externalState.narrative.beats
    };
  }
  return {
    title: INITIAL_STATE.title,
    beats: INITIAL_STATE.beats
  }
}

export const NarrativeBeatList = connect(mapStateToProps)(NarrativeBeatListComponent);
