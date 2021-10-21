import { Component, Input, OnChanges, OnInit } from '@angular/core';
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
export class NoteComponent implements OnInit, OnChanges {
  notes: Note[] = [];
  buttons: Buttons[];

  @Input() selectedCategory: string;

  @Input() selectedInputSearch: string;

  constructor(private router: Router, private noteService: NoteService, private buttonService: ButtonService) { }

  ngOnInit(): void { 
    this.notes = this.noteService.getNotes();
    this.buttons = this.buttonService.getButtons();
  }

  ngOnChanges(): void {
    if(this.selectedInputSearch){
      this.notes = this.noteService.getSearchedNotes(this.selectedInputSearch);
    }
    if(this.selectedCategory){
      this.notes = this.noteService.getFiltredNotes(this.selectedCategory);
    }
  }

  addNote(): void{
    this.router.navigateByUrl('/addnote');
  }

}
