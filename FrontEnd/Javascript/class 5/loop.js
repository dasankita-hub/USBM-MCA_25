// ## Exercise 1: Simple Calculator with a Loop
  
// const readline = require('readline');

// const r1 = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// function calculate(num1, num2, operation) {
//     switch (operation) {
//         case '+':
//             return num1 + num2;
//         case '-':
//             return num1 - num2;
//         case '*':
//             return num1 * num2;
//         case '/':
//             return num2 !== 0 ? num1 / num2 : 'Error: Division by zero';
//         default:
//             return 'Invalid operation';
//     }
// }

// function NumberInput(question, callback) {
//     r1.question(question, (input) => {
//         if (input.toLowerCase() === 'exit') {
//             console.log('Exit');
//             r1.close(); 
//         } else {
//             const number = parseFloat(input);
//             if (isNaN(number)) {
//                 console.log('Invalid number, please try again.');
//                 NumberInput(question, callback);
//             } else {
//                 callback(number);
//             }
//         }
//     });
// }

// function getOperationInput(callback) {
//     r1.question('Enter the operation (+, -, *, /): ', (operation) => {
//         if (['+', '-', '*', '/'].includes(operation)) {
//             callback(operation);
//         } else {
//             console.log('Invalid operation, please try again.');
//             getOperationInput(callback);
//         }
//     });
// }
// function calculator() {
//     NumberInput('Enter the first number: ', (num1) => {
//         NumberInput('Enter the second number: ', (num2) => {
//             getOperationInput((operation) => {
//                 const result = calculate(num1, num2, operation);
//                 console.log(`Result: ${num1} ${operation} ${num2} = ${result}`);
//                 calculator(); 
//             });
//         });
//     });
// }

// calculator();



// // ## Exercise 2: Guessing Game
// const readline = require('readline');
// const r2 = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// const targetNumber = Math.floor(Math.random() * 100) + 1;
// console.log(' Guessing Game!');

// function UserInput() {
//     r2.question('Guess a number between 1 and 100: ', (input) => {
//         const guessno = parseInt(input);
//         if (isNaN(guessno)) {
//             console.log('Invalid input, please enter a number.');
//             UserInput();
//         } else if (guessno < 1 || guessno > 100) {
//             console.log('Please enter a number between 1 and 100.');
//             UserInput();
//         } else {
//             checkGuess(guessno);
//         }
//     });
// }
  
//   UserInput();
// function checkGuess(guessno) {
//     if (guessno === targetNumber) {
//         console.log(`Congratulations! You guessed the correct number: ${targetNumber}`);
//         r2.close();
//     } else if (guessno < targetNumber) {
//         console.log('Too low! Try again.');
//         UserInput();
//     } else {
//         console.log('Too high! Try again.');
//         UserInput();
//     }
// }

// ## Exercise 3: Word Counter

// const readline=require('readline');
// const r3=readline.createInterface({
//  input:process.stdin,
//  output:process.stdout
// });
//  function countWord(){
//     r3.question('Enter a sentence ',(input)=>{ 
//          const words=input.split(/\s+/).length;
//          console.log(`Number of words: ${words}`);
//          countWord();
//     })
//  };
//  countWord();

//  ## Exercise 4: Login Attempt Limit
const readline = require('readline');

const r4 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const correctUsername = 'Ankita';
const correctPassword = '3456';
let attempts = 0;
const maxAttempts = 3;

function getUsername(callback){
    r4.question('Enter your Username ',(Username)=>{
        callback(Username);
    })
};
function getpassword(callback){
    r4.question('Enter your Password ',(Password)=>{
        callback(Password);
    })
};
function login(){
    getUsername((Username)=>{
     getpassword((Password)=>{
        if (Username === correctUsername && Password === correctPassword) {
            console.log('Login successful!');
            r4.close();
        } 
        else {
            attempts++;
            if (attempts >= maxAttempts) {
                console.log('Too many failed attempts. You are locked out.');
                rl.close();
            } else {
                console.log(`You have ${maxAttempts - attempts} attempt(s) left.`);
                login(); 
            }
        }
    });
});
}

login();
    