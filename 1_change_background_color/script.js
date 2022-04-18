const colors = ["#ee98fb", "#ffcdd2", "#1565c0", "#ff6f60", "#43a047"];
const btn = document.querySelector("button");
const body = document.querySelector("body");
const LENGTH = colors.length;

function handleBackgroundColor() {
    let randomNum = Math.floor(Math.random() * LENGTH);
    let currColor = colors[randomNum];
    body.style.backgroundColor = currColor;
}

btn.addEventListener("click", handleBackgroundColor);