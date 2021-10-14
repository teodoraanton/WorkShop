import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.scss']
})
export class BackgroundComponent implements OnInit {

  textColor: string = "";
  text: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  isColor(textColor: string): boolean{
    var s = new Option().style;
    s.color = textColor;
    var test1 = s.color == textColor;
    var test2 = /^#[0-9A-F]{6}$/i.test(textColor);
    if(test1 == true || test2 == true){
      return true;
    } else{
      return false;
    }
  }

  setBackgroundClick(): void{
    
    if (this.isColor(this.text)){
      this.textColor = this.text;
    }else{
      alert("NOT A VALID COLOR");
    }
  }

}
