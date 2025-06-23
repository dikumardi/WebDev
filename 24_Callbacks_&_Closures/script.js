/**Callbacks function */

function abcd(cb) {
    cb();
}
abcd(function () {}) // This line is called callback function



/**Hof- 
 * Below example is higher order function
 *   Here, xyz is a higher-order function because it accepts a function as a parameter.
*/

function xyz(val) {
    
}
xyz(function () {
    
})

// OR --- abc is a higher-order function because it returns another function. 
function abc() {
    return function () {
        
    }
}
abc();


/**Closures---When a function is returned from another function and it can still use the variables of that outer function — that's a closure.

 */

function hehe() {
    let a = 10 ;
    return function () {
        console.log(a);
        
    }
}


/**Create a function that takes another function as an argument and calls it after 3 seconds */

function callerfnc(fn) {
    setTimeout(fn,3000);
    
}


callerfnc(function () {
        console.log('hehhee');

})

/**Implement your own version of `.map()` as a higher-order function 

var arr = [1,2,3,4,5];
// This is the example of .map
var ans = arr.map(function (val) {
    return val+2;
    
})

*/
var arr = [1,2,3,4,5]
function map(a,fn) {
    var newarr=[];
    for (let i = 0; i < a.length; i++) {
       newarr.push(fn(a[i]));
        
    }
            return newarr;

}

var ans2 =map(arr,function (val) {
    return val+3;
    
})
console.log(ans2);

/**Write a function that uses closures to create a counter.**/

function counter() {
    let count = 0;
    return function () {
        count++;
        console.log(count);
        
    }
}

 let ans = counter(); 
 ans();
 ans();
 ans();

/**Implement a function that limits how many times another function can be called (Closure + HOF). */

function fnlimiter(fn,limit) {
    let totalcall = 0 ;
     return function () {
        if (totalcall < limit) {
            totalcall++;
            fn();
            
        }
     }
}
let limiter = fnlimiter(function () {
    console.log('heheh');
    
},3);
limiter();
limiter();
limiter();
limiter()