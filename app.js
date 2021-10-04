const outputArea = document.querySelector('.output');

const resultDisplay = document.querySelector('.current-operand');
const previousNumber = document.querySelector('.previous-operand');

let num1 = 0;
let num2 = 0;
let currOperator ='';


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
        let currDigit = number.innerText;
        console.log(currDigit); 
        resultDisplay.innerText += currDigit;
    })
}

/**
 * When an operator (add,subtact, multiply or divide is pressed)
 */

const operatorPressed = () => {
    num1 = resultDisplay.innerText ;
    console.log(num1);
    previousNumber.innerText = num1;
    resultDisplay.innerText = '';
}


addOperator.addEventListener('click', () => {
    operatorPressed();
    currOperator = 'add';
});

subtractOperator.addEventListener('click', () => {
    operatorPressed();
    currOperator = 'subtract';
});

multiplyOperator.addEventListener('click', () => {
    operatorPressed();
    currOperator = 'multiply';
});

divideOperator.addEventListener('click', () => {
    operatorPressed();
    currOperator = 'divide';
});

equalToButton.addEventListener('click', () => {
    num2 = resultDisplay.innerText;
    console.log(num2);

    switch(currOperator){
        case 'add' :
            resultDisplay.innerText = parseInt(num1)+ parseInt(num2);
            break;
        case 'subtract' :
            resultDisplay.innerText = parseInt(num1) -  parseInt(num2);
            break;
        case 'multiply' :
            resultDisplay.innerText = parseInt(num1) * parseInt(num2);
            break;
        case 'divide' :
            resultDisplay.innerText = parseInt(num1) / parseInt(num2);
            break;
    }

})

allClearButton.addEventListener('click', () => {
    num1 = 0;
    num2 = 0;
    previousNumber.innerText='';
    resultDisplay.innerText='';
})

delButton.addEventListener('click', () => {
    if(num1 !== 0){
        num1 = num1/10;
        resultDisplay.innerText = parseInt(num1);
    }
})

/**
 * !Problems :
 * 1. Delete Button not working in some cases
 * 2. Decimal operations not working
 * 
 * ?Additional Features: Comma Separator
 * 
 * Continue watching from 17:58 on https://youtu.be/j59qQ7YWLxw?t=1067
 * 
 */

