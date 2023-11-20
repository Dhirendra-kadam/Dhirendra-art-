import { Component, OnInit } from '@angular/core';
import { UserServices } from '../services/users.services';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  constructor(private user_s:UserServices){}
    name:string = '';
    age:number = 0;
    phone:number = 0;
    address:string = '';
    id:number =0;
 

    ngOnInit():void{
         this.id = this.user_s.user.length;
    }

    sendData(){
       this.id++;
      let newUserDetails = {
        id : this.id,
        name : this.name,
        age : this.age,
        phone : this.phone,
        address : this.address
      }
      this.user_s.getUserData(newUserDetails);
      // console.log(this.newUserDetails.name);

    }
}
