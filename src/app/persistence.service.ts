import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PersistenceService {

  get(key: string): any {
    try {
      return localStorage.getItem(key);
    } catch(e) {
      console.error(e);
    }
  }

  save(key: string, value: any): void {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch(e) {
      console.error(e);
    }
  }

  clear(key: string): void {
    try {
      localStorage.removeItem(key);
    } catch(e) {
      console.error(e);
    }
  }
}
