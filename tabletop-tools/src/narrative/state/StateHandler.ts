import { AnyAction } from 'redux'

import { ActionTypes, INITIAL_STATE, COOKIE_PATH } from './constants';
import { AddNarrativeBeatAction, NarrativeState } from './interfaces';
import { NarrativeBeat } from '../interfaces';
import { LocalStorage } from '../../core/utils/LocalStorage'
import { StateHelper } from '../../core/state/StateHelper';

export class StateHandler {
  public static updateState (state: NarrativeState = INITIAL_STATE, action: AnyAction): NarrativeState {
    let newState: NarrativeState;
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
        newState = StateHelper.createNewState(state, {beats: updatedList}) as NarrativeState;
        LocalStorage.set(COOKIE_PATH, newState);
        return newState;
      case ActionTypes.RemoveNarrativeBeat:
        const prunedList = state.beats.filter((beat: NarrativeBeat) => {
          return beat.id != action.beat.id;
        });
        newState = StateHelper.createNewState(state, {beats: prunedList}) as NarrativeState;
        LocalStorage.set(COOKIE_PATH, newState);
        return newState;
      case ActionTypes.UpdateTitle:
        newState = StateHelper.createNewState(state, {title: action.title}) as NarrativeState;
        LocalStorage.set(COOKIE_PATH, newState);
        return newState;
      default:
        return state;
    }
  }
}
