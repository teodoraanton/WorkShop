import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Note } from '../models/note';
import { NoteService } from '../services/note.service';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit, OnChanges {
  notes: Note[] = [];

  @Input() selectedCategory: string;

  @Input() selectedInputSearch: string;

  constructor(private router: Router, private noteService: NoteService) { }

  ngOnInit(): void { 
    // this.notes = this.noteService.getNotes();
    // this.buttons = this.buttonService.getButtons();
    this.noteService.getNotes().subscribe((result) => {
      this.notes = result;
    })
  }

  ngOnChanges(): void {
    if(this.selectedCategory){
      this.noteService.getFiltredNotes(this.selectedCategory).subscribe((result) => {
        this.notes = result;
      });
      if(this.selectedInputSearch){
        this.noteService.getSearchedNotes(this.selectedInputSearch).subscribe((result) =>{
          this.notes = result;
        });
      }
      //this.notes = this.noteService.getFiltredNotes(this.selectedCategory);
    }
  }

  addNotePage(): void{
    this.router.navigateByUrl('/addnote');
  }

  deleteNote(id: string){
    this.noteService.deleteNote(id);
    this.noteService.getNotes().subscribe((result)=>{
    this.notes = result;
  })
  }

}
