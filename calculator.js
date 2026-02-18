// Arrays to store valid calculations
let calculations = [];
let validResults = [];
// Continue looping while user clicks OK
let continueLoop = true;
while (continueLoop) {
    // Get first number
    let x = prompt("Enter first number (x):");
    if (x === null) {
        continueLoop = false;
        break;
    }
    // Get second number
    let y = prompt("Enter second number (y):");
    if (y === null) {
        continueLoop = false;
        break;
    }
    // Get operator
        let operator = prompt("Enter operator (+, -, *, /, %):");
        if (operator === null) {
            continueLoop = false;
            break;
        }
    // Validate inputs
    let result;
    let errorMessage = "";
    
    // Check if x and y are numbers
    if (isNaN(x) || isNaN(y) || x.trim() === "" || y.trim() === "") {
        errorMessage = "Numeric characters only";
    } 
    // Check if operator is valid
    else if (!["+", "-", "*", "/", "%"].includes(operator)) {
        errorMessage = "Invalid operator";
    }
    else {
        // Convert to numbers
        let numX = parseFloat(x);
        let numY = parseFloat(y);
        
        // Perform calculation
        switch(operator) {
            case "+":
                result = numX + numY;
                break;
            case "-":
                result = numX - numY;
                break;
            case "*":
                result = numX * numY;
                break;
            case "/":
                if (numY === 0) {
                    errorMessage = "Division by zero";
                } else {
                    result = numX / numY;
                }
                break;
            case "%":
                if (numY === 0) {
                    errorMessage = "Modulo by zero";
                } else {
                    result = numX % numY;
                }
                break;
        }
    }
    
    // Store calculation
    calculations.push({
        x: x,
        y: y,
        operator: operator,
        result: errorMessage || result,
        isValid: errorMessage === ""
    });
    
    // Store valid results for summary
    if (errorMessage === "") {
        validResults.push(result);
    }
}
