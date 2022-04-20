// const prevBtn = document.querySelector(".prevBtn");
// const nextBtn = document.querySelector(".nextBtn");
// const counterContent = document.querySelector("#counter");

// let result = 1 * counterContent.innerText;

// function showResult(result) {
//   if (result > 0) counterContent.style.color = "#7fb800";
//   else if (result < 0) counterContent.style.color = "red";
//   else counterContent.style.color = "#333333";
//   counterContent.innerText = result;
// }

// function handleLower() {
//   result -= 1;
//   showResult(result);
// }

// function handleAdd() {
//   result = result + 1;
//   showResult(result);
// }

// prevBtn.addEventListener("click", handleLower);
// nextBtn.addEventListener("click", handleAdd);


const btns = document.querySelectorAll(".btn");
const counter = document.querySelector("#counter");
let result = counter.innerText * 1;

btns.forEach((btn) => {
  btn.addEventListener("click", function () {
    if (btn.classList.contains('prevBtn')) {
      result -= 1;
    }
    else {
      result += 1;
    }

    if (result < 0) counter.style.color = "red";
    else if (result > 0) counter.style.color = "green";
    else counter.style.color = "#333333";
    counter.innerText = result;
  })
})