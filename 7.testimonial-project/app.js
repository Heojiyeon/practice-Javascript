const names = ["WANDA", "TYRELL", "AMY", "SANDY", "JOHN"];
const contents = [
    "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    "If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
    "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
    "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis neque reprehenderit laborum, corporis explicabo assumenda. Porro impedit consectetur animi, reprehenderit recusandae sapiente at aliquam reiciendis modi ipsam rerum suscipit distinctio?"
];

const btns = document.querySelectorAll(".btn");
const customerName = document.querySelector("#customer-name");
const customerImg = document.querySelector("#customer-img");
const customerText = document.querySelector("#customer-text");

let idx = 0;
customerName.innerText = names[idx];

btns.forEach((btn) => {
    btn.addEventListener("click", function () {
        if (btn.classList.contains("nextBtn")) {
            idx++;
            if (idx == names.length) idx = 0;

            customerName.innerText = names[idx];
            customerImg.src = `./img/customer-${idx}.jpg`;
            console.log(customerImg.style.backgroundImage);
            customerText.innerText = contents[idx];
        }
        else if (btn.classList.contains("prevBtn")) {
            idx--;
            if (idx == -1) idx = names.length - 1;
            customerName.innerText = names[idx];
            customerImg.src = `./img/customer-${idx}.jpg`;
            customerText.innerText = contents[idx];
        }
    })
})