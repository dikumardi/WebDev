//Closures - When a program run the function is executed .It's never goinna  executed again ,But it's going to remember that there is a reference to those variable  so the child scope always has the acces to the parent scope
const first = ()=>{
    const greet = 'Hi'
   const second =()=>{
    alert(greet);
   }
   return second;
}

// const newFunc = first();
// newFunc()
first()()

//Currying
// const multiply = (a,b)=> a*b;
// // const curriedmultiply= (a)=>(b)=> a *b;
// const currMul = (a)=> a
// curriedmultiply()

// const currMul = (a) => (b) => a*b ;
// currMul(3)(2)



// //compose
// const compose = (f,g)=> (a)=> f(g(a))
// const sum = (num) => num + 1 ;
// compose(sum,sum)(5)

function compose(f,g) {
    return function (a) {
        return f (g(a));
    };
}


//Avoding Side Effects,functional purity




/** function add(a) {
    return function (b) {
        return function (c) {
            return a + b + c ;
        };
    };
};

add(2)(3)(4);**/

//  this below code is done using curring
// const add = a => b => c=> a + b+c ;
// add(2)(3)(4)