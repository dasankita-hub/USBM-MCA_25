//Example:1
// const greeting = (name, hour) => {
//       if (hour < 12) {
//         return `Good Morning ${name}`;
//       } else if (hour < 18) {
//         return `Good Afternoon ${name}`;
//       } else {
//         return `Good Evening ${name}`;
//       }
//     };
    
//     const output1= greeting("Ankita", 16);
//     console.log(output1); 
    
// //Ex:2-Simple Calculator
//     const calculator = (a, b, operator) => {
//           switch (operator) {
//             case "+":
//               return a + b;
//               break;
//             case "-":
//               return a - b;
//               break;
//             case "*":
//               return a * b;
//               break;
//             case "/":
//               return a / b;
//               break;
        
//             default:
//               return "Invalid operator";
//               break;
//           }
//         };
        
//         const output2 = calculator(10, 5, "*");
//         console.log(output2);
        
//        // Example-3 :

// // const add = (a, b) => console.log(add(5, 7));
// // add()

// const add = (a, b) =>{ 
//    return a + b
// };
// console.log(add(5, 8));

// //BMI CALCULATOR
//  const BMI=(wt,ht)=>{
//     return wt/(ht*ht);
//  }
//  const output3=BMI(70,1.49).toFixed(2);
//  console.log(output3);


 // REST parameters

// const printNumbers = (... numbers) => {
//     return numbers;
// }
// let output1 = printNumbers(1,2,3,4,5,6,7,8,9);
// console.log(output1);


//callback function Syntax:

// function say(name,callback){
//     console.log ( `My name ${name}`);
//     return callback;
// }
// function hello (){
//     return "hello";
// }
// const output= say("Sushree",hello);
// console.log(output);

