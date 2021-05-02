import Cookies from 'js-cookie';

export class LocalStorage {

  public static set<T = any> (key: string, data: T, expirationInDays?: number): void {
    let stringifiedData: string | undefined = undefined;
    if (data instanceof Object) {
      stringifiedData = JSON.stringify(data);
    }
    if (expirationInDays) {
      Cookies.set(key, stringifiedData || data, {expires: expirationInDays});
      return;
    }
    Cookies.set(key, stringifiedData || data);
  }

  public static read<T = any> (key: string): T {
    const value = Cookies.get(key);
    try {
      const destringifiedData = JSON.parse(value);
      if (destringifiedData instanceof Object) {
        return destringifiedData as T;
      }
      return value as T;
    } catch (e) {
      // It's not JSON
      return value as T;
    }
  }
}
