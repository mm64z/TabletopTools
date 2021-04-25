import { AnyAction } from 'redux'

import { ActionTypes, INITIAL_STATE } from './constants';
import { NarrativeState } from './interfaces';

export class StateHandler {
  public static updateState (state: NarrativeState = INITIAL_STATE, action: AnyAction): NarrativeState {
    console.log('action', action);
    console.log('state', state);
    switch(action.type) {
      case ActionTypes.AddNarrativeBeat:
        return state;
      default:
        return state;
    }
  }
}
