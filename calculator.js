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

let displayValue;
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

let buttonMenu = document.querySelector('#buttonMenu')

buttonMenu.addEventListener('click', (event) => {
    let target = event.target;

    switch(target.id) {
        case 'zero':
            document.getElementById('textOutput').textContent += '0';
            displayValue += '0';
            break;
        case 'one':
            document.getElementById('textOutput').textContent += '1';
            displayValue += '1';
            break;
        case 'two':
            document.getElementById('textOutput').textContent += '2';
            displayValue += '2';
            break;
        case 'three':
            document.getElementById('textOutput').textContent += '3';
            displayValue += '3';
            break;
        case 'four':
            document.getElementById('textOutput').textContent += '4';
            displayValue += '4';
            break;
        case 'five':
            document.getElementById('textOutput').textContent += '5';
            displayValue += '5';
            break;
        case 'six':
            document.getElementById('textOutput').textContent += '6';
            displayValue += '6';
            break;
        case 'seven':
            document.getElementById('textOutput').textContent += '7';
            displayValue += '7';
            break;
        case 'eight':
            document.getElementById('textOutput').textContent += '8';
            displayValue += '8';
            break;
        case 'nine':
            document.getElementById('textOutput').textContent += '9';
            displayValue += '9';
            break;
        case 'decimal':
            document.getElementById('textOutput').textContent += '.';
            displayValue += '.';
                break;
        case 'plus':
            document.getElementById('textOutput').textContent += ' + ';
            displayValue += ' + ';
            break;
        case 'minus':
            document.getElementById('textOutput').textContent += ' - ';
            displayValue += ' - ';
            break;
        case 'multiply':
            document.getElementById('textOutput').textContent += ' * ';
            displayValue += ' * ';
            break;
        case 'divide':
            document.getElementById('textOutput').textContent += ' / ';
            displayValue += ' / ';
            break;    
        case 'clear':
            
            break;
        case 'delete':
            
            break;
        case 'equal':
            
            break;

    }
});
