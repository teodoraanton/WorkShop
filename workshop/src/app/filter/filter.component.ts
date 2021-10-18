import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Strings } from '../models/strings';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  strings: Strings[] = [
    {
      id: '1',
      name: 'first string'
    },
    {
      id: '2',
      name: 'second string'
    },
    {
      id: '3',
      name: 'third string'
    },
    {
      id: '4',
      name: 'fourth string'
    },
    {
      id: '5',
      name: 'fifth string'
    }
  ]

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  nextPage(): void{
    this.router.navigateByUrl('/note');
  }

}
