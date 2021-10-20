import { Component, OnInit } from '@angular/core';
import { Category } from '../models/category';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  categories: Category[] = [
    {
      value: '1',
      viewValue: 'To Do'
    },
    {
      value: '2',
      viewValue: 'Done'
    },
    {
      value: '3',
      viewValue: 'Doing'
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
