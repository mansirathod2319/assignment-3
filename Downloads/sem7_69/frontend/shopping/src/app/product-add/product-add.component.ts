import { Component } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ShoppingService } from '../shopping.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css'],
  
})


export class ProductAddComponent {
  angForm: FormGroup;
  constructor(private fb: FormBuilder , private route: ActivatedRoute,  private router: Router , private sh: ShoppingService) 
  {
    this.angForm = this.fb.group({
      productName: ['', Validators.required ],
      productPrice: ['', Validators.required ],
      productCategory: ['', Validators.required ]
    });
  }

  
  
  insertBook()
  {

    alert("hi "+this.angForm.value.productName )
    this.sh.addBook(this.angForm.value.productName,parseInt(this.angForm.value.productPrice), this.angForm.value.productCategory);
    this.router.navigate(['shopping/display']);
    // this.router.navigate(['shopping']);
  }
}
