const userInput = document.querySelector('#user-input');
const results = document.querySelector('#results');
const btn = document.querySelectorAll('button');

let firstInputNum = '';
let secondInputNum = '';
let userInputOperator = '';
let resultsArea = false;
let firstNumDecimal = false;
let secondNumDecimal = false;

btn.forEach((item) => {
  item.addEventListener('click', (e) => {
    //FOR ALL CLEAR
    if (e.target.id === 'allclear') {
      userInput.innerText = '';
      results.innerText = '';
      firstInputNum = '';
      secondInputNum = '';
      userInputOperator = '';
      firstNumDecimal = false;
      secondNumDecimal = false;
      resultsArea = false;
    }
    //FOR DIGITS
    else if (e.target.className === 'digits') {
      if (resultsArea) {
        userInput.innerText = '';
        results.innerText = '';
        firstInputNum = '';
        secondInputNum = '';
        userInputOperator = '';
        resultsArea = false;
        firstNumDecimal = false;
        secondNumDecimal = false;
      }
      userInput.innerText += e.target.value;
      if (userInputOperator !== '') {
        secondInputNum += e.target.value;
      }
    }
    //FOR OPERATORS
    else if (e.target.className === 'operators') {
      if (userInputOperator != '') {
      } else {
        firstInputNum = parseFloat(userInput.innerText);
        userInputOperator = e.target.value;
        userInput.innerText += userInputOperator;
      }
    }
    //FOR DECIMAL
    else if (e.target.className === 'decimal') {
      if (!firstNumDecimal) {
        userInput.innerText += e.target.value;
        firstNumDecimal = true;
      } else if (!secondNumDecimal && userInputOperator != '') {
        userInput.innerText += e.target.value;
        secondInputNum += e.target.value;
        secondNumDecimal = true;
      } else {
      }
    }

    //FOR EQUALS BUTTON
    else if (e.target.id === 'equals') {
      if (userInput.innerText == '') {
      } else if (userInputOperator == '/' && secondInputNum == 0) {
        results.innerText = "Can't divide by 0 ";
      } else if (
        operate(firstInputNum, userInputOperator, secondInputNum) % 1 !=
        0
      ) {
        results.innerText = operate(
          firstInputNum,
          userInputOperator,
          secondInputNum
        ).toFixed(2);
        resultsArea = true;
      } else {
        results.innerText = operate(
          firstInputNum,
          userInputOperator,
          secondInputNum
        );
        resultsArea = true;
      }
    }
  });
});

function add(a, b) {
  return parseFloat(a) + parseFloat(b);
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function remainder(a, b) {
  return a % b;
}

function operate(a, operator, b) {
  if (operator == '+') {
    return add(a, b);
  } else if (operator == '-') {
    return subtract(a, b);
  } else if (operator == 'x') {
    return multiply(a, b);
  } else if (operator == '/') {
    return divide(a, b);
  } else if (operator == '%') {
    return remainder(a, b);
  }
}
