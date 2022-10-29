import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../models/category';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  apiUrl = "https://localhost:44349/api/"
  constructor(private http: HttpClient) { }
  getCategories() : Observable<ListResponseModel<Category>>{
    let newUrl = this.apiUrl + "categories/getAll"
    return this.http.get<ListResponseModel<Category>>(newUrl)
  }
}
