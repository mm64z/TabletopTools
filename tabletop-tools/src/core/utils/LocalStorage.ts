import Cookies from 'js-cookie';

export class LocalStorage {

  public static set<T = any> (key: string, data: T, expirationInDays?: number): void {
    let stringifiedData: string | undefined = undefined;
    if (data instanceof Object) {
      stringifiedData = JSON.stringify(data);
    }
    if (expirationInDays) {
      // @ts-ignore
      Cookies.set(key, stringifiedData || data , {expires: expirationInDays});
      return;
    }
      // @ts-ignore
    Cookies.set(key, stringifiedData || data);
  }

  public static read<T = any> (key: string): T | undefined {
    const value: T | string | undefined = Cookies.get(key) as T | string;
    if (value === undefined) {
      return value;
    }
    try {
      const destringifiedData = JSON.parse(value as string);
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
