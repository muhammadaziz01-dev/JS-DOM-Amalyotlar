const btn = document.querySelector("#btn");
const inpt = document.querySelector("#input");
const card = document.querySelector(".card");

let arr = [];
function btnC () {
    let pi = document.createElement("p");
    pi.textContent = inpt.value;
    card.appendChild(pi);
    inpt.value=""
};
