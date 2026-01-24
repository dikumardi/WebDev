const { LogIn } = require("lucide-react")

let str = 'turtle'
str.padStart(10)
str.padEnd(10)

const fun=(a,b,c,d)=>{
    console.log(a);
    
}
fun(1,2,3,4)

let obj ={
    username0:'santa',
    username1:'aswe',
    username2:'saweda',
}
// Object.keys(obj).forEach((key,index)=>{
//     console.log(key,obj[key]);
    
// })

Object.entries(obj).forEach((value)=>{
    console.log(value);
    
})

Object.entries(obj).map(value =>{
    return value[1]+ value[0].replace('username','')
})