
import { Component, OnInit } from '@angular/core';
import Shopping from '../shopping';
import { ShoppingService } from '../shopping.service';

@Component({
  selector: 'app-product-get',
  templateUrl: './product-get.component.html',
  styleUrls: ['./product-get.component.css']
})
export class ProductGetComponent {
  books: Shopping[]=[];
  constructor(private bs: ShoppingService) { }

  ngOnInit() {
    this.bs
      .getBooks()
      .subscribe((data: Shopping[]) => {
        this.books = data;
    })
  
  }}
