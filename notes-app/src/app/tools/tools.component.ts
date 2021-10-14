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

  constructor() { }

  ngOnInit(): void {
  }

  buttonClick(): void{
    /*alert("Button Click");*/
    this.title = "Something else";
    this.textColor = "jgjgj";
  }
}
