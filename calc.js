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

let displayValue = '0';
let num1;
let num2;
let operator;

let buttonMenu = document.querySelector('#buttonMenu');
buttonMenu.addEventListener('click', (event) => {
    let target = event.target;

    const numberButtons = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const numberIndex = numberButtons.indexOf(target.id);
    const operatorButtons = ['plus', 'minus', 'multiply', 'divide'];
    const operatorSymbols = ['+', '-', '*', '/'];
    const operatorIndex = operatorButtons.indexOf(target.id);
    if (numberIndex !== -1) {
        const numberValue = numberIndex.toString();
        if (document.getElementById('topOutput').textContent.includes('=')) {
            document.getElementById('topOutput').textContent = '';
            document.getElementById('bottomOutput').textContent = '';
            displayValue = '';
        }
        if (document.getElementById('bottomOutput').textContent === '0') {
            document.getElementById('bottomOutput').textContent = '';
            displayValue = '';
        }
        document.getElementById('bottomOutput').textContent += numberValue;
        displayValue += numberValue;
    } else if (operatorIndex !== -1) {
        const operatorValue = operatorSymbols[operatorIndex];
        if (document.getElementById('topOutput').textContent.includes('=')) {
            document.getElementById('topOutput').textContent = displayValue +  ' ' + operatorValue + ' ' ;
            operator = operatorValue;
            num1 = +displayValue;
            document.getElementById('bottomOutput').textContent = '0';
        } else if(document.getElementById('topOutput').textContent.includes('+') ||
        document.getElementById('topOutput').textContent.includes('-') ||
        document.getElementById('topOutput').textContent.includes('*') ||
        document.getElementById('topOutput').textContent.includes('/')) {
            num2 = +displayValue;
            displayValue ='0';
            document.getElementById('topOutput').textContent = operate(num1, num2, operator) + ' ' + operatorValue + ' ';
            document.getElementById('bottomOutput').textContent = '0';
            num1 = operate(num1, num2, operator);
            num2 = '0';
            operator = operatorValue;
        } else {
        document.getElementById('topOutput').textContent = displayValue + ' ' + operatorValue + ' ';
        num1 = +displayValue;
        displayValue = '0';
        document.getElementById('bottomOutput').textContent = '0';
        operator = operatorValue;
        }
    } else {
        switch (target.id) {
        case 'decimal':
            if (document.getElementById('topOutput').textContent.includes('=')) {
                document.getElementById('topOutput').textContent = '';
                document.getElementById('bottomOutput').textContent = '0';
                displayValue = '0';
            }
            if(document.getElementById('bottomOutput').textContent.includes('.')) {
                break;
            }
            document.getElementById('bottomOutput').textContent += '.';
            displayValue += '.';
                break;
        
        case 'clear':
            displayValue = '0';
            num1 = undefined;
            num2 = undefined;
            operator = undefined;
            document.getElementById('bottomOutput').textContent = '0';
            document.getElementById('topOutput').textContent = '';
            break;
        case 'delete':
            if (document.getElementById('topOutput').textContent.includes('=')) {
                displayValue = '0';
                num1 = undefined;
                num2 = undefined;
                operator = undefined;
                document.getElementById('bottomOutput').textContent = '0';
                document.getElementById('topOutput').textContent = '';
                break;
            }
            displayValue = displayValue.toString();
            document.getElementById('bottomOutput').textContent = 
            document.getElementById('bottomOutput').textContent.slice(0, -1);
            displayValue = displayValue.slice(0, -1);
            if (document.getElementById('bottomOutput').textContent === '') {
                document.getElementById('bottomOutput').textContent = '0'
            }
            break;
        case 'equal':
            if(document.getElementById('topOutput').textContent.includes('=')) {
                break;
            }
            if (!document.getElementById('topOutput').textContent.includes('+') &&
            !document.getElementById('topOutput').textContent.includes('-') &&
            !document.getElementById('topOutput').textContent.includes('*') &&
            !document.getElementById('topOutput').textContent.includes('/')) {
                break;
            }
            document.getElementById('topOutput').textContent += displayValue + ' = ';
            num2 = +displayValue;
            displayValue = operate(num1, num2, operator);
            document.getElementById('bottomOutput').textContent = operate(num1, num2, operator);
            num1 = operate(num1, num2, operator);
            num2 = '0';
            operator = '';
            break;
        }
    }
});