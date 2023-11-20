import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
    userDetail:any = {}
    newUserDetails:any = {};
     onInput1(val:any){
      this.userDetail.name = val.target.value;
     }
     onInput2(val:any){
      this.userDetail.email = val.target.value;
     }
     onInput3(val:any){
      this.userDetail.phone = val.target.value;
     }
     onInput4(val:any){
      this.userDetail.imageUrl = val.target.files[0].name;
     }

     onclick(){
      this.newUserDetails = this.userDetail;
     }
     
}
