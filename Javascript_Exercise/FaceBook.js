let  database = [
    {
     username:'john',
     password:'abc'
    } ,
     {
     username:'mew',
     password:'123'
    } ,
     {
     username:'cat',
     password:'121'
    } ,

];

let newsFeed = [
    {
        username:"bobby",
        timeline:"so tired from all that learning"
    },
    {
        username:"sally",
        timeline:"Javascript i so cool!"
    },
];


function isvalid(username,password) {
     for (let i = 0; i < database.length; i++) {
     if  (database[i].username === username &&
       database[i].password === password) {
      return true; 
     }
   }
  return false;  
  
}
    
function signIn(username,password) {
 if(isvalid(username,password)){
        
         console.log(newsFeed);
     } else {
    alert('Wrong password')
     
 }
 
}



let userNamePrompt = prompt('What\'s your username?')
let passwordPrompt = prompt('What\'s your password?')

signIn(userNamePrompt,passwordPrompt)


