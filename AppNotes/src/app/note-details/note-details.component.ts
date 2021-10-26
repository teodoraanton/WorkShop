import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormGroupDirective,
  NgForm,
  Validators,
} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { ActivatedRoute, Router } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { Category } from '../models/category';
import { Note } from '../models/note';
import { CategoryService } from '../services/category.service';
import { NoteService } from '../services/note.service';
@Component({
  selector: 'app-note-details',
  templateUrl: './note-details.component.html',
  styleUrls: ['./note-details.component.scss'],
})
export class NoteDetailsComponent implements OnInit {
  noteId: string;
  isEdit: boolean;
  selectCategory: string;
  note: Note;
  category: string;

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
    private router: Router,
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
          this.category = this.categories.filter(
            (category) => category.id === noteToEdit.categoryValue
          )[0].value;
          this.setupNoteDetails(noteToEdit);
        });
    } else {
      this.setupNoteDetails({
        title: '',
        description: '',
        categoryValue: '',
      });
    }
    this.noteForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      category: ['', Validators.required],
    });
  }

  add() {
    this.note.title = this.titleControl.value();
    this.note.description = this.descriptionControl.value();
    this.note.categoryValue = this.categoryControl.value();
    this.noteService.addNote(this.note);
    this.router.navigateByUrl('');
  }

  setupNoteDetails(noteToEdit: Note) {
    this.noteForm = this.formBuilder.group({
      title: [noteToEdit.title, Validators.required],
      description: [noteToEdit.description, Validators.required],
      category: ['', Validators.required],
    });
  }
}
