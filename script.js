let num1 = "";
let num2 = "";
let operator = "";

let numberBtns = document.querySelectorAll(".number");

let operatorBtns = document.querySelectorAll(".operator");
let equalsBtn = document.querySelector(".equals");
let clearBtn = document.querySelector(".clear");
let decimalsBtn = document.querySelector(".decimal");

function disableOperatorBtns() {
  for (btn of operatorBtns) {
    btn.disabled = true;
  }
}

function enableOperatorBtns() {
  for (btn of operatorBtns) {
    btn.disabled = false;
  }
}

function clearContent() {
  display.textContent = "";
  num1 = "";
  num2 = "";
  operator = "";
  disableOperatorBtns();
  equalsBtn.disabled = true;
}

document.addEventListener("DOMContentLoaded", () => {
  equalsBtn.disabled = true;
  decimalsBtn.disabled = true;
  disableOperatorBtns();
});

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
  if (num2 === 0) {
    return "ERROR";
  } else {
    return num1 / num2;
  }
};

buttons.addEventListener("click", (e) => {
  let clickedBtn = e.target;
  if (clickedBtn == clearBtn) {
    clearContent();
  } else if (clickedBtn.classList.contains("operator")) {
    operator = clickedBtn.innerText;
    display.textContent += ` ${operator} `;
    disableOperatorBtns();
    return operator;
  } else if (clickedBtn === decimalsBtn && num2 === "") {
    disableOperatorBtns();
    display.textContent += clickedBtn.innerText;
    num1 += clickedBtn.innerText;
    decimalsBtn.disabled = true;
  } else if (clickedBtn === decimalsBtn && num2 !== "") {
    disableOperatorBtns();
    display.textContent += clickedBtn.innerText;
    num2 += clickedBtn.innerText;
    decimalsBtn.disabled = true;
  } else if (
    clickedBtn.classList.contains("number") &&
    !operator.match(/(\+)|(\-)|(\*)|(\/)/gim)
  ) {
    enableOperatorBtns();
    decimalsBtn.disabled = false;
    display.textContent += clickedBtn.innerText;
    num1 += clickedBtn.innerText;
    num1 = parseFloat(num1);
    console.log(num1);
    return (num1 = parseFloat(num1));
  } else if (
    clickedBtn.classList.contains("number") &&
    operator.match(/(\+)|(\-)|(\*)|(\/)/gim)
  ) {
    enableOperatorBtns();
    decimalsBtn.disabled = false;
    display.textContent += clickedBtn.innerText;
    equalsBtn.disabled = false;
    num2 += clickedBtn.innerText;
    num2 = parseFloat(num2);
    console.log(num2);
    return (num2 = parseFloat(num2));
  } else if (clickedBtn === equalsBtn) {
    let result = operate(num1, num2, operator);
    display.textContent = result;
    console.log(result);
    num1 = result;
    num2 = "";
    operator = "";
    result = "";
  }
});
