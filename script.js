function operate(operator,a,b){
    switch (operator) {
        case "+":
            return add(a,b)
        case "-":
            return subtract(a,b)
        case "x":
            return multiply(a,b)
        case "/":
            return divide(a,b)
        default:
            break;
    }   
}
function add(a,b){
    return a + b;
}
function subtract(a,b){
    return a - b;
}
function multiply(a,b){
    return a * b;
}
function divide(a,b){
    return a / b;
}
let operator = "+";
let a = 23;
let b = 20;

console.log(operate(operator,a,b))
