import { CoreReducerManager } from "../core/constants";
import { INITIAL_STATE } from "./state/constants";
import { StateHandler } from "./state/StateHandler";

CoreReducerManager.configureStore({ 'narrative': INITIAL_STATE });
CoreReducerManager.add('narrative', StateHandler.updateState);
