import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { ActivatedRoute, Router } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { Category } from '../models/category';
import { CategoryService } from '../services/category.service';
import { NoteService } from '../services/note.service';
@Component({
  selector: 'app-note-details',
  templateUrl: './note-details.component.html',
  styleUrls: ['./note-details.component.scss']
})
export class NoteDetailsComponent implements OnInit {
  title: string = "";
  description: string = "";
  selectCategory: string;
  noteId: string;
  isEdit: boolean;

  categories: Category[];
  
  noteForm: FormGroup;

  public get titleControl(){
    return this.noteForm.get('title');
  }

  public get descriptionControl(){
    return this.noteForm.get('description');
  }

  public get categoryControl(){
    return this.noteForm.get('category');
  }

  constructor(private router: Router,private _activatedRoute: ActivatedRoute, private categoryService: CategoryService, private formBuilder: FormBuilder, private noteService: NoteService) { }

  ngOnInit(): void {
      this._activatedRoute.queryParams.subscribe(params =>{
        this.noteId = params['noteId'];
        if(this.noteId){
          this.isEdit = true;
        }else{
          this.isEdit = false;
        }
    })
    if(this.isEdit){
      this.noteService.getNotes()
      .pipe(
        map((notes)=>notes.filter((note) => note.id === this.noteId))
      )
    }
    this.categories=this.categoryService.getCategories();
    this.noteForm = this.formBuilder.group({
      title: ["", Validators.required],
      description: ["", Validators.required],
      category: ["", Validators.required]
    });
  }

  add(){
    this.noteService.addNote(this.title,this.description,this.selectCategory)
     this.router.navigateByUrl('');
  }

}
