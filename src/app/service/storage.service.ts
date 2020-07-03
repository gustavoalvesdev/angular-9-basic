import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  add(key, value) {
    window.localStorage.setItem(key, value)
  }

}
