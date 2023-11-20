import { Component } from '@angular/core';

@Component({
  selector: 'app-directives1',
  templateUrl: './directives1.component.html',
  styleUrls: ['./directives1.component.css']
})
export class Directives1Component {
   newUserDetails:{name:string,email:string,phone:number,att:string}[]=
   [
     {name:"Dhirendra kadam",email:"dhirendra@gmail.com",phone:8765423122, att: "present"},
     {name:"khushi",email:"khushi@gmail.com",phone:8765423122, att: "absent"},
     {name:"ayush",email:"ayush@gmail.com",phone:8765423122, att: "present"},
     {name:"Lokesh",email:"Lokesh@gmail.com",phone:8765423122, att: "absent"},
     {name:"chirag",email:"chirag@gmail.com",phone:8765423122, att: "present"},
   ]

   bool : boolean = false;
}
