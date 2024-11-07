//object
// let student={
//      name:"Ankita",
//      age:21,
//      batch:"MCA"
// };
// console.log(typeof(student));
// console.log(`${student.name},${student.age},${student.batch}`);

//Using constructor
// const student=new Object();
// student.name="Ankita";
// student.age=21;
// student.batch="MCA";
// console.log(student);

// //Using 2 method for accesing value
// console.log(student.name);
// console.log(student["age"]);
// //modify the value
// student.name="Sonali";
// console.log(student);

// //To create an array object of 50 students .
//   let student=[
//     {name:Ankita,age:21,Batch:MCA},
//     {name:Sonali,age:21,batch:MCA},
//     {name:Sudikshya,age:21,batch:MCA},
//     {name:Madhu,age:21,batch:MCA}
//   ] 

   //Nested object
//    let person={
//     name:"Ritu",
//     age:21,
//     Address:{
//         city:"Bbsr",
//         pin:751024
//     },
//    } 
//    console.log(person.Address.pin);

   //Social Media comment
    // let User={
    //     Username:"abc",
    //     email:"abc@gmail.com",
    //     gender:"female",
    //     age:20,
    //     comments:['ab','cd','ef'],
    //     address:{
    //         city:"Bbsr",
    //         pin:751024,
    //         state:"Odisha",
    //     },
    // }
    // console.log(User.Username);
    // console.log(User.email);
    // console.log(User.address.city);
    // console.log(User.address.state);
    // console.log(User.comments);
    // console.log(User.comments[0]);
    // console.log(User.comments[User.comments.length-1]);

// this keyword: It refres to the current objects.
   let student={
    name:"Akriti",
    age:21,
    greet:function(){
        console.log(`hello ,${this.name}`);
    }
   };
   student.greet();

   
   
let product={
    id:102,
     product_name:"phone",
     stock:30,
  restock(n){
    this.stock=this.stock+ n;
  }
  
}
product.restock(20);
console.log(product);

