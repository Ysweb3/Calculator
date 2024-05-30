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
const calBackspace = document.querySelector("#backspace");
const calAdd = document.querySelector(".add");
const calSubtract = document.querySelector(".subtract");
const calMultiply = document.querySelector(".multiply");
const calDivide = document.querySelector(".divide");
const calEquals = document.querySelector(".equals");

let operateResult;
let operator = "";
let tempValue = "";
let a = "";

//Functions
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
    tempValue += "1";
})
digitTwo.addEventListener("click" , () => { 
    calDisplay.textContent += "2";
    tempValue += "2";
})
digitThree.addEventListener("click" , () => { 
    calDisplay.textContent += "3";
    tempValue += "3";
})
digitFour.addEventListener("click" , () => { 
    calDisplay.textContent += "4";
    tempValue += "4";
    
})
digitFive.addEventListener("click" , () => { 
    calDisplay.textContent += "5";
    tempValue += "5";
    
})
digitSix.addEventListener("click" , () => { 
    calDisplay.textContent += "6";
    tempValue += "6";
})
digitSeven.addEventListener("click" , () => { 
    calDisplay.textContent += "7";
    tempValue += "7";
})
digitEight.addEventListener("click" , () => { 
    calDisplay.textContent += "8";
    tempValue += "8";

})
digitNine.addEventListener("click" , () => { 
    calDisplay.textContent += "9";
    tempValue += "9";
   
})
digitZero.addEventListener("click" , () => { 
    calDisplay.textContent += "0";
    tempValue += "0";

})
let decimalPressed = false;
digitDecimal.addEventListener("click" , () => {
    if (decimalPressed == false) {
        decimalPressed = true;
        calDisplay.textContent += ".";
        tempValue += ".";
    } 
    else{
        //Do nothing
    }
})

//Events operator
let operatorPressed = false;
calAdd.addEventListener("click" , () => {
    decimalPressed = false;
    operator = "+";
    if (operatorPressed == false) {
        operatorPressed = true;
        a = tempValue;
        tempValue = "";
        calDisplay.textContent = a + "+"
    }else { 
        a = operate(operator,parseFloat(a),parseFloat(tempValue)).toFixed(2);
        if (isNaN(a) == true) {
            calDisplay.textContent = "Invalid Input,Reset";
        }   
        else{
            tempValue = "";
            calDisplay.textContent = a + "+";
        }
    } 
})
calSubtract.addEventListener("click" , () => {
    decimalPressed = false;
    operator = "-";
    if (operatorPressed == false) {
        operatorPressed = true;
        a = tempValue;
        tempValue = "";
        calDisplay.textContent = a + "-"
    }else { 
        a = operate(operator,parseFloat(a),parseFloat(tempValue)).toFixed(2);
        if (isNaN(a) == true) {
            calDisplay.textContent = "Invalid Input,Reset";
        }   
        else{
            tempValue = "";
            calDisplay.textContent = a + "-";
        }
    } 
})
calMultiply.addEventListener("click" , () => {
    decimalPressed = false;
    operator = "x";
    if (operatorPressed == false) {
        operatorPressed = true;
        a = tempValue;
        tempValue = "";
        calDisplay.textContent = a + "x"
    }else { 
        a = operate(operator,parseFloat(a),parseFloat(tempValue)).toFixed(2);
        if (isNaN(a) == true) {
            calDisplay.textContent = "Invalid Input,Reset";
        }   
        else{
            tempValue = "";
            calDisplay.textContent = a + "x";
        }

    } 
})
calDivide.addEventListener("click" , () => {
    decimalPressed = false;
    operator = "/";
    if (operatorPressed == false) {
        operatorPressed = true;
        a = tempValue;
        tempValue = "";
        calDisplay.textContent = a + "÷"
    }else { 
        a = operate(operator,parseFloat(a),parseFloat(tempValue)).toFixed(2);
        if (isNaN(a) == true) {
            calDisplay.textContent = "Invalid Input,Reset";
        }   
        else{
            tempValue = "";
            calDisplay.textContent = a + "÷";
        }
    } 
})


//Events
calClear.addEventListener("click" , () => {
    calDisplay.textContent = "";
    tempValue = "";
    a = "";
    operatorPressed = false;
    decimalPressed = false;
})
calBackspace.addEventListener("click" , () => {
    if (operatorPressed == false) {
        tempValue = tempValue.slice(0,tempValue.length - 1)
        calDisplay.textContent = tempValue;
        console.log("temp"+tempValue);
        console.log("a" +a)
        
    }
    else{
        tempValue = tempValue.slice(0,tempValue.length - 1)
        calDisplay.textContent = a + operator + tempValue;
        console.log("temp"+tempValue);
        console.log("a" +a)
        
    }
    
    
})

calEquals.addEventListener("click" , () => {
    operateResult = operate(operator,parseFloat(a),parseFloat(tempValue)).toFixed(2);
    if (isNaN(operateResult) == true) {
        calDisplay.textContent = "Invalid Input,Reset";
    }
    else{
        calDisplay.textContent = "";
        calDisplay.textContent = operateResult;
        tempValue = operateResult;
        operatorPressed = false;
        decimalPressed = false;
        tempValue = operateResult;
        a = "";
    }
})

