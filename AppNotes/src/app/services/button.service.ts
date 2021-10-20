import { Injectable } from '@angular/core';
import { Buttons } from '../models/button';

@Injectable()
export class ButtonService {
  buttons: Buttons[] = [
    {
      id: '1',
      name: 'forward'
    },
    {
      id: '2',
      name: 'grade'
    },
    {
      id: '3',
      name: 'done_outline'
    },
    {
      id: '4',
      name: 'create'
    },
    {
      id: '5',
      name: 'delete'
    }
  ]

  constructor() { }

  getButtons(){
    return this.buttons;
  }
}
