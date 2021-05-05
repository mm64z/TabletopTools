import { NarrativeState } from "./interfaces";
import { LocalStorage } from "../../core/utils/LocalStorage";

export const ROOT_PATH = 'Narrative';
export const COOKIE_PATH = 'narrative-state-cookie';

export enum ActionTypes {
  AddNarrativeBeat = 'ADD_NARRATIVE_BEAT_ACTION',
  RemoveNarrativeBeat = 'REMOVE_NARRATIVE_BEAT_ACTION',
  UpdateNarrativeBeat ='UPDATE_NARRATIVE_BEAT_ACTION',
  UpdateTitle ='UPDATE_TITLE_ACTION'
}

const savedState: NarrativeState | undefined = LocalStorage.read<NarrativeState>(COOKIE_PATH);
const DEFAULT_STATE: NarrativeState = {
  title: '',
  beats: []
};
export const INITIAL_STATE: NarrativeState = savedState || DEFAULT_STATE;
