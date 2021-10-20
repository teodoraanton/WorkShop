import { Injectable } from '@angular/core';
import { Category } from '../models/category';

@Injectable()
export class CategoryService {

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

  getCategories(){
    return this.categories;
  }
}
