import { identifierName } from "@angular/compiler"
import { User } from "../user/user"
export class UserServices{
   user:User [] = [
    {id:1, name:"chirag jain", age:23, phone:7987841662, address: "Indore" },
    {id:2, name:"Dhirendra kadam", age:19, phone:9174624160, address: "dawana" },
    {id:3, name:"Khushi ", age:19, phone:4455244123, address: "Indore" },
    {id:4, name:"Anshol goad", age:28, phone:1475925525, address: "Indore" },
    {id:5, name:"Ayush", age:19, phone:9875558456, address: "Indore" },
    
    ]
    getUserData(user:any){
        this.user.push(user);
        
    }
    deleteUser(ind:any){
        this.user.splice(ind,1);
    }
}