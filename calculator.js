document.open();
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
// After loop exits, build the tables
document.write("<h2>Calculation Results</h2>");

// Main results table
document.write("<table border='1' cellpadding='8' cellspacing='0' style='border-collapse: collapse; margin-bottom: 30px;'>");
document.write("<tr style='background-color: #3498db; color: white;'>");
document.write("<th>Number 1 (x)</th>");
document.write("<th>Operator</th>");
document.write("<th>Number 2 (y)</th>");
document.write("<th>Result</th>");
document.write("</tr>");

// Loop through all calculations and add rows
for (let i = 0; i < calculations.length; i++) {
    let calc = calculations[i];
    
    document.write("<tr>");
    document.write("<td>" + calc.x + "</td>");
    document.write("<td>" + calc.operator + "</td>");
    document.write("<td>" + calc.y + "</td>");
    document.write("<td>" + calc.result + "</td>");
    document.write("</tr>");
}

document.write("</table>");

// Summary table 
    if (validResults.length > 0) {
    // Calculate min, max, and total
    let min = Math.min(...validResults);
    let max = Math.max(...validResults);
    let total = validResults.reduce((sum, val) => sum + val, 0);
    let average = total / validResults.length;
        
    document.write("<table border='1' cellpadding='8' cellspacing='0' style='border-collapse: collapse;'>");
    document.write("<tr style='background-color: #2ecc71; color: white;'>");
    document.write("<th>Minimum</th>");
    document.write("<th>Maximum</th>");
    document.write("<th>Average</th>");
    document.write("<th>Total</th>");
    document.write("</tr>");
    
    document.write("<tr>");
    document.write("<td>" + min + "</td>");
    document.write("<td>" + max + "</td>");
    document.write("<td>" + average.toFixed(2) + "</td>");
    document.write("<td>" + total + "</td>");
    document.write("</tr>");
    
    document.write("</table>");

// Add link to go back
document.write("<br><br><a href='calculator.html'>Start New Calculation</a>");

