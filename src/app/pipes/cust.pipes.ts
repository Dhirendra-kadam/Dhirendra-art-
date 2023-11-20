import { PipeTransform , Pipe } from  "@angular/core";
@Pipe({
     name : "mypipe",
})


export class myCustompipe implements PipeTransform{
    transform(value: any, gender: any) {
        return (gender === 'Male')? "Mr, "+value : "Miss. "+value;
    }

}