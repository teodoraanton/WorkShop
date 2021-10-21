import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from '../models/category';
import { FilterService } from '../services/filter.service';
import { NoteService } from '../services/note.service';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.scss']
})
export class AddNoteComponent implements OnInit {
  title: string = "";
  description: string = "";
  categories: Category[];
  idCategoryNote: string;
  constructor(private _activatedRoute: ActivatedRoute, private noteServices: NoteService, private router: Router, private filterService: FilterService) { }

  ngOnInit(): void {
    this._activatedRoute.queryParams.subscribe(params =>{
      this.title = params["title"];
      this.description = params["description"];
    })
    this.categories=this.filterService.getCategories();
  }

}
