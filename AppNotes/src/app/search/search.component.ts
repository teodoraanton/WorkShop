import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  typedString: string;
  displaySearch: string;
  @Output() emitInputSearch = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  searchWord() {
    this.emitInputSearch.emit(this.typedString);
    this.displaySearch = this.typedString;
    this.typedString = "";
  }

}
