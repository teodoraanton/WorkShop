import { Injectable } from '@angular/core';
import { Buttons } from '../models/buttons';

@Injectable()
export class ButtonService {
  buttons: Buttons[] = [
    {
      id: '1',
      name: 'Next'
    },
    {
      id: '2',
      name: 'Favorite'
    },
    {
      id: '3',
      name: 'Done'
    },
    {
      id: '4',
      name: 'Edit'
    },
    {
      id: '5',
      name: 'Delete'
    }
  ]

  constructor() { }

  getButtons(){
    return this.buttons;
  }
}
