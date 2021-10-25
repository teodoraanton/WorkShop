import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  categoryValue: string;
  wordSearch: string;

  constructor() { }

  ngOnInit(): void {
  }

  receivedCategory(categoryId: string) {
    this.categoryValue = categoryId;
    this.wordSearch = "";
  }

  receiveSearch(searchWord: string){
    this.wordSearch = searchWord;
    this.categoryValue = "";
  }
}
