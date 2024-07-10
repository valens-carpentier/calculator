function add (a,b) {
    return a + b;
}

function subtract (a,b) {
    return a - b;
}

function multiply (a,b) {
    return a * b;
}

function divide (a,b) {
    return a/b;
}

let firstNumber;
let secondNumber;
let operator = "";

function operate (firstNumber,secondNumber,operator) {        
    if (operator === "+"){
        return add(firstNumber,secondNumber);
    } else if (operator === "-") {
        return subtract(firstNumber,secondNumber);
    } else if (operator === "*") {
        return multiply(firstNumber,secondNumber);
    } else if (operator === "/") {
        return divide(firstNumber,secondNumber);
    }  else {
     return "Invalid operator";
    }
}

console.log(operate(3,4,"+"));

/*

Create the functions that populate the display when you click the number buttons. 
You should be storing the ‘display value’ in a variable somewhere for use in the next step.

Make the calculator work! You’ll need to store the first number and second number that are input into the calculator, 
utilize the operator that the user selects, and then operate() on the two numbers when the user presses the “=” key.
- You should already have the code that can populate the display, so once operate() has been called, update the display with 
the ‘solution’ to the operation.
- This is the hardest part of the project. You need to figure out how to store all the values and 
call the operate function with them. Don’t feel bad if it takes you a while to figure out the logic.

*/