import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { Note } from '../models/note';
import { map } from 'rxjs/operators';

@Injectable()
export class NoteService {
  readonly baseUrl = 'https://localhost:4200';
  readonly httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private router: Router, private httpClient: HttpClient) { }

  serviceCall() {
    console.log("Note service was called");
  }

  getNotes(): Observable<Note[]> {
    return this.httpClient.get<Note[]>(
      this.baseUrl + '/notes',
      this.httpOptions
    );
  }

  addNote(noteTitle:string, noteDescription:string, noteCategoryId:string) {
    const note: Note ={
      title: noteTitle,
      description: noteDescription,
      categoryValue: noteCategoryId
    }
    return this.httpClient.post(this.baseUrl+"/note", note).subscribe();
  }

  editNote(noteTitle:string, noteDescription:string, noteCategoryId:string){
    const note: Note ={
      title: noteTitle,
      description: noteDescription,
      categoryValue: noteCategoryId
    }
    return this.httpClient.post(this.baseUrl+"/note", note).subscribe();
  }
  
  getFiltredNotes(selectedCategory: string){
    return this.httpClient
      .get<Note[]>(this.baseUrl + '/notes', this.httpOptions)
      .pipe(
        map((notes) => notes.filter((note) => note.categoryValue === selectedCategory))
      );
    //this.notes.filter(note => note.categoryValue === selectedCategory);
  }

  getSearchedNotes(searchWord: string){
    return this.httpClient
      .get<Note[]>(this.baseUrl + '/notes', this.httpOptions)
      .pipe(
        map((notes) => notes.filter((note) =>
         note.title.toLowerCase().includes(searchWord.toLowerCase()) || note.description.toLowerCase().includes(searchWord.toLowerCase())))
      );

    //return this.notes.filter(note => note.title.toLowerCase().includes(searchWord.toLowerCase()) || note.description.toLowerCase().includes(searchWord.toLowerCase()));
  }

  getFilteredAndSearchedNotes(selectedCategory: string, searchWord: string){
    return this.httpClient.get<Note[]>(this.baseUrl+'/notes', this.httpOptions).pipe(
      map((notes) => notes.filter((note)=>
      note.title.toLowerCase().includes(searchWord.toLowerCase()) ||
      note.description.toLowerCase().includes(searchWord.toLowerCase()) && note.categoryValue === selectedCategory)));
  }

  deleteNote(id: string) {
    return this.httpClient.delete(this.baseUrl+'/note/'+id).subscribe();
  }
}
