import { Component, OnInit } from '@angular/core';
import { Buttons } from '../models/buttons';
import { Notes } from '../models/notes';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.scss']
})
export class AddNoteComponent implements OnInit {
  notes: Notes[] = [
    {
      id: '1',
      title: 'First Note'
    },
    {
      id: '2',
      title: 'Second Note'
    },
    {
      id: '3',
      title: 'Third Note'
    }
  ]

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

  ngOnInit(): void {
  }

}
