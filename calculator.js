function add(a, b) {
    return a + b;
}
function sub(a, b) {
    return a - b;
}
function mul(a, b) {
    return a * b;
}
function div(a, b) {
    return a / b;
}

let num1;
let num2;
let operator;

function operate(a, b, op) {
    num1 = a;
    num2 = b;
    
    if (op === '+') {
        return add(num1, num2);
    } else if (op === '-') {
        return sub(num1, num2);
    } else if (op === '*') {
        return mul(num1, num2);
    } else if (op === '/') {
        return div(num1, num2);
    }
}

console.log(operate(3, 5, '*'));
console.log(operate(3, 5, '+'));
console.log(operate(3, 5, '-'));
console.log(operate(3, 5, '/'));
