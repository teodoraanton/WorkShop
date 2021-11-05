import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { Category } from '../models/category';
import { Note } from '../models/note';
import { CategoryService } from '../services/category.service';
import { NoteService } from '../services/note.service';
import { Guid } from 'guid-typescript'
@Component({
  selector: 'app-note-details',
  templateUrl: './note-details.component.html',
  styleUrls: ['./note-details.component.scss'],
})
export class NoteDetailsComponent implements OnInit {
  noteId: string;
  isEdit: boolean;
  selectedCategory: Category;
  category: Category;

  categories: Category[];

  noteForm: FormGroup;

  public get titleControl() {
    return this.noteForm.get('title');
  }

  public get descriptionControl() {
    return this.noteForm.get('description');
  }

  public get categoryControl() {
    return this.noteForm.get('category');
  }

  constructor(
    private _activatedRoute: ActivatedRoute,
    private categoryService: CategoryService,
    private formBuilder: FormBuilder,
    private noteService: NoteService
  ) {}

  ngOnInit(): void {
    this.categories = this.categoryService.getCategories();
    this._activatedRoute.queryParams.subscribe((params) => {
      this.noteId = params['noteId'];
      if (this.noteId) {
        this.isEdit = true;
      } else {
        this.isEdit = false;
      }
    });
    if (this.isEdit) {
      this.noteService
        .getNotes()
        .pipe(
          map((notes) => notes.filter((note) => note.id === this.noteId)[0])
        )
        .subscribe((noteToEdit) => {
          this.selectedCategory = this.categories.filter(
            (category) => category.id === noteToEdit.categoryId
          )[0];
          this.setupNoteDetails(noteToEdit);
        });
    } else {
      this.selectedCategory = this.categories[0];
      this.setupNoteDetails({
        id: Guid.create().toString(),
        title: '',
        description: '',
        categoryId: '',
      });
    }
  }

  add() {
    const note: Note = {
      id: this.noteForm.get('id').value,
      title: this.noteForm.get('title').value,
      description: this.noteForm.get('description').value,
      categoryId: this.noteForm.get('category').value.id
    }
    if(this.isEdit){
      this.noteService.editNote(note);
    }else{
      this.noteService.addNote(note);
    }
  }

  setupNoteDetails(noteToEdit: Note) {
    this.noteForm = this.formBuilder.group({
      id: noteToEdit.id,
      title: [noteToEdit.title, Validators.required],
      description: [noteToEdit.description, Validators.required],
      category: this.selectedCategory,
    });
  }
}
