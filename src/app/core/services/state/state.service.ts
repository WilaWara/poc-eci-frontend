import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { IState } from '../../models/IState';


@Injectable({
  providedIn: 'root'
})
export class StateService {
  private appState = new BehaviorSubject<IState>({
    totalProducts: [],
    cartProducts: [],
    cartOpen: false
  });

  constructor() {}

  emitEvent(event: IState) {   
    this.appState.next(event);
  }

  getEvents() {
    return this.appState.asObservable();
  }
}
