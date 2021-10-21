import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Note } from '../note/note';
import { map } from "rxjs/operators";


@Injectable()
export class NoteService {
  // notes: Note[] = [
  //   {
  //     id: "Id1",
  //     title: "First note",
  //     description: "This is the description for the first note",
  //     categoryId: "1"
  //   },
  //   {
  //     id: "Id2",
  //     title: "Second note",
  //     description: "This is the description for the second note",
  //     categoryId: "2"
  //   },
  //   {
  //     id: "Id3",
  //     title: "Third note",
  //     description: "This is the description for the third note",
  //     categoryId: "3"
  //   }
  // ];

  readonly baseUrl = "https://localhost:4200";

  readonly httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  };


  constructor(private httpClient: HttpClient) { }

  serviceCall() {
    console.log("Note service was called");
  }

  getNotes(): Observable<Note[]> {
    return this.httpClient.get<Note[]>(
      this.baseUrl+'/notes', 
      this.httpOptions
      );
  }

  //addnote

  getFiltreNotes(categoryId:string): Observable<Note[]>{
    return this.httpClient
    .get<Note[]>(this.baseUrl+'/notes', this.httpOptions).pipe(map((notes) => notes.filter((note) => note.categoryId === categoryId)));
    //this.notes.filter(note => note.categoryId === categoryId);
  }
}
