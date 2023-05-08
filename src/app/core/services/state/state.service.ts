import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { IState } from '../../models/IState';


@Injectable({
  providedIn: 'root'
})
export class StateService {
  private appState = new Subject<IState>();

  constructor() {
    this.appState.next({
      totalProducts: [],
      cartProducts: [],
      cartOpen: false
    });
  }

  emitEvent(event: any) {   
    this.appState.next(event);
  }

  getEvents() {
    return this.appState.asObservable();
  }
}
