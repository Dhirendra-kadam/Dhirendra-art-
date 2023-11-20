import { Component } from '@angular/core';

@Component({
  selector: 'app-projectdirectives',
  templateUrl: './projectdirectives.component.html',
  styleUrls: ['./projectdirectives.component.css']
})
export class ProjectdirectivesComponent {
    products:any = [
      {name :'product1',disc : "camera Description",avail : 'Available' ,price : 5,qty : 1,img : "../../assets/img/camera.jpg"},
      {name :'product2',disc : "laptop Description",avail : 'Unavailable' ,price : 2,qty : 1,img : "../../assets/img/laptop.png"},
      {name :'product3',disc : "bottal Description",avail : 'Available' ,price : 3,qty : 1,img : "../../assets/img/bottal.png"},
      {name :'product1',disc : "camera Description",avail : 'Available' ,price : 4,qty : 1,img : "../../assets/img/camera.jpg"},
      {name :'product2',disc : "laptop Description",avail : 'Unavailable' ,price : 5,qty : 1,img : "../../assets/img/laptop.png"},
      {name :'product3',disc : "bottal Description",avail : 'Available' ,price : 5,qty : 1,img : "../../assets/img/bottal.png"},
      {name :'product1',disc : "camera Description",avail : 'Available' ,price : 2,qty : 1,img : "../../assets/img/camera.jpg"},
      {name :'product2',disc : "laptop Description",avail : 'Unavailable' ,price : 4,qty : 1,img : "../../assets/img/laptop.png"},
      {name :'product3',disc : "bottal Description",avail : 'Available' ,price : 2,qty : 1,img : "../../assets/img/bottal.png"}
    ]

    prodcutval:string= 'All';
  

    parentuserDetails:any = [
      // {name :'product3',disc : "bottal Description",avail : 'Available' ,price : '$2',img : "../../assets/img/bottal.png"},
      // {name :'product1',disc : "camera Description",avail : 'Available' ,price : '$5',img : "../../assets/img/camera.jpg"}
    ]
    bool : boolean = false;

    getColor(val:any){
      if(val === 'Available'){
        return "green";
      }
       else return 'red';
    }
    addToCart(index:any){
        this.parentuserDetails = this.products[index];
        this.bool = true; 
    }

    para:string = '';
    receivefn(val:any){
      // console.log(val);
      this.para = val;
    }
    receivedval(val:any){
         this.prodcutval =val;
    }
    searchval:string ='';
    recivedSearchVal(val:any){
      this.searchval = val;
    }
    
}

