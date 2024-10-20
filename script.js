let num1;
let num2;
let operator;
let displayValue = "";

function operate(num1, num2, operator) {
  switch (operator) {
    case "+":
      return add(num1, num2);
    case "-":
      return subtract(num1, num2);
    case "*":
      return multiply(num1, num2);
    case "/":
      return divide(num1, num2);
  }
}

const add = function (num1, num2) {
  return num1 + num2;
};

const subtract = function (num1, num2) {
  return num1 - num2;
};

const multiply = function (num1, num2) {
  return num1 * num2;
};

const divide = function (num1, num2) {
  return num1 / num2;
};

buttons.addEventListener("click", (e) => {
  let target = e.target;
  if (target.classList.contains("clear")) {
    display.textContent = "";
    num1 = "";
    num2 = "";
    operator = "";
  } else if (target.classList.contains("number") && operator == undefined) {
    displayValue += target.textContent.toString();
    display.textContent = displayValue;
    return (num1 = Number(displayValue));
  } else if (target.classList.contains("number") && operator !== undefined) {
    displayValue = "";
    displayValue += target.textContent.toString();
    display.textContent += displayValue;
    return (num2 = Number(displayValue));
  } else if (target.classList.contains("operator")) {
    operator = target.textContent.toString();
    display.textContent += ` ${operator} `;
    return operator;
  } else if (target.classList.contains("operate")) {
    let result = operate(num1, num2, operator);
    display.textContent = result;
    num1 = result;
    num2 = "";
    operator = "";
  }
});

console.log(operate(1, 2, "+"));
console.log(operate(1, 2, "-"));
console.log(operate(1, 2, "*"));
console.log(operate(1, 2, "/"));
