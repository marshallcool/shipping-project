import { Injectable } from '@angular/core';

@Injectable()
export class StorageService {

  constructor(
  ) {
  }

  get(name: string): string {
    return localStorage.getItem(name);
  }

  set(name: string, value: string): any {
    localStorage.setItem(name, value);
  }

  clear(name) {
    if (localStorage.getItem(name)) {
      localStorage.removeItem(name);
    }
  }
}
