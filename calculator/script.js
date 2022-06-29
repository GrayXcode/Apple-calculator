let button = document.querySelectorAll(".btn");
let screen = document.querySelector(".calculatorScreen");
let clearBtn = document.querySelector(".clear-btn");
let answerBtn = document.querySelector(".answer-btn");
// let minusBtn = document.querySelector(".minus-btn");
// let addBtn = document.querySelector(".add-btn");
// let divisionBtn = document.querySelector(".division-btn");
// let percentBtn = document.querySelector(".percent-btn");

let stack = [];
let operators = ["/", "x", "-", "+", "%"];
let currentValue = 0;
let n = 0;

button.forEach((btn) => btn.addEventListener("click", (e) => storeValue(e)));

const calculateValue = (leftOp, operator, rightOp) => {
  switch (operator) {
    case "+":
      return leftOp + rightOp;
    case "-":
      return leftOp - rightOp;
    case "/":
      return leftOp / rightOp;
    case "x":
      return leftOp * rightOp;
    default:
      return "ERROR";
  }
};

// minusBtn.addEventListener("click", () => {});
// addBtn.addEventListener("click", () => {});
// divisionBtn.addEventListener("click", () => {});
// percentBtn.addEventListener("click", () => {});
clearBtn.addEventListener("click", () => {
  screen.innerHTML = 0;
  stack = [];
  currentValue = 0;
});

answerBtn.addEventListener("click", () => {
  let leftOperand, rightOperand, operator;
  stack.push(currentValue);

  rightOperand = stack.pop();
  operator = stack.pop();
  leftOperand = stack.pop();

  let value = calculateValue(leftOperand, operator, rightOperand);

  stack.unshift(value);
  screen.innerHTML = value;
});

function storeValue(e) {
  if (operators.includes(e.target.innerHTML)) {
    stack.push(currentValue);
    stack.push(e.target.innerHTML);
    screen.innerHTML = e.target.innerHTML;
    currentValue = n = 0;
  } else {
    if (n >= 1) {
      currentValue = currentValue * 10 + Number(e.target.innerHTML);
    } else {
      currentValue += Number(e.target.innerHTML);
      ++n;
    }
  }
  console.log(stack);
  screen.innerHTML = currentValue;
}
