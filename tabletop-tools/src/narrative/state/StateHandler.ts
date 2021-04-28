import { AnyAction } from 'redux'
import { StateHelper } from '../../core/state/StateHelper';
import { NarrativeBeat } from '../interfaces';

import { ActionTypes, INITIAL_STATE } from './constants';
import { AddNarrativeBeatAction, NarrativeState } from './interfaces';

export class StateHandler {
  public static updateState (state: NarrativeState = INITIAL_STATE, action: AnyAction): NarrativeState {
    switch(action.type) {
      case ActionTypes.AddNarrativeBeat:
        const newBeatsList = state.beats.concat([(action as AddNarrativeBeatAction).beat]);
        return StateHelper.createNewState(state, {beats: newBeatsList}) as NarrativeState;
      case ActionTypes.UpdateNarrativeBeat:
        const updatedList = state.beats.map((beat: NarrativeBeat) => {
          if (beat.id === action.beat.id) {
            return Object.assign({}, beat, action.beat);
          }
          return beat;
        })
        return StateHelper.createNewState(state, {beats: updatedList}) as NarrativeState;
      default:
        return state;
    }
  }
}
