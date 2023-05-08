import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/core/services/category/category.service';
import { ProductService } from 'src/app/core/services/product/product.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {
  categories: any[];
  cart: any;

  constructor(
    private categoryServices: CategoryService,
    private productServices: ProductService
  ) {
    this.categories = [];
    this.cart = {
      items: 0
    }
  }

  ngOnInit(): void {
    this.loadCategories();
  }

  loadCategories(): void {
    this.categoryServices.getAll().subscribe((response) => {
      this.categories = response;
    });
  }

  search(productName: string): void {
    this.productServices.getByFilters(productName, 0, 0, 0).subscribe((response) => {
      console.log(response);
    });
  }

  searchWithFilters(): void {

  }

  clearFilters(): void {

  }
}
