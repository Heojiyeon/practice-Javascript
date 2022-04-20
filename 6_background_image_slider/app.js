const btns = document.querySelectorAll(".btn");
const imgContainer = document.querySelector(".img-container");
let curr = 0;

btns.forEach((btn) => {
  btn.addEventListener("click", function () {
    if (btn.classList.contains("btn-left")) {
      curr -= 1;
      if (curr < 0) curr = curr + 5;

    } else {
      curr += 1;
      if (curr > 4) curr = curr - 5;
    }
    imgContainer.style.backgroundImage = `url(./img/contBcg-${curr}.jpeg)`;
  })
})