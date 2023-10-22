import { Component } from '@angular/core';

@Component({
  selector: 'app-user-input-form',
  templateUrl: './user-input-form.component.html',
  styleUrls: ['./user-input-form.component.css']
})
export class UserInputFormComponent {
  name: string = '';
  email: string = '';
  age: number = 0;
  submitted: boolean = false;

  submitForm() {
    // Store the data or perform other actions here
    this.submitted = true;
    console.log(`Name: ${this.name}, Email: ${this.email}, Age: ${this.age}`);
  }
}
