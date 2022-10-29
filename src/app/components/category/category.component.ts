import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent implements OnInit {
  
  categories: Category[];
  currentCategory = ""
  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {
    this.getAllCategory();
  }

  getAllCategory() {
    this.categoryService.getCategories().subscribe((resp) => {
      this.categories = resp.data;
    });
  }

  setCurrentCategory(categoryName:string){
    this.currentCategory = categoryName
  }

  getClassType(categoryName:string){
    if (this.currentCategory === categoryName){
      return "list-group-item active"
    }else{
      return "list-group-item"
    }
  }
}
