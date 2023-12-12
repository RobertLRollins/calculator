//const math = require('mathjs');

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

let displayValue = '0';
let num1;
let num2;
let operator;

function operate(a, b, op) {
    
    if (op === '+') {
        return add(a, b);
    } else if (op === '-') {
        return sub(a, b);
    } else if (op === '*') {
        return mul(a, b);
    } else if (op === '/') {
        return div(a, b);
    }
}

let buttonMenu = document.querySelector('#buttonMenu')

buttonMenu.addEventListener('click', (event) => {
    let target = event.target;

    switch(target.id) {
        case 'zero':
            if (document.getElementById('bottomOutput').textContent === '0') {
                document.getElementById('bottomOutput').textContent = '0';
                displayValue = '0';
                break;
            }
            document.getElementById('bottomOutput').textContent += '0';
            displayValue += '0';
            break;
        case 'one':
            if (document.getElementById('bottomOutput').textContent === '0') {
                document.getElementById('bottomOutput').textContent = '';
                displayValue = '';
            }
            document.getElementById('bottomOutput').textContent += '1';
            displayValue += '1';
            break;
        case 'two':
            if (document.getElementById('bottomOutput').textContent === '0') {
                document.getElementById('bottomOutput').textContent = '';
                displayValue = '';
            }
            document.getElementById('bottomOutput').textContent += '2';
            displayValue += '2';
            break;
        case 'three':
            if (document.getElementById('bottomOutput').textContent === '0') {
                document.getElementById('bottomOutput').textContent = '';
                displayValue = '';
            }
            document.getElementById('bottomOutput').textContent += '3';
            displayValue += '3';
            break;
        case 'four':
            if (document.getElementById('bottomOutput').textContent === '0') {
                document.getElementById('bottomOutput').textContent = '';
                displayValue = '';
            }
            document.getElementById('bottomOutput').textContent += '4';
            displayValue += '4';
            break;
        case 'five':
            if (document.getElementById('bottomOutput').textContent === '0') {
                document.getElementById('bottomOutput').textContent = '';
                displayValue = '';
            }
            document.getElementById('bottomOutput').textContent += '5';
            displayValue += '5';
            break;
        case 'six':
            if (document.getElementById('bottomOutput').textContent === '0') {
                document.getElementById('bottomOutput').textContent = '';
                displayValue = '';
            }
            document.getElementById('bottomOutput').textContent += '6';
            displayValue += '6';
            break;
        case 'seven':
            if (document.getElementById('bottomOutput').textContent === '0') {
                document.getElementById('bottomOutput').textContent = '';
                displayValue = '';
            }
            document.getElementById('bottomOutput').textContent += '7';
            displayValue += '7';
            break;
        case 'eight':
            if (document.getElementById('bottomOutput').textContent === '0') {
                document.getElementById('bottomOutput').textContent = '';
                displayValue = '';
            }
            document.getElementById('bottomOutput').textContent += '8';
            displayValue += '8';
            break;
        case 'nine':
            if (document.getElementById('bottomOutput').textContent === '0') {
                document.getElementById('bottomOutput').textContent = '';
                displayValue = '';
            }
            document.getElementById('bottomOutput').textContent += '9';
            displayValue += '9';
            break;
        case 'decimal':
            if(displayValue.includes('.')) {
                break;
            }
            document.getElementById('bottomOutput').textContent += '.';
            displayValue += '.';
                break;
        case 'plus':
            if(document.getElementById('topOutput').textContent.includes('+') ||
            document.getElementById('topOutput').textContent.includes('-') ||
            document.getElementById('topOutput').textContent.includes('*') ||
            document.getElementById('topOutput').textContent.includes('/')) {
                num2 = +displayValue;
                displayValue ='';
                document.getElementById('topOutput').textContent = operate(num1, num2, operator) + ' + ';
                document.getElementById('bottomOutput').textContent = '0';
                num1 = operate(num1, num2, operator);
                num2 = '';
                operator = '+';
                break;
            }
            document.getElementById('topOutput').textContent = displayValue + ' + ';
            num1 = +displayValue;
            displayValue = '0';
            document.getElementById('bottomOutput').textContent = '0';
            operator = '+';

            break;
        case 'minus':
            if(document.getElementById('topOutput').textContent.includes('+') ||
            document.getElementById('topOutput').textContent.includes('-') ||
            document.getElementById('topOutput').textContent.includes('*') ||
            document.getElementById('topOutput').textContent.includes('/')) {
                num2 = +displayValue;
                displayValue ='';
                document.getElementById('topOutput').textContent = operate(num1, num2, operator) + ' - ';
                document.getElementById('bottomOutput').textContent = '0';
                num1 = operate(num1, num2, operator);
                num2 = '';
                operator = '-';
                break;
            }
            document.getElementById('topOutput').textContent = displayValue + ' - ';
            num1 = +displayValue;
            displayValue = '0';
            document.getElementById('bottomOutput').textContent = '0';
            operator = '-';
            break;
        case 'multiply':
            if(document.getElementById('topOutput').textContent.includes('+') ||
            document.getElementById('topOutput').textContent.includes('-') ||
            document.getElementById('topOutput').textContent.includes('*') ||
            document.getElementById('topOutput').textContent.includes('/')) {
                num2 = +displayValue;
                displayValue ='';
                document.getElementById('topOutput').textContent = operate(num1, num2, operator) + ' * ';
                document.getElementById('bottomOutput').textContent = '0';
                num1 = operate(num1, num2, operator);
                num2 = '';
                operator = '*';
                break;
            }
            document.getElementById('topOutput').textContent = displayValue + ' * ';
            num1 = +displayValue;
            displayValue = '0';
            document.getElementById('bottomOutput').textContent = '0';
            operator = '*';
            break;
        case 'divide':
            if(document.getElementById('topOutput').textContent.includes('+') ||
            document.getElementById('topOutput').textContent.includes('-') ||
            document.getElementById('topOutput').textContent.includes('*') ||
            document.getElementById('topOutput').textContent.includes('/')) {
                num2 = +displayValue;
                displayValue ='';
                document.getElementById('topOutput').textContent = operate(num1, num2, operator) + ' / ';
                document.getElementById('bottomOutput').textContent = '0';
                num1 = operate(num1, num2, operator);
                num2 = '';
                operator = '/';
                break;
            }
            document.getElementById('topOutput').textContent = displayValue + ' / ';
            num1 += displayValue;
            displayValue = '0';
            document.getElementById('bottomOutput').textContent = '0';
            operator = '/';
            break;    
        case 'clear':
            location.reload();
            break;
        case 'delete':
            
            break;
        case 'equal':
            document.getElementById('topOutput').textContent += displayValue + ' = ';
            num2 = +displayValue;
            displayValue ='';
            document.getElementById('bottomOutput').textContent = operate(num1, num2, operator);
            num1 = '';
            num2 = '';
            operator = '';
            break;
    }
});
