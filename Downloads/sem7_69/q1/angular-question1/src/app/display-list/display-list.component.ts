import { Component } from '@angular/core';

@Component({
  selector: 'app-display-list',
  templateUrl: './display-list.component.html',
  styleUrls: ['./display-list.component.css']
})
export class DisplayListComponent {
  listData: string[]; // Define the listData property

  constructor() {
    // Initialize this property with some values if needed.
    this.listData = ['Diwali', 'Janmashtami', 'Shivratri'];
  }
}
