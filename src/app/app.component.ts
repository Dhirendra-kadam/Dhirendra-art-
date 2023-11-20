import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Dhirendra_pro';
  imgUrl = 'https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8='

  name : string = 'chirag';
  namelow : string = 'Dhirendra';
  mynum : number = 45;
  today = new Date();
  amount : number = 50;

  namerr = [
    {id : 101, name : "Ayush", gender : "Male"},
    {id : 102, name : "Dhirendra", gender : "Male"},
    {id : 103, name : "chirag", gender : "Male"},
    {id : 104, name : "Khushi", gender : "Female"},
    {id : 105, name : "Khushi", gender : "Female"}
  ];


  getvalue() {
    return "Get function value"
  }
}
