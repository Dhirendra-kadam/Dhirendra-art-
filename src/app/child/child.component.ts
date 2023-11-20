import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
   @Input() Childmessage:string="";

   @Input('userD') userDetails:any = [];

   parentmessage:string = 'This message is coming from child';
 
   @Output() cstmevt = new EventEmitter<any>();

   onclickfn(){
     this.cstmevt.emit(this.parentmessage)
   }
   addqty(){
    return this.userDetails.qty++;
   }
   subqty(){
    if(this.userDetails.qty > 1){
      return this.userDetails.qty--;
    }
    return null;
    
   }
   
   onclickfna(){
      console.log("hiii");
   }
}
