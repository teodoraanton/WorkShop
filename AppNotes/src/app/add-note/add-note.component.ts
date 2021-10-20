import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from '../models/category';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.scss']
})
export class AddNoteComponent implements OnInit {
  title: string = "";
  description: string = "";
  category: Category[];

  constructor(private _activatedRoute: ActivatedRoute, private categoryService: CategoryService) { }

  ngOnInit(): void {
      this._activatedRoute.queryParams.subscribe(params =>{
      this.title = params["title"];
      this.description = params["description"];
    })
    this.category=this.categoryService.getCategories();
  }

  addNewNote(title:string, description:string){
    
  }

}
