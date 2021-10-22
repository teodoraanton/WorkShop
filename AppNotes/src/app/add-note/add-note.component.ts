import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from '../models/category';
import { CategoryService } from '../services/category.service';
import { NoteService } from '../services/note.service';
@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.scss']
})
export class AddNoteComponent implements OnInit {
  title: string = "";
  description: string = "";
  selectCategory: string;

  category: Category[];
  
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

  constructor(private _activatedRoute: ActivatedRoute, private categoryService: CategoryService, private formBuilder: FormBuilder, private noteService: NoteService) { }

  ngOnInit(): void {
      this._activatedRoute.queryParams.subscribe(params =>{
      this.title = params["title"];
      this.description = params["description"];
    })
    this.category=this.categoryService.getCategories();
    this.noteForm = this.formBuilder.group({
      title: ["", Validators.required],
      description: ["", Validators.required],
      category: ["", Validators.required]
    });
  }

  addNewNote(title: string, description: string, selectCategory: string){
    this.noteService.addNote(this.title, this.description, this.selectCategory);
  }

}
