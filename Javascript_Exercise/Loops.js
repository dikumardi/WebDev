let todos = [
    "clean room",
    "brush teeth",
     "exercise",
     "Study javascript",
     "eat healthy"
];
// for (let i = 0; i < todos.length; i++) {
//      todos[i] = todos[i] +'!';
    
// }
 
// let todosLength = todos.length
// for(i=0 ; i<todosLength;i++){
//     // todos[i]=todos[i]+"!" ;
//     //    console.log(todos[i]);
//     // todos.pop();
// }

// todos.forEach(function(todo,i) {
//     console.log(todo,i);
    
// })

let counterOne = 10
while (counterOne > 0 ) {
    console.log(counterOne);
    counterOne--;
    
}

let counterTwo = 10
do {
    console.log(counterTwo);
    counterTwo--;
} while (counterTwo > 0);


/** ForEach **/
let ans =todos.forEach((todo,index)=>{

    console.log(todo,index);
        
})
