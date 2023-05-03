//element declaration
const equalsBtn = document.querySelector(".keyEquals");
const delBtn = document.querySelector(".keyDelete");
const clrBtn = document.querySelector(".keyClear");
const decBtn = document.querySelector(".keyDec");
const posNegBtn = document.querySelector(".keyPosneg");
const display = document.querySelector(".calculator-display");
const numBtns = document.querySelectorAll(".keyNumber");
const opBtns = document.querySelectorAll(".keyOperator");

//computing functions
//sum
const sum = (a, b) => a + b;
//subtract
const subtract = (a, b) => a - b;
//multiply
const multiply = (a, b) => a * b;
//divide
const divide = (a, b) => a / b;
//operate, (operator, a, b)
const operate = (op, a, b) => {
    if(op == '*'){
        return multiply(a, b);
    }else if(op == '/'){
        return divide(a, b);
    }else if(op == '+'){
        return sum(a, b);
    }else if(op == '-'){
        return subtract(a, b);
    }
}
//math declaration
let currentOperator = '';
let lastOperator = '';

//updates display
const appendNum = (number) => {
    if (display.textContent == '0') {
        display.textContent = number;return};
    display.textContent += number;
}

//clear key
clrBtn.addEventListener("click",() => {display.textContent = 0});
//delete key - returns to 0 eventually
delBtn.addEventListener("click", () => {
    if(display.textContent.length == 1 || (display.textContent.length == 2 && display.textContent.includes('-'))){
        display.textContent = 0;
        return;
    };
    display.textContent = display.textContent.slice(0, (display.textContent.length - 1));
})
//decimal key
decBtn.addEventListener("click", () => {
    if (!display.textContent.includes('.')){
        display.textContent += '.';
    }});
//positive negative key
posNegBtn.addEventListener("click", () => {
    display.textContent *= -1;
})


//keys 1-9 on click
numBtns.forEach((button) =>
    button.addEventListener("click", () => {appendNum(button.textContent)}));

//operator keys


