import { Component } from '@angular/core';
import { IState } from 'src/app/core/models/IState';
import { StateService } from 'src/app/core/services/state/state.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent {
  state!: IState;
  
  constructor(private stateServices: StateService) {
    this.state = {
      totalProducts: [], 
      cartProducts: [], 
      cartOpen: false
    }
    this.stateServices.getEvents().subscribe((event) => {
      this.state = event;
    });
  }

  openCart() {
    this.state.cartOpen = true;
    this.stateServices.emitEvent(this.state);
  }

}
