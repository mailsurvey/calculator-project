let display = document.getElementById("display");
let currentInput = "";
let operator = null;
let previousInput = "";

function appendNumber(number) {
    
    currentInput += number.toString();  //currentInput + number.toString()
   

    display.value = currentInput;
    
}



function clearDisplay() {
    currentInput = "";
    previousInput = "";
    operator = null;
    display.value = "";
}

function operate(op) {
    if (currentInput === "") return;
    
    if (previousInput !== "") {
        calculate();
    }

    operator = op;
    previousInput = currentInput;
    currentInput = "";
}
function reciprocal() {
    if (currentInput === "") return;

    let result = 1 / parseFloat(currentInput);

    if (isNaN(result)) {
        alert("Invalid operation");
        clearDisplay();
        return;
    }

    currentInput = result.toString();
    display.value = currentInput;
}
function calculate() {
    let result;
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);

    if (isNaN(prev) || isNaN(current)) return;

    switch (operator) {
        case "+":
            result = prev + current;
            break;
        case "-":
            result = prev - current;
            break;
        case "*":
            result = prev * current;
            break;
        case "/":
            if (current === 0) {
                alert("Cannot divide by 0");
                clearDisplay();
                return;
            }
            result = prev / current;
            break;
        default:
            return;
    }

    currentInput = result.toString();
    operator = null;
    previousInput = "";
    display.value = currentInput;
}