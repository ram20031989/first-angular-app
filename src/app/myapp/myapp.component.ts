import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-myapp',
  templateUrl: './myapp.component.html',
  styleUrls: ['./myapp.component.css']
})

export class MyappComponent {

  name = 'Angular 6';
  response = 'Nothing';
  hcolor = 'maroon';
  bcolor = 'green';
  firstname: string;
  color: string;
  peoplelist: Object[];
  bindingtext: string;  

  constructor() {    
    this.bindingtext = "#FFFFFF";    
    this.firstname = "Ram";
    this.peoplelist = [
      {
        firstname: "Steve",
        company: "Apple",
        hide: true
      },
      {
        firstname: "Elon",
        company: "Tesla",
        hide: true
      },
      {
        firstname: "Mark",
        company: "Facebook",
        hide: true
      }
    ];
  }

  respond() {
    this.response = 'Success';
  }

  changeColor(color) {
    this.bcolor = color;
  }

}
