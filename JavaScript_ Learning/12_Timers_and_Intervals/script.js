 //setTimeout
        // setTimeout(function greet() {
        //     console.log("hello");

        // }, 5000)

        /**
        // setInterval : print again and again
        
         setInterval(function greet() {
             console.log("hello world");
            
         }, 1000) 
        **/


        //clearTimeout

        /**let ct = setTimeout(function greet() {
            console.log("hello");
            
        }, 1000);
        
        clearTimeout(ct);
        **/

        //clearInterval :
        let ci = setInterval(function greet() {
            console.log("hello world");

        }, 1000)
        clearInterval(ci);