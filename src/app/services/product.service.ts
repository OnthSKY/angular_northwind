import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../models/category';
import { ListResponseModel } from '../models/listResponseModel';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http : HttpClient) { }

  apiUrl = "https://localhost:44349/api/"
  getProducts() : Observable<ListResponseModel<Product>> {
    let newUrl = this.apiUrl + "products/getAll"
    return this.http.get<ListResponseModel<Product>>(newUrl)
  }

  getProductsByCategoryId(categoryId:number) : Observable<ListResponseModel<Product>>{
    let newUrl = this.apiUrl + "products/getAllByCategoryId?categoryId=" + categoryId
    return this.http.get<ListResponseModel<Product>>(newUrl)
  }
}
