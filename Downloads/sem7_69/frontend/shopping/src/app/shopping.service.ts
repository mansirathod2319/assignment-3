import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Shopping from './shopping';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingService {

  uri = 'http://localhost:3000/create';
  uri2='http://localhost:3000';
  

  constructor(private http: HttpClient) { }

  addBook(productName :string, productPrice :number, productCategory :string) {
    const obj = {
      productName: productName,
      productPrice: productPrice,
      productCategory: productCategory
    };
    console.log(obj);
    this.http.post(`${this.uri}`, obj).subscribe(res => console.log('Done'));
  }

  getBooks() :Observable<Shopping[]> {    
    return this.http.get<Shopping[]>(`${this.uri2}`);
  }

 

}
