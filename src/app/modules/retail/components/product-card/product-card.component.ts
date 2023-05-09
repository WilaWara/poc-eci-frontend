import { Component, Input } from '@angular/core';
import { IProductResponse } from 'src/app/core/models/IProductResponse';
import { IState } from 'src/app/core/models/IState';
import { StateService } from 'src/app/core/services/state/state.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  state!: IState;
  @Input() product!: IProductResponse;
  
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

  addToCart(product: IProductResponse): void {
    this.state.cartProducts.push(product);
    this.stateServices.emitEvent(this.state);
  }

  removeFromCart(id: number): void {
    const index = this.state.cartProducts.findIndex(obj => obj.id === id);

    if (index !== -1) {
      this.state.cartProducts.splice(index, 1);
      this.stateServices.emitEvent(this.state);
    }
  }

  alreadyInCart(id: number): boolean {
    const index = this.state.cartProducts.findIndex(obj => obj.id === id);

    if (index !== -1) {
      return true;
    }

    return false;
  }

}
