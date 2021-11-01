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

  addNote(notes: Note) {
    const note: Note = notes;
    return this.httpClient.post(this.baseUrl+"/note", note);
  }

  editNote(notes: Note){
    const note: Note ={
      title: notes.title,
      description: notes.description,
      categoryValue: notes.categoryValue
    }
    return this.httpClient.put(this.baseUrl+"/note", note).subscribe();
  }
  
  getFiltredNotes(selectedCategory: string){
    return this.httpClient
      .get<Note[]>(this.baseUrl + '/notes', this.httpOptions)
      .pipe(
        map((notes) => notes.filter((note) => note.categoryValue === selectedCategory))
      );
  }

  getSearchedNotes(searchWord: string){
    return this.httpClient
      .get<Note[]>(this.baseUrl + '/notes', this.httpOptions)
      .pipe(
        map((notes) => notes.filter((note) =>
         note.title.toLowerCase().includes(searchWord.toLowerCase()) || note.description.toLowerCase().includes(searchWord.toLowerCase())))
      );
  }

  getFilteredAndSearchedNotes(selectedCategory: string, searchWord: string){
    return this.httpClient.get<Note[]>(this.baseUrl+'/notes', this.httpOptions).pipe(
      map((notes) => notes.filter((note)=>
      (note.title.toLowerCase().includes(searchWord.toLowerCase()) ||
      note.description.toLowerCase().includes(searchWord.toLowerCase())) && note.categoryValue === selectedCategory)));
  }

  deleteNote(id: string) {
    return this.httpClient.delete(this.baseUrl+'/note/'+id).subscribe();
  }
}
