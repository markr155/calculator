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