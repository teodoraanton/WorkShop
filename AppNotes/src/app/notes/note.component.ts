import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Buttons } from '../models/button';
import { Note } from '../models/note';
import { ButtonService } from '../services/button.service';
import { NoteService } from '../services/note.service';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {
  notes: Note[];
  buttons: Buttons[];

  constructor(private router: Router, private noteService: NoteService, private buttonService: ButtonService) { }

  ngOnInit(): void {
    this.notes = this.noteService.getNotes();
    this.buttons = this.buttonService.getButtons();
  }

  addNote(): void{
    this.router.navigateByUrl('/addnote');
  }

}
