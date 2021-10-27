import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Note } from '../models/note';
import { NoteService } from '../services/note.service';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss'],
})
export class NoteComponent implements OnInit, OnChanges {
  notes$: Observable<Note[]>;
  searchWord: string;

  @Input() selectedCategory: string;

  constructor(private router: Router, private noteService: NoteService) {}

  ngOnInit(): void {
    this.notes$ = this.noteService.getNotes();
  }

  ngOnChanges(): void {
    this.filterNotes();
  }

  filterNotes() {
    if (this.searchWord && this.selectedCategory) {
      this.notes$ = this.noteService.getFilteredAndSearchedNotes(this.selectedCategory, this.searchWord);
    } else if (this.searchWord) {
      this.notes$ = this.noteService.getSearchedNotes(this.searchWord);
    } else if (this.selectedCategory) {
      this.notes$ = this.noteService.getFiltredNotes(this.selectedCategory);
    } else {
      return;
    }
  }

  clearAllFilters(){
    this.notes$ = this.noteService.getNotes();
    this.searchWord='';
  }

  addNotePage(): void {
    this.router.navigate(['/note-details']);
  }

  deleteNote(id: string) {
    this.noteService.deleteNote(id);
  }

  editNote(note) {
    this.router.navigate(['/note-details'], {
      queryParams: { noteId: note.id },
    });
  }
}
