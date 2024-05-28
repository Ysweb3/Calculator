const digitOne = document.querySelector(".one");
const digitTwo = document.querySelector(".two");
const digitThree = document.querySelector(".three");
const digitFour = document.querySelector(".four");
const digitFive = document.querySelector(".five");
const digitSix = document.querySelector(".six");
const digitSeven = document.querySelector(".seven");
const digitEight = document.querySelector(".eight");
const digitNine = document.querySelector(".nine");
const digitZero = document.querySelector(".zero");
const digitDecimal = document.querySelector(".decimal");
const calDisplay = document.querySelector("#display-calculator");
const calClear = document.querySelector("#clear");
const calAdd = document.querySelector(".add");
const calSubtract = document.querySelector(".subtract");
const calMultiply = document.querySelector(".multiply");
const calDivide = document.querySelector(".divide");
const calEquals = document.querySelector(".equals");

let operator = "";
let tempValue = "";
let a = "";


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


//Events digits
digitOne.addEventListener("click" , () => { 
    calDisplay.textContent += "1";
    tempValue += "1"
    console.log(tempValue)
})
digitTwo.addEventListener("click" , () => { 
    calDisplay.textContent += "2";
    tempValue += "2"
    console.log(tempValue)
})
digitThree.addEventListener("click" , () => { 
    calDisplay.textContent += "3";
    tempValue += "3"
    console.log(tempValue)
})
digitFour.addEventListener("click" , () => { 
    calDisplay.textContent += "4";
    tempValue += "4"
    console.log(tempValue)
})
digitFive.addEventListener("click" , () => { 
    calDisplay.textContent += "5";
    tempValue += "5"
    console.log(tempValue)
})
digitSix.addEventListener("click" , () => { 
    calDisplay.textContent += "6";
    tempValue += "6"
    console.log(tempValue)
})
digitSeven.addEventListener("click" , () => { 
    calDisplay.textContent += "7";
    tempValue += "7"
    console.log(tempValue)
})
digitEight.addEventListener("click" , () => { 
    calDisplay.textContent += "8";
    tempValue += "8"
    console.log(tempValue)
})
digitNine.addEventListener("click" , () => { 
    calDisplay.textContent += "9";
    tempValue += "9"
    console.log(tempValue)
})
digitZero.addEventListener("click" , () => { 
    calDisplay.textContent += "0";
    tempValue += "0"
    console.log(tempValue)
})
digitDecimal.addEventListener("click" , () => { 
    calDisplay.textContent += ".";
    tempValue += "."
    console.log(tempValue)
})


//Events operator
calAdd.addEventListener("click" , () => {
    a = tempValue;
    tempValue = "";
    operator = "+";
    calDisplay.textContent = a + "+"
    console.log(a);
})
calSubtract.addEventListener("click" , () => {
    a = tempValue;
    tempValue = "";
    operator = "-";
    calDisplay.textContent = a + "-"
    console.log(a);
})
calMultiply.addEventListener("click" , () => {
    a = tempValue;
    tempValue = "";
    operator = "x";
    calDisplay.textContent = a + "x"
    console.log(a);
})
calDivide.addEventListener("click" , () => {
    a = tempValue;
    tempValue = "";
    operator = "/";
    calDisplay.textContent = a + "÷"
    console.log(a);
})


//Events
calClear.addEventListener("click" , () => {
    calDisplay.textContent = "";
    tempValue = "";
    a = "";
})

calEquals.addEventListener("click" , () => {
    calDisplay.textContent = operate(operator,parseFloat(a),parseFloat(tempValue));

})

