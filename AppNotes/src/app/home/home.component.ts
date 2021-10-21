import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  categoryValue: string;

  constructor() { }

  ngOnInit(): void {
  }

  receivedCategory(categoryId: string) {
    this.categoryValue = categoryId;
  }

}
