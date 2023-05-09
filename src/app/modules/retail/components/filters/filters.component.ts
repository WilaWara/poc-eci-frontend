import { Component, OnInit } from '@angular/core';
import { ICategoryResponse } from 'src/app/core/models/ICategoryResponse';
import { IState } from 'src/app/core/models/IState';
import { CategoryService } from 'src/app/core/services/category/category.service';
import { ProductService } from 'src/app/core/services/product/product.service';
import { StateService } from 'src/app/core/services/state/state.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {
  state!: IState;
  categories: ICategoryResponse[];

  constructor(
    private categoryServices: CategoryService,
    private stateServices: StateService,
    private productServices: ProductService
  ) {
    this.state = {
      totalProducts: [], 
      cartProducts: [], 
      cartOpen: false
    }
    this.categories = [];
    this.stateServices.getEvents().subscribe((event) => {
      this.state = event;
    });
  }

  ngOnInit(): void {
    this.loadCategories();
  }

  loadCategories(): void {
    this.categoryServices.getAll().subscribe((response) => {
      this.categories = response;
    });
  }

  search(name: string, categoryId: number, minPrice: number, maxPrice: number): void {
    this.productServices.getByFilters(name, categoryId, minPrice, maxPrice).subscribe((response) => {
      this.state.totalProducts = response;
      this.stateServices.emitEvent(this.state);
    });
  }
  
}
