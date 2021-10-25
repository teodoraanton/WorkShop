import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Note } from '../models/note';
import { NoteService } from '../services/note.service';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss'],
})
export class NoteComponent implements OnInit, OnChanges {
  notes: Note[] = [];

  @Input() selectedCategory: string;
  @Input() searchWord: string;

  //@Output() emitSearchWord = new EventEmitter<string>();

  constructor(private router: Router, private noteService: NoteService) {}

  ngOnInit(): void {
    this.noteService.getNotes().subscribe((result) => {
      this.notes = result;
    });
  }

  ngOnChanges(): void {
    this.filterNotes();
  }

  filterNotes() {
    if (this.searchWord && this.selectedCategory) {
      this.noteService
        .getFilteredAndSearchedNotes(this.selectedCategory, this.searchWord)
        .subscribe((result) => {
          this.notes = result;
        });
    } else if (this.searchWord) {
      this.noteService.getSearchedNotes(this.searchWord).subscribe((result) => {
        this.notes = result;
      });
    } else if (this.selectedCategory) {
      this.noteService
        .getFiltredNotes(this.selectedCategory)
        .subscribe((result) => {
          this.notes = result;
        });
    } else {
      return;
    }
  }

  clearAllFilters(){
    this.noteService.getNotes().subscribe((result) => {
      this.notes = result;
    });
  }

  addNotePage(): void {
    this.router.navigate(['/note-details'], { queryParams: { noteId: '' } });
  }

  deleteNote(id: string) {
    this.noteService.deleteNote(id);
    this.noteService.getNotes().subscribe((result) => {
      this.notes = result;
    });
  }

  editNote(note) {
    this.router.navigate(['/note-details'], {
      queryParams: { noteId: note.id },
    });
  }
}
