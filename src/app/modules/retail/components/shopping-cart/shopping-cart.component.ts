import { Component } from '@angular/core';
import { IState } from 'src/app/core/models/IState';
import { StateService } from 'src/app/core/services/state/state.service';
@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent {
  state!: IState;
  
  show: boolean;
  cartProducts: any[];
  total: number;

  constructor(private stateService: StateService) {
    this.show = false;
    this.cartProducts = [];
    this.total = 0;
    this.state = {
      totalProducts: [], 
      cartProducts: [], 
      cartOpen: false
    }
    this.stateService.getEvents().subscribe((event) => {
      this.state = event;
      this.show = event.cartOpen;
      this.cartProducts = event.cartProducts;
      this.total = 0;
      for (let i = 0; i < this.state.cartProducts.length; i++) {
        this.total += this.state.cartProducts[i].price;
      }
    });
  }

  closeCart(): void {
    this.state.cartOpen = false;
    this.stateService.emitEvent(this.state);
  }

  callPaymentGateway(): void {
    
  }

}
