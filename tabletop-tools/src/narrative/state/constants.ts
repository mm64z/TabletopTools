import { NarrativeState } from "./interfaces";

export const ROOT_PATH = 'Narrative';

export enum ActionTypes {
  AddNarrativeBeat = 'ADD_NARRATIVE_BEAT_ACTION',
  RemoveNarrativeBeat = 'REMOVE_NARRATIVE_BEAT_ACTION',
  UpdateNarrativeBeat ='UPDATE_NARRATIVE_BEAT_ACTION'
}

export const INITIAL_STATE: NarrativeState = {
  beats: []
}
