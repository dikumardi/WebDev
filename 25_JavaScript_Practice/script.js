/**Create a function that takes a callback and executes it after every `n` seconds indefinitely.**/


// function repeat(fn,time) {
//     setInterval(fn,time)

// }

// repeat(function () {
//     console.log('Hello world');
    
// }, 2000)

/**>Implement a function that returns a function with a preset greeting (Closure)**/

function greet(greeting) {
    return function (name) {
        console.log(`${greeting} ${name}` );
        
    };
 }

var greetingfn = greet("hello")
greetingfn('abc');
greetingfn('namee');

var japan = greet("konichiwa");
japan('india');


/**>Implement a function that takes a callback and only executes it once (HOF + Closure)**/

function abcd(cb) {
    let executed = false;
    return function () {
        if (!executed ) {
            executed = true ;
            cb();
        }
        else{
            console.error('limited exceed');
            
        }
    };
}


var newfn = abcd(function () {
    console.log("some code which should be executed");
    
})

newfn();
newfn();




/** revision
function onetimecall(cb) {
let execute = false;
    return function () {
        if (!execute) {
            execute = true ;
            cb();
            
        }else{
            console.error('for more limit buy unlimited pack ');
            
        }
    }
}
let answer = onetimecall(function () {
    console.log('only one time message will print');
    
})

answer();
answer();
answer();**/

/**Implement a function that throttles another function (HOF + Closures).**/

function throt(fn,delays) {
    let lastcall =0
    return function () {
        let current = Date.now();
        if (current - lastcall >=delays) {
             lastcall =current ;
             fn();
        }

    }
}

let newfunction = throt(function name() {
    console.log('will run in 2 seconds');
    
},2000)
newfunction();