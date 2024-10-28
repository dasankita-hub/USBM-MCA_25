let newArray=[];
console.log(newArray);
console.log(typeof(newArray));
 
let name="Ankita";
let age=21;
let proffession="Student";
let isMarried=false;

let userArray=["Ankita",21,"Student",false];
console.log(userArray);

//Array Declaration
let newNumber=new Array(1,2,3,4,5);
console.log(newNumber);


let array=new Array(23,78,21,78,45,"Ankita");
let num1=array.length;
console.log(num1);
console.log(array[array.length-1]);

//Modify
let cities=["Bbsr","jajpur","balsore","cuttck","Bhadrak"];
console.log(cities);
let modifiedcity="kendrapara";
cities[2]=modifiedcity;
console.log(cities);

//push method
let addcity="Jagatsinghpur";
cities.push(addcity);
console.log(cities);

//pop method
cities.pop();
console.log(cities);

// shift()
cities.shift();
console.log(cities);

let newcity="Rourkela";
cities.unshift(newcity);
console.log(cities);
