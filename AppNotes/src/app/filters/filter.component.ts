import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Category } from '../models/category';
import { CategoryService } from '../services/category.service';
import { NoteService } from '../services/note.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  categories:Category[];

  @Output() emitSelectedFilter = new EventEmitter<Category>();

  constructor(
    private categoryService: CategoryService
    ) { }

  ngOnInit(): void {
    this.categories=this.categoryService.getCategories()
  }

  selectCategory(category: Category): void{
    this.emitSelectedFilter.emit(category);
  }

}
