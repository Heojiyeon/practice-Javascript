const btn = document.getElementById("btn");
const body = document.querySelector("body");
const text = document.getElementById("hex-value");

function handleText() {
    const colors = ["#e57373", "#ba68c8", "#64b5f6", "#81c784", "#fff176"];
    let randomNum = Math.random() * colors.length;
    let currColor = colors[Math.floor(randomNum)];
    body.style.backgroundColor = currColor;
    text.innerText = currColor;
}

btn.addEventListener("click", handleText);