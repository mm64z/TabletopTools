import { createStore, combineReducers, Store, Reducer } from 'redux';

export class ReducerManager {

  // Create an object which maps keys to reducers
  private static reducers: {[key: string]: Reducer} = { }

  // Create the initial combinedReducer
  private static combinedReducer = combineReducers(ReducerManager.reducers);

  // An array which is used to delete state keys when reducers are removed
  private static keysToRemove: Array<string> = [];

  private static store: Store;

  public static getReducerMap () {
    return ReducerManager.reducers;
  }

  // The root reducer function exposed by this object
  // This will be passed to the store
  // @ts-ignore
  public static reduce (state, action) {
    // If any reducers have been removed, clean up their state first
    if (ReducerManager.keysToRemove.length > 0) {
      state = { ...state };
      for (let key of ReducerManager.keysToRemove) {
        delete state[key];
      }
      ReducerManager.keysToRemove = [];
    }

    // Delegate to the combined reducer
    return ReducerManager.combinedReducer(state, action);
  }

  // Adds a new reducer with the specified key
  public static add (key: string, reducer: Reducer) {
    if (!key || ReducerManager.reducers[key]) {
      return;
    }

    // Add the reducer to the reducer mapping
    ReducerManager.reducers[key] = reducer;

    // Generate a new combined reducer
    // @ts-ignore
    ReducerManager.combinedReducer = combineReducers(reducers);
  }

  // Removes a reducer with the specified key
  public static remove (key: string) {
    if (!key || !ReducerManager.reducers[key]) {
      return;
    }

    // Remove it from the reducer mapping
    delete ReducerManager.reducers[key];

    // Add the key to the list of keys to clean up
    ReducerManager.keysToRemove.push(key);

    // Generate a new combined reducer
    // @ts-ignore
    ReducerManager.combinedReducer = combineReducers(reducers);
  }

  // @ts-ignore
  public static configureStore (initialState) {
    // Create a store with the root reducer function being the one exposed by the manager.
    if (!ReducerManager.store) {
      ReducerManager.store = createStore(ReducerManager.reduce, initialState);
    }
  }
}
