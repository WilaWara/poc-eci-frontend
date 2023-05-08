import { Component, OnInit } from '@angular/core';
import { IState } from 'src/app/core/models/IState';
import { ProductService } from 'src/app/core/services/product/product.service';
import { StateService } from 'src/app/core/services/state/state.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  state!: IState;
  products: any[];

  constructor(
    private productServices: ProductService,
    private stateServices: StateService
  ) {
    this.state = {
      totalProducts: [], 
      cartProducts: [], 
      cartOpen: false
    }
    this.stateServices.getEvents().subscribe((event) => {
      this.state = event;
    });

    this.products = [];
  }

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.productServices.getAll().subscribe((response) => {
      this.products = response;
      this.state.totalProducts = this.products;
      this.stateServices.emitEvent(this.state);
    });
  }

}
