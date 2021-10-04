const outputArea = document.querySelector('.output');
const resultDisplay = document.createElement('h2');
resultDisplay.innerText = '';

outputArea.appendChild(resultDisplay);

let num1 = 0;
let num2 = 0;
let currOperator ='';


const numbers = document.querySelectorAll('.number');

const addOperator = document.querySelector('.add');
const subtractOperator = document.querySelector('.subtract');
const multiplyOperator = document.querySelector('.multiply');
const divideOperator = document.querySelector('.divide');

const equalTo = document.querySelector('.equalTo');

//now I have to create on click listeneers for all numbers

for(let number of numbers){
    number.addEventListener('click', () => {
        let currDigit = number.innerText;
        console.log(currDigit); // okay so this is working.

        //now i just need to append this to the result display

        resultDisplay.innerText += currDigit;
    })
}

addOperator.addEventListener('click', () => {
    num1 = resultDisplay.innerText ;
    console.log(num1);
    resultDisplay.innerText = '';
    currOperator = 'add';
});

subtractOperator.addEventListener('click', () => {
    num1 = resultDisplay.innerText ;
    console.log(num1);
    resultDisplay.innerText = '';
    currOperator = 'subtract';
});

multiplyOperator.addEventListener('click', () => {
    num1 = resultDisplay.innerText ;
    console.log(num1);
    resultDisplay.innerText = '';
    currOperator = 'multiply';
});

divideOperator.addEventListener('click', () => {
    num1 = resultDisplay.innerText ;
    console.log(num1);
    resultDisplay.innerText = '';
    currOperator = 'divide';
});

equalTo.addEventListener('click', () => {
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

    

    //now I need to figure out which function to call to display the result
})

