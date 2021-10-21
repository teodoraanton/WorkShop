import { Injectable } from '@angular/core';
import { Category } from '../models/category';

@Injectable()
export class FilterService {
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

  constructor() { }

  getCategories(){
    return this.categories;
  }
}
