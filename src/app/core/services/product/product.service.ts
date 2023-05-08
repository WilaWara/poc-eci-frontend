import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IProductCreate } from '../../models/IProductCreate';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get(`${environment.apiUrl}api/v1/products`);
  }

  getByFilters(
    name?: string,
    categoryId?: number,
    minPrice?: number,
    maxPrice?: number
  ): Observable<any> {
    return this.http.get(
      `${environment.apiUrl}api/v1/products/filters?name=${name}&categoryId=${categoryId}&minPrice=${minPrice}&maxPrice=${maxPrice}`
    );
  }

  create(product: IProductCreate): Observable<any> {
    return this.http.post<any>(`${environment.apiUrl}api/v1/products`, product)
  }

  update(id: number, product: IProductCreate): Observable<any> {
    return this.http.put<any>(`${environment.apiUrl}api/v1/products/${id}`, product);
  }

  delete(id: number): Observable<any> {
    return this.http.delete<any>(`${environment.apiUrl}api/v1/products/` + id);
  }
}
