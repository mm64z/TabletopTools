import { NarrativeState } from "./interfaces";
import { LocalStorage } from "../../core/utils/LocalStorage";

export const ROOT_PATH = 'Narrative';
export const COOKIE_PATH = 'Beats';

export enum ActionTypes {
  AddNarrativeBeat = 'ADD_NARRATIVE_BEAT_ACTION',
  RemoveNarrativeBeat = 'REMOVE_NARRATIVE_BEAT_ACTION',
  UpdateNarrativeBeat ='UPDATE_NARRATIVE_BEAT_ACTION'
}

var cookies = LocalStorage.read(COOKIE_PATH);
export const INITIAL_STATE: NarrativeState = {
  beats: cookies || []
}
