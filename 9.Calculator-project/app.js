const screens = document.querySelector(".screen");
const buttons = document.querySelectorAll("button");
let currExpression = '';

function handleScreen(data) {
  const showResult = (result) => screens.setAttribute("value", result);

  if (data == "C") {
    showResult("");
    currExpression = '';
  }
  else if (data == "=") {
    let calResult = calculator(currExpression);
    showResult(calResult);
  }
  else {
    currExpression += data;
    showResult(currExpression);
  }
}

function calculator(currExpression) {
  if (!currExpression) return "please enter a value";
  else return eval(currExpression);
}

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();
    const data = button.getAttributeNode("data-num").value;
    handleScreen(data);
  });
})