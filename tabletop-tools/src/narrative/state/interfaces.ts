import { NarrativeBeat } from '../interfaces';
import { ActionTypes } from './constants';

export interface AddNarrativeBeatAction {
  type: ActionTypes.AddNarrativeBeat,
  beat: NarrativeBeat;
}

export interface NarrativeState {
  beats: Array<NarrativeBeat>;
}
