import { createStore, combineReducers, Store, Reducer } from 'redux';

export class ReducerManager {

  // Create an object which maps keys to reducers
  private reducers: {[key: string]: Reducer} = { }

  private combinedReducer;

  // An array which is used to delete state keys when reducers are removed
  private keysToRemove: Array<string> = [];

  private store: Store;

  constructor (initialState: any, ...reducers: Array<Reducer>) {
    // Create the initial combinedReducer
    this.combinedReducer = combineReducers(reducers);
    this.store = createStore(this.reduce, initialState);
  }

  public getReducerMap () {
    return this.reducers;
  }

  // The root reducer function exposed by this object
  // This will be passed to the store
  // @ts-ignore
  public reduce (state, action) {
    // If any reducers have been removed, clean up their state first
    if (this.keysToRemove.length > 0) {
      state = { ...state };
      for (let key of this.keysToRemove) {
        delete state[key];
      }
      this.keysToRemove = [];
    }

    // Delegate to the combined reducer
    return this.combinedReducer(state, action);
  }

  // Adds a new reducer with the specified key
  public add (key: string, reducer: Reducer) {
    if (!key || this.reducers[key]) {
      return;
    }

    // Add the reducer to the reducer mapping
    this.reducers[key] = reducer;

    // Generate a new combined reducer
    // @ts-ignore
    this.combinedReducer = combineReducers(reducers);
  }

  // Removes a reducer with the specified key
  public remove (key: string) {
    if (!key || !this.reducers[key]) {
      return;
    }

    // Remove it from the reducer mapping
    delete this.reducers[key];

    // Add the key to the list of keys to clean up
    this.keysToRemove.push(key);

    // Generate a new combined reducer
    // @ts-ignore
    this.combinedReducer = combineReducers(reducers);
  }

  // @ts-ignore
  public configureStore (initialState) {
    // Create a store with the root reducer function being the one exposed by the manager.
    if (!this.store) {
      this.store = createStore(this.reduce, initialState);
    }
  }
}
