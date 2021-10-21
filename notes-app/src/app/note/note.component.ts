import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { NoteService } from '../services/note.service';
import { Note } from './note';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit, OnChanges {
  notes: Note[];

  @Input() selectedCategoryId: string;

  constructor(private router: Router, private noteService: NoteService) { }

  ngOnInit(): void {
    this.noteService.serviceCall();
    this.notes = this.noteService.getNotes();
  }

  ngOnChanges(): void{
    if(this.selectedCategoryId){
      this.notes=this.noteService.getFiltreNotes(this.selectedCategoryId);
    }
  }
  showNote(notes: any): void {
    this.router.navigate(['/addNote'], { queryParams: { title: notes.title, description: notes.description } });
  }

}
