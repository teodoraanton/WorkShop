import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.scss']
})
export class ToolsComponent implements OnInit {

  title: string = "Something";
  textColor: string = "red";
  noteContent: string = "";

  currentDate = Date.now();

  constructor() { }

  ngOnInit(): void {
  }

  buttonClick(): void{
    /*alert("Button Click");*/
    // this.title = "Title";
    // this.textColor = "jgjgj";
  }
}
