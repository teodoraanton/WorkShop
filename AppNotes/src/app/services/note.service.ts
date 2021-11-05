import { HttpClient, HttpClientModule, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { Note } from '../models/note';
import { map } from 'rxjs/operators';

@Injectable()
export class NoteService {
  readonly baseUrl = 'https://localhost:5001';
  readonly httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private router: Router, private httpClient: HttpClient) { }

  getNotes(): Observable<Note[]> {
    return this.httpClient.get<Note[]>(
      this.baseUrl + '/notes',
      this.httpOptions
    );
  }

  addNote(note: Note) {
    return this.httpClient.post(this.baseUrl+"/notes", note).subscribe(response => {
      this.router.navigate(['notes']);
    }, (err: HttpErrorResponse) => console.log(err));
  }

  editNote(note: Note){
    return this.httpClient.put(this.baseUrl+"/notes/?id"+note.id, note).subscribe(response => {
      this.router.navigate(['notes']);
    }, (err:HttpErrorResponse) => console.log(err));
  }
  
  deleteNote(id: string) {
    return this.httpClient.delete(this.baseUrl+'/notes/'+id);
  }
}
