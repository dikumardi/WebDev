//Reference type
var obj1 = {value:10};
var obj2 = obj1; 
var obj3 = {value:10};

obj1 === obj2
obj1 === obj3

// see values
obj1.value=15
obj2.value
obj3.value



//context  vs scope
function a() {
    console.log(this);
    
}


//instantiation
const object4 = {
    a:function () {
    console.log(this);    
    }
}
object4.a();

class Player {
    constructor(name,type) {
        console.log(this);
        
        this.name = name
        this.type = type
    }
    introduce(){
        console.log(`Hi I am ${this.name},Hi I am ${this.type}`);
        
    }
}

class Wizard extends Player {
    constructor(name,type) {
        super(name,type)
    }
    play(){
        console.log(`Hehehe I'm a ${this.type}`);
        
    }
}
const wizard1 =new Wizard('shekk','Heslrt') 
const wizard2 =new Wizard('ekk','Dark magic') 