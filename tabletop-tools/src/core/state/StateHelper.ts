export class StateHelper {
  public static createNewState<T> (oldState: T, newState: Partial<T>):  T {
    return Object.assign({}, oldState, newState) as T;
  }
}
