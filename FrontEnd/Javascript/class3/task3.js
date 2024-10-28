//Task-1:
// let total_bill = 750;
// if (total_bill > 500) {
//   console.log("Discount Available");
// } else {
//   console.log("No Discount");
// }

// Task-2 :
// let age = 60;
// if (age >= 60) {
//   console.log("Adult and Senior");
// } else if (age >= 18) {
//   console.log("Adult");
// } else {
//   console.log("Minor");
// }

// Task-3
// Check if (male) and then check (22+) then he can able to marry

    //  let gender='male';
    //  let age=27;
    //  if(gender=='male'){
    //     if(age>=22){
    //         console.log("This person can marry.");
    //     }
    //     else{
    //         console.log("This person cannot marry.");
    //     }
    //  }
    //  else{
    //     console.log("Can not marry");
    //  }

     //switch statement
     // check for vowel or consonant
      
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,  
    output: process.stdout
});

rl.question('Enter a character: ', (ch) => {
    switch (ch.toLowerCase()) {  
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
            console.log(`${ch} is a Vowel`);
            break;
        default:
            console.log(`${ch} is a Consonant`);
    }
    rl.close();  
});
//task3 cmplt


