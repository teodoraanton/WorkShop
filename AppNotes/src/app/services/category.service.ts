import { Injectable } from '@angular/core';
import { Category } from '../models/category';

@Injectable()
export class CategoryService {

  categories: Category[] = [
    {
      id: '1',
      value: 'To Do'
    },
    {
      id: '2',
      value: 'Done'
    },
    {
      id: '3',
      value: 'Doing'
    }
  ];

  constructor() { }

  getCategories(){
    return this.categories;
  }
}
