// ## Exercise 1: Simple Calculator with a Loop
while (true){
    let operation=prompt("Enter the operation");
    if (operation.toString() == 'Exit') {
        console.log("Calculator closed.");
        break;
    }
    let num1 = parseInt(prompt("Enter the first number:"));
    let num2 = parseInt(prompt("Enter the second number:"));
    let result;
    switch (operation){
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 === 0) {
                console.log("Cannot divide by zero.");
                continue;
            }
            result = num1 / num2;
            break;
        default:
            console.log("Invalid operation. Please enter +, -, *, or /.");
            continue;
    }
    console.log(`Result: ${num1} ${operation} ${num2} = ${result}`); 
}
