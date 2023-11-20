import { Component } from "@angular/core";

@Component({
     selector : 'app-additem',
     templateUrl : './additem.component.html',
     styleUrls : ['./additem.component.css',]
})

export class additem{

    value : string = '';
    myVal:any = [];
    AddItem(){
        this.myVal.push(this.value)
    }

}
