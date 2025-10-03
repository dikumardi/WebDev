// class and object

class Customer{
   constructor(n){
    this.name =  n ;
   }  
   //Es7 we can use outside constructor by without this method
   age = 22 ;
//   buy(){
// console.log("hello...");
// console.log(this.name);
//    }
// we can use arrow function in es7
buy=()=>{
console.log("hello...");
console.log(this.name);
   }
}

//  inheritance
 class GuestCustomer extends Customer{
    
    hello(){
        console.log("helloee");   
    }
    }
 

let customer1 = new GuestCustomer("abca")
console.log(customer1);
customer1.buy();
customer1.hello();