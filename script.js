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
const sum = (a, b) => Math.round((a + b) * 1e12) / 1e12;
//subtract
const subtract = (a, b) => a - b;
//multiply
const multiply = (a, b) => Math.round((a * b) * 1e12) / 1e12;
//divide
const divide = (a, b) => a / b;
//operate, (operator, a, b)
const operate = (op, a, b) => {
    if(op == '' || a == ''){return b};
    a = parseFloat(a);
    b = parseFloat(b);

    if(op == '*'){
        return multiply(a, b);
    }else if(op == '/'){
        if (b == 0){
            alert("Cannot divide by Zero!");
            return 0;
        }
        return divide(a, b);
    }else if(op == '+'){
        return sum(a, b);
    }else if(op == '-'){
        return subtract(a, b);
    };
}
//operation declaration
let currentOperator = '';
let lastOperand = '';
let newNum = true;

//updates display
const appendNum = (number) => {
    if (display.textContent == '0') {
        display.textContent = number;
        return};
    display.textContent += number;
}

//clear key
clrBtn.addEventListener("click",() => {
    display.textContent = 0;
    lastOperand = '';
});
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
    button.addEventListener("click", () => {
        if (newNum == true){
            display.textContent = button.textContent;
            newNum = false;
            return;
        };
        appendNum(button.textContent);
    })
);

//operator keys
opBtns.forEach((button) => {
    button.addEventListener("click", () => {
        if (!lastOperand == '') {
            display.textContent = operate(currentOperator, lastOperand, display.textContent);
        };
        currentOperator = button.textContent;
        lastOperand = display.textContent;
        newNum = true;
    });    
});
//equals key
equalsBtn.addEventListener("click", () => {
    display.textContent = operate(currentOperator, lastOperand, display.textContent);
    lastOperand = '';
    newNum = true;
});
