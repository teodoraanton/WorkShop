import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Note } from '../models/note';

@Injectable()
export class NoteService {
  id: string = "4";

  notes: Note[] = [
    {
      id: "1",
      title: "First note",
      description: "This is the description for the first note",
      categoryValue: "1"
    },
    {
      id: "2",
      title: "Second note",
      description: "This is the description for the second note",
      categoryValue: "2"
    },
    {
      id: "3",
      title: "Third note",
      description: "This is the description for the third note",
      categoryValue: "2"
    }
  ];

  constructor(private router: Router) { }

  serviceCall() {
    console.log("Note service was called");
  }

  getNotes(): Note[]{
    return this.notes;
  }

  addNote(title: string, description: string, selectedCategory: string) {
    let newNote = {
      id: this.id,
      title: title,
      description: description,
      categoryValue: selectedCategory
    };
    this.notes.push(newNote);
    this.id = (parseInt(this.id)+1).toString();
    this.router.navigateByUrl('');
    console.log(this.notes);
  }
  
  getFiltredNotes(selectedCategory: string){
    this.notes.filter(note => note.categoryValue === selectedCategory);
  }
}
