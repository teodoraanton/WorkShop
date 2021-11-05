import { Component, OnInit } from '@angular/core';
import { Category } from '../models/category';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  selectedCategory: Category;
  wordSearch: string;

  constructor() { }

  ngOnInit(): void {
  }

  receivedCategory(category: Category) {
    this.selectedCategory = category;
  }
}
