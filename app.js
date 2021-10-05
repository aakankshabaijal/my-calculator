const resultDisplay = document.querySelector('.current-operand');
const previousNumber = document.querySelector('.previous-operand');

let num1 = 0;
let num2 = 0;
let currOperator =undefined;

const numbers = document.querySelectorAll('.number');

const addOperator = document.querySelector('.add');
const subtractOperator = document.querySelector('.subtract');
const multiplyOperator = document.querySelector('.multiply');
const divideOperator = document.querySelector('.divide');

const equalToButton = document.querySelector('.equalTo');
const allClearButton = document.querySelector('.allClear');
const delButton = document.querySelector('.del');


for(let number of numbers){
    number.addEventListener('click', () => {
        let currDigit = number.innerText; //this gives us the current digit in string format
        //we can allow only one decimal point in a number
        if(currDigit === '.' && resultDisplay.innerText.includes('.')){
            return;
        }
        resultDisplay.innerText += currDigit; //this allows us to append the current digit        
    });
};

const operatorPressed = () => {
    num1 = resultDisplay.innerText ;
    previousNumber.innerText = num1;

    switch(currOperator){
        case 'add':
            previousNumber.innerText+=' +';
            break;
        case 'subtract':
            previousNumber.innerText+=' -';
            break;
        case 'multiply':
            previousNumber.innerText+=' ×';
            break;
        case 'divide':
            previousNumber.innerText+=' ÷';
            break;
        default:
            return;
    }
    resultDisplay.innerText = '';
}


addOperator.addEventListener('click', () => {
    if(resultDisplay.innerText === '')
        return;
    currOperator = 'add';
    operatorPressed();
});

subtractOperator.addEventListener('click', () => {
    if(resultDisplay.innerText === '')
        return;
    currOperator = 'subtract';
    operatorPressed();
});

multiplyOperator.addEventListener('click', () => {
    if(resultDisplay.innerText === '')
        return;
    currOperator = 'multiply';
    operatorPressed();
});

divideOperator.addEventListener('click', () => {
    if(resultDisplay.innerText === '')
        return;
    currOperator = 'divide';
    operatorPressed();
});

equalToButton.addEventListener('click', () => {
    if(resultDisplay.innerText === '')
        return;
    num2 = resultDisplay.innerText;
    let result = 0;

    switch(currOperator){
        case 'add' :
            result = eval(num1 + '+' + num2);
            previousNumber.innerText = `${num1} + ${num2} = `;            
            break;

        case 'subtract' :
            result = eval(num1 + '-' + num2);
            previousNumber.innerText = `${num1} - ${num2} = `;      
            break;

        case 'multiply' :
            result = eval(num1 + '*' + num2);
            previousNumber.innerText = `${num1} × ${num2} = `;
            break;

        case 'divide' :
            result = eval(num1 + '/' + num2);
            previousNumber.innerText = `${num1} ÷ ${num2} = `;
            break;

        default:
            return;
    }

    if(result.toString().includes('.'))
    {
        let index = result.toString().indexOf('.');
        if(result.toString().length - index > 5)
            result = result.toFixed(2); //to handle 0.1 + 0.2 = 0.300000004 in JS
    }
        
    resultDisplay.innerText = result;
});

allClearButton.addEventListener('click', () => {
    num1 = 0;
    num2 = 0;
    previousNumber.innerText='';
    resultDisplay.innerText='';
    currOperator = undefined;
});

delButton.addEventListener('click', () => {
    let curr = resultDisplay.innerText;
    curr = curr.slice(0,curr.length-1);    
    resultDisplay.innerText = curr;    
});

/**
 * !Decimal operations not working (0.1 + 0.2 = 0.30000000004) according to JS * 
 * ?Additional Features: Comma Separator *  
 */

