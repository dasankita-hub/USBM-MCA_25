// let newArray=[];
// console.log(newArray);
// console.log(typeof(newArray));
 
// let name="Ankita";
// let age=21;
// let proffession="Student";
// let isMarried=false;

// let userArray=["Ankita",21,"Student",false];
// console.log(userArray);

// //Array Declaration
// let newNumber=new Array(1,2,3,4,5);
// console.log(newNumber);


// let array=new Array(23,78,21,78,45,"Ankita");
// let num1=array.length;
// console.log(num1);
// console.log(array[array.length-1]);

//Modify
// let cities=["Bbsr","jajpur","balsore","cuttck","Bhadrak"];
// console.log(cities);
// let modifiedcity="kendrapara";
// cities[2]=modifiedcity;
// console.log(cities);

//push method
// let addcity="Jagatsinghpur";
// cities.push(addcity);
// console.log(cities);

//pop method
// cities.pop();
// console.log(cities);

// shift()
// cities.shift();
// console.log(cities);

// let newcity="Rourkela";
// cities.unshift(newcity);
// console.log(cities);

let fruits=["apple","orange","strawberry"];
let newArray=fruits.concat(["guava"]);
console.log(newArray);

let student=["abc","cde","def","rfg"];
let newStudent=student.includes("ASD");
console.log(newStudent);

let arr=["ant","camel","duck","elephant","tiger"];
let newarr=arr.slice(2);
console.log(newarr);
 
let newarr2=arr.slice(2,4);
console.log(newarr2);

let months=["jan","feb","april","May"];
months.splice(2,0,"march"); //her 1 is the index ,0 is no of deleted elements,march is val
console.log(months);
months.splice(2,1,"june");
console.log(months);

let arr1=[1,2,3,4,5];
// for(let i=0;i<arr1.length;i++) {
//    let arr2=arr1[i]*2;
//    console.log(arr2);
// }

//for eachh
arr1.forEach((e)=>{
   console.log(e*2)
})