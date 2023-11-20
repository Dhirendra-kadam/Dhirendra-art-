import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
@Injectable({
    providedIn : "root"
})

export class userapiservice{
   constructor(private http:HttpClient){

   } 
   gerData(){
    return this.http.get('https://jsonplaceholder.typicode.com/users');
   }
}