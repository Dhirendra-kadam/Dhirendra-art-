import { Component } from '@angular/core';

@Component({
  selector: 'app-eventbinding',
  templateUrl: './eventbinding.component.html',
  styleUrls: ['./eventbinding.component.css']
})
export class EventbindingComponent {
    userDetail:any = {}

    onInput1(val:any){
      // if(val.keyCode === 13){
      //   console.log(val.target.value)
      // }
      this.userDetail.name =val.target.value;
      // console.log(val.target.value);  2 method
    }
    onInput2(val:any){
      this.userDetail.email =val.target.value;
      // console.log(val.target.value);
    }
    onInput3(val:any){
      // console.log(val.target.value);
      this.userDetail.phone =val.target.value;
    }
}
