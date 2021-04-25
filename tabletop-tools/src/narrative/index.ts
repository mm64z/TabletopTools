import { CoreReducerManager } from "../core/constants";
import { StateHandler } from "./state/StateHandler";

CoreReducerManager.add('narrativeStateReducer', StateHandler.updateState);
