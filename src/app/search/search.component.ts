import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  value:string = '';
  @Output() customevent = new EventEmitter();

  onInput(){
    this.customevent.emit(this.value);
  }

}
