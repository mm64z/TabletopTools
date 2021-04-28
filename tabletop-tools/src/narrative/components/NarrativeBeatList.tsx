import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { connect } from 'react-redux';

import { GridItem } from '../../core/components/GridItem';
import { NarrativeBeat } from '../interfaces';
import { NarrativeState } from '../state/interfaces';
import { AddNarrativeBeatButton } from './AddNarrativeBeatButton';
import { NarrativeForm } from './NarrativeForm';

import './main.scss';

interface NarrativeBeatListProps {
  beats: Array<NarrativeBeat>;
}

class NarrativeBeatListComponent extends React.Component<NarrativeState, NarrativeBeatListProps> {
  public props: NarrativeBeatListProps = { beats: [] };

  constructor (props: NarrativeBeatListProps) {
    super (props);
    this.props = props;
  }

  showCardOrForm (beat: NarrativeBeat) {
    if (!beat.title && !beat.summary && !beat.outcomes?.length) {
      return (
        <div className="Card">
          <NarrativeForm beat={beat} />
        </div>
      );
    }
    return this.NarrativeCard(beat);
  }

  NarrativeCard (beat: NarrativeBeat) {
    return (
      <div className="Card">
        <div className="CardTitle">{beat.title}</div>
        <div className="CardBody">{beat.summary}</div>
      </div>
    );
  }

 render() {
   return (
     <GridItem>
       <Container fluid>
       <Row>
         <Col xs={11}>Your arc title</Col>
         <Col xs={1}><AddNarrativeBeatButton/></Col>
       </Row>
        {this.props.beats.map((beat: NarrativeBeat) => (
          <Row key={beat.id}>
            <Col xs={12}>
              <div>
                {this.showCardOrForm(beat)}
              </div>
            </Col>
          </Row>
        ))}
      </Container>
    </GridItem>
   );
 }
}

const mapStateToProps = (state: { narrative: NarrativeState }): NarrativeBeatListProps => {
  if (state.narrative) {
    return {
      beats: state.narrative.beats
    };
  }
  return {
    beats: []
  }
}

export const NarrativeBeatList = connect(mapStateToProps)(NarrativeBeatListComponent);
