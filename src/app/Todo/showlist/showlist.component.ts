import { Component, Input } from "@angular/core";

@Component({
    selector : 'app-showlist',
    templateUrl : './showlist.component.html',
    styleUrls : ['./showlist.component.css']
})

export class showlist{
  @Input() list = [];
  deleteItem(ind:any){
    this.list.splice(ind,1);

  }
}
