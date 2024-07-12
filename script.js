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
    if (b ===0) {
        return "ERROR";
        return a/b;
    } else {
        return a/b;
    }  
}

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

let firstNumber = null;
let secondNumber = null;
let operator = "";
let displayValue = "";

const buttons = document.querySelectorAll('button');
const display = document.querySelector(".display");
const paraDisplay = document.createElement('p');
paraDisplay.classList.add('solution');
display.appendChild(paraDisplay);

function updateDisplay() {
    paraDisplay.textContent = displayValue;
}

function clearDisplay() {
    displayValue = "";
    firstNumber = null;
    secondNumber = null;
    operator = null;
    updateDisplay();
}

function setupButtons() {
    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const value = button.textContent;
            if (!isNaN(value) || value === ",") {
                // If the button is a number or a comma
                displayValue += value;
                updateDisplay();
            } else if (value === '+' || value === '-' || value === '*' || value === '/') {
                // If the button is an operator
                if (firstNumber === null) {
                    firstNumber = parseFloat(displayValue);
                    operator = value;
                    displayValue = ""; // Reset display for the next number
                    updateDisplay();
                }
            } else if (value === '=') {
                // If the button is equals
                if (firstNumber !== null && operator !== null) {
                    secondNumber = parseFloat(displayValue);
                    displayValue = Math.round(operate(firstNumber, secondNumber, operator).toString());
                    updateDisplay();
                    // Reset for new calculation
                    firstNumber = null;
                    secondNumber = null;
                    operator = null;
                } else {
                    displayValue = "ERROR";
                    updateDisplay();
                }
            } else if (value === 'C') {
                // Clear the display and reset
                clearDisplay();
            }
        });
    });
}

setupButtons();