import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from '../models/category';
import { CategoryService } from '../services/category.service';
import { NoteService } from '../services/note.service';

@Component({
  selector: 'app-edit-note',
  templateUrl: './edit-note.component.html',
  styleUrls: ['./edit-note.component.scss']
})
export class EditNoteComponent implements OnInit {

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

  constructor(private router: Router,private _activatedRoute: ActivatedRoute, private categoryService: CategoryService, private formBuilder: FormBuilder, private noteService: NoteService) { }

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

  edit(){
    this.noteService.editNote(this.title,this.description,this.selectCategory)
     this.router.navigateByUrl('');
  }

}
