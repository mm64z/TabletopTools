import { CoreReducerManager } from '../../core/constants';
import { NarrativeBeat } from '../interfaces';
import { ActionTypes } from './constants';

export class StateDispatcher {

  public static updateTitle (title: string): void {
    CoreReducerManager.store.dispatch(
      {
        type: ActionTypes.UpdateTitle,
        title: title
      }
    )
  }

  public static addNarrativeBeat(beat: NarrativeBeat): void {
    CoreReducerManager.store.dispatch(
      {
        type: ActionTypes.AddNarrativeBeat,
        beat: beat
      }
    );
  }

  public static updateNarrativeBeat(beat: NarrativeBeat): void {
    CoreReducerManager.store.dispatch(
      {
        type: ActionTypes.UpdateNarrativeBeat,
        beat: beat
      }
    );
  }

  public static removeNarrativeBeat(beat: NarrativeBeat): void {
    CoreReducerManager.store.dispatch(
      {
        type: ActionTypes.RemoveNarrativeBeat,
        beat: beat
      }
    );
  }
}
