import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  filterText = ""
  products : Product[]
  constructor(private productService:ProductService,
     private activatedRoute:ActivatedRoute,
     private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if (params["categoryId"]){
          this.getProductsByCategoryId(params["categoryId"])
      }else{
          this.getProducts()
      }
    })
  }

  getProducts(){
    this.productService.getProducts().subscribe(resp=>{
      this.products = resp.data
    })
  }

  getProductsByCategoryId(categoryId:number){
    this.productService.getProductsByCategoryId(categoryId).subscribe(resp=>{
      this.products = resp.data
    })
  }

  addToCart(product:Product){
    this.toastrService.success("Added To Cart", product.productName)
  }
}
