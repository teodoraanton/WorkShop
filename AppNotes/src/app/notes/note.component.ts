import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Category } from '../models/category';
import { Note } from '../models/note';
import { NoteService } from '../services/note.service';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss'],
})
export class NoteComponent implements OnInit, OnChanges {
  notes: Note[];
  filteredNotes: Note[];
  searchWord: string;

  @Input() selectedCategory: Category;

  constructor(private router: Router, private noteService: NoteService) {}

  ngOnInit(): void {
    this.noteService.getNotes().subscribe((notes) => {
      this.notes = notes;
      this.filteredNotes = notes;
    });
  }

  ngOnChanges(): void {
    this.filterNotes();
  }

  filterNotes() {
    if (this.searchWord && this.selectedCategory) {
      this.filteredNotes = this.notes.filter((note) =>
        (note.title.toLowerCase().includes(this.searchWord.toLowerCase())
        || note.description.toLowerCase().includes(this.searchWord.toLowerCase())
        && note.categoryId === this.selectedCategory.id)
      );
    } else if (this.searchWord) {
      this.filteredNotes = this.notes.filter((note) => 
        note.title.toLowerCase().includes(this.searchWord.toLowerCase())
        || note.description.toLowerCase().includes(this.searchWord.toLowerCase())
      );
    } else if (this.selectedCategory) {
      this.filteredNotes = this.notes.filter((note) =>
        note.categoryId === this.selectedCategory.id  
      );
    } else {
      if(!this.notes) return;
      this.clearAllFilters();
    }
  }

  clearAllFilters(){
    this.searchWord='';
    this.selectedCategory=null;
    this.filteredNotes=[...this.notes];
  }

  addNotePage(): void {
    this.router.navigate(['/note-details']);
  }

  deleteNote(id: string) {
    this.noteService.deleteNote(id).subscribe((response) => {
      this.notes = this.notes.filter((note) => note.id !== id);
      this.filteredNotes = [...this.notes];
    },
    (err) => console.log(err)
    );
    
  }

  editNote(note) {
    this.router.navigate(['/note-details'], {
      queryParams: { noteId: note.id },
    });
  }
}
