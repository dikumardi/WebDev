const arr1 =[1,2,10,16]
const double = []
const newArr = arr1.forEach((num)=>{
    double.push(num *2);
})
console.log(double);



//map, filter, reduce

//map
const mapArray =arr1.map((num)=> num * 2);
console.log('map',mapArray);

//filter
const filterArray =arr1.filter(num =>num >5)
console.log(filterArray);


//reduce
const reduceArray=arr1.reduce((accumulator,num)=>{
   return accumulator + num
},0)

console.log('reduce', reduceArray);
