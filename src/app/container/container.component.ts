import { Component } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent {
  studentData = [
    {id:101, name:"Ayush", age:21, attend:"Present"},
    {id:102, name:"Dhirendra", age:19, attend:"Present"},
    {id:103, name:"Ayushi", age:21, attend:"Absent"},
    {id:104, name:"Khushi Maheshwari", age:19, attend:"Present"},
    {id:105, name:"Khushi Lahoti", age:19, attend:"Absent"},
  ]

  changeval:any = 'All';
  
  onChange(){

  }
  bool : Boolean = false;
  name : string = "Dhirendra";
  price : number = 15.533;

}
