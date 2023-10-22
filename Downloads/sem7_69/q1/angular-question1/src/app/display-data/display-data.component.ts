import { Component } from '@angular/core';

@Component({
  selector: 'app-display-data',
  templateUrl: './display-data.component.html',
  styleUrls: ['./display-data.component.css']
})
export class DisplayDataComponent {
  integerData: number; // Define the integerData property
  stringData: string; // Define the stringData property
  dateData: Date; // Define the dateData property

  constructor() {
    // Initialize these properties with some values if needed.
    this.integerData = 37;
    this.stringData = 'Indian';
    this.dateData = new Date();
  }
}
