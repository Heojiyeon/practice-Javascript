const form = document.querySelector("form");
const currText = document.querySelector("#message");
const showMsg = document.querySelector(".message-content");
const feedback = document.querySelector(".feedback");

function handleText(e) {
    e.preventDefault();
    let showText = currText.value;
    if (!showText) {
        console.log("nope");
        feedback.style.display = "block";
    }
    else {
        feedback.style.display = "none";
        showMsg.innerText = showText;
        form.reset();
    }
}

form.addEventListener("submit", handleText);