         /** JavaScript ES6 and Advanced Concepts Guide  **/

        //  1. let and const
        // let age = 23 ;
        // const pi = 3.14;

        // 2. Template Literals (Backticks ``)
        let userName = "myname";
        console.log(`welcome ${userName}`);

        // 3. Arrow Functions ()=>{}

        const add =(a,b)=> {return a+b};
        console.log(add(10,20 ));
        ;
         
        //4. Default Parameters
        const greet = (a ="diku")=>{
          console.log(`How are you ${a}`);
          
        }
        greet();

        //5. Destructuring
        const person = {name: "Diku", ages: 22};

        const {name , ages } = person;
        console.log(name);
        console.log(ages);
        
        // 6. Spread Operator ...

        const arr = [1,2,3];
        const newArr = [...arr,4,5,6]
        console.log(newArr);
        
        // 7. Rest Parameters ...args

         function sum(...nums) {
         return nums.reduce((a, b) => a + b);
          }
        
          let asn = sum(1,1,1,1);
          console.log(asn);
          
        // 8. Modules ( import / export )

        // file1.js
        // export const pi = 3.14;

        // // file2.js
        // import {pi} from './file1.js'

        


    import {greeting} from "../customer";
    import { personDetails } from "../sell"

    console.log(`name`);
    
     console.log(greeting());
    

