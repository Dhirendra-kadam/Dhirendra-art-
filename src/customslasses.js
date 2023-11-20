class Myclass{
    setData(name, age, post){
        this.name = name;
        this.age = age;
        this.post = post;
    }
    printData(){
        alert(`Name = ${this.name}
        Age = ${this.age}
        Post = ${this.post}`);
    }
}
const person1 = new Myclass();
person1.setData("chirg" , 23 , "web");
person1.printData();

//USING constructor

// class Myclass{
//     constructor(name ,age ,post){
//         this.name = name;
//         this.age = age;
//         this.post = post;
//     }
//     printData(){
//         alert(`Name = ${this.name}
//         Age = ${this.age}
//         Post = ${this.post}`);
//     }
// }
// const person1 = new Myclass("chirg" , 23 , "web");
// person1.printData();