import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {
  prodcutval:string= 'All';
  @Output()filterval = new EventEmitter<any>();

  onchange(){
      this.filterval.emit(this.prodcutval);
  }
  
  // totalproduct = this.products.length;
  // Available =  this.products.filter ((data:any)=>data.avail === 'Available').length ;
  // Unavailable = this.products.filter ((data:any)=>data.avail === 'Unavailable').length;
}
