import { Component } from '@angular/core';

@Component({
  selector: 'app-display-combo',
  templateUrl: './display-combo.component.html',
  styleUrls: ['./display-combo.component.css']
})
export class DisplayComboComponent {
  selectedItem: string; // Define the selectedItem property
  comboData: string[] = ['Textbox', 'Textarea'];
  textInput: string = ''; // Declare the textInput property
  textareaInput: string = ''; // Declare the textareaInput property
  constructor() {
    this.selectedItem = ''; // Initialize selectedItem in the constructor
  }
}
