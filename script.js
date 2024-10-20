let num1;
let num2;
let operator;

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

let displayValue = "";
buttons.addEventListener("click", (event) => {
  let target = event.target;
  if (target.classList.contains("number")) {
    displayValue += target.textContent.toString();
    //console.log(displayValue);
    display.textContent = displayValue;
    return displayValue;
  } else {
    console.log(target.classList);
  }
});

console.log(operate(1, 2, "+"));
console.log(operate(1, 2, "-"));
console.log(operate(1, 2, "*"));
console.log(operate(1, 2, "/"));
