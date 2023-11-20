class MyBank{
    constructor(){
    this.choice = prompt("press 1 for phonepe \n press 2 for googlepay \n press 3 for paytm");

    if (this.choice == 1){
        this.phonepe("phonepe");
    }else if(this.choice == 2){
        this.googlepay("googlepay");
    }else if(this.choice == 3){
        this.paytm("paytm");
    }
  }
 phonepe(upi_name){
     this.amt = Number(prompt("enter Amount :"));
     console.log(`Thank you for using ${upi_name}`) ;
 }
 googlepay(upi_name){
     this.amt = Number(prompt("enter Amount :"));
     console.log(`Thank you for using ${upi_name}`) ;
 }
 paytm(upi_name){
     this.amt = Number(prompt("enter Amount :"));
     console.log(`Thank you for using ${upi_name}`) ;
 }

}
let person1 = new MyBank();
    