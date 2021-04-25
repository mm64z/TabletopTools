import { NarrativeBeat } from '../interfaces';
import { ActionTypes } from './constants';
import { AddNarrativeBeatAction } from './interfaces';

export class StateDispatcher {

  public static addNarrativeBeat(narrativeBeat: NarrativeBeat): AddNarrativeBeatAction {
    console.log('adding beat');
    return {
      type: ActionTypes.AddNarrativeBeat,
      beat: narrativeBeat
    };
  }
}
