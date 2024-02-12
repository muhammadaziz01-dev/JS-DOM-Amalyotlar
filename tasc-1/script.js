// const btn = document.querySelector("#btn");
// const inpt = document.querySelector("#input");
// const card = document.querySelector(".card");

// let arr = [];
// function btnC () {
//     let pi = document.createElement("p");
//     pi.textContent = inpt.value;
//     card.appendChild(pi);
//     inpt.value=""
// };


let str = "ma";

let arr = [
    {
        name: "olma",
        narh: 1200
    },
    {
        name: "mandalin",
        narh: 1200
    },
    {
        name: "limon",
        narh: 1200
    },
];

let nyuwArre = arr.filter((el) => el.name.includes(str));
console.log(nyuwArre);
