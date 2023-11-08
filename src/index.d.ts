import { AxiosInstance } from 'axios';

declare module '@obi-tec/common-libs' {

  interface Cache {
    set(key: string, value: any, ttl: number): void;
    get<T>(key: string): T;
    del<T>(key: string): T;
    ttl(key: string, ttl: number): void;
  }

  export const axios: AxiosInstance;
  export const cache: Cache;
}