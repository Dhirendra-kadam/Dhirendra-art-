import { Component } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent {
    title = "Dhirendra";
    product1 = "../../assets/img/bottal.png"
    product2 = "../../assets/img/camera.jpg"
    product3 = "../../assets/img/laptop.png"
    product1Title = "product1" ;
    product2Title = "product2";
    product3Title = "product3"; 
    para =true;
    placeholder = "rahul";

    onInput(val:any){
      console.log(val.target.value);
      this.placeholder= val.target.value;
    }
}
