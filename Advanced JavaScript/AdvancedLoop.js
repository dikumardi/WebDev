
const basket = ['apples','ornages','grapes'];
const detailsBasket={
    apple:5,
    oranges:10,
    grapes:1000
}

// for (let i = 0; i < basket.length; i++) {
//     console.log(basket[i]);
    
// }
// basket.forEach(item =>{
//     console.log(item);
    
// })

// for of 
/** **/
for(item of basket){
    console.log(item);
    
}



// for in -properties
//enumerating
for(item in detailsBasket){
    console.log(item);  
}