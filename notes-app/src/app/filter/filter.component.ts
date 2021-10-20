import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Category } from '../models/category';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  categories: Category[] = [
    {
      id: '1',
      name: 'To Do'
    },
    {
      id: '2',
      name: 'Done'
    },
    {
      id: '3',
      name: 'Doing'
    }
  ];

  @Output() emitSelectedFilter = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  selectFilter(categoryId: string) {
    this.emitSelectedFilter.emit(categoryId);
  }

}
