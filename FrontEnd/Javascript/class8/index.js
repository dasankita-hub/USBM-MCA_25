//object
// let student={
//      name:"Ankita",
//      age:21,
//      batch:"MCA"
// };
// console.log(typeof(student));
// console.log(`${student.name},${student.age},${student.batch}`);

//Using constructor
const student=new Object();
student.name="Ankita";
student.age=21;
student.batch="MCA";
console.log(student);

//Using 2 method for accesing value
console.log(student.name);
console.log(student["age"]);
//modify the value
student.name="Sonali";
console.log(student);

//To create an array object of 50 students .
