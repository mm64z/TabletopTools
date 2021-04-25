import { ReducerManager } from "../core/state/ReducerManager";
import { StateHandler } from "./state/StateHandler";

export {};
ReducerManager.add("narrativeState", StateHandler.updateState);
