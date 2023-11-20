import { Component, OnInit} from '@angular/core';
import { UserServices } from '../services/users.services';
import { userapiservice } from '../services/userapi.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit{
  constructor(private user_s:UserServices, private api : userapiservice){}
  userdetails: {id:number,name:string,age:number,phone:number,address:string}[] = [];

  userapiDetail:any ={};

  ngOnInit(){
    this.userdetails = this.user_s.user;
    // this.userapiDetail = this.api.gerData()
    this.api.gerData().subscribe((data)=>{ this.userapiDetail = data})
  }
  dltuser(ind:any){
         this.user_s.deleteUser(ind);
  }

}
