const cardTim = document.querySelector(".card--tim");
const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");
const btn3 = document.querySelector("#btn3");

let soniya = 0;


btn1.addEventListener('click' , ()=>{
    const timStart = setInterval (()=>{
        cardTim.innerHTML ="";
        soniya++
        let h1 = document.createElement("h1");
        h1.classList.add("card--tim--titil");
        h1.textContent=`${soniya}`;
        cardTim.appendChild(h1);

        btn3.addEventListener('click' , ()=>{
            h1.textContent=`${soniya = 0}`;
        })
    },1000);
    
    btn2.addEventListener('click' , () => {
        setTimeout(()=>{
            clearTimeout(timStart);
        },100)
    })

} )




// function checBtn1() {
    
    // const timStart = setInterval (()=>{
    //     cardTim.innerHTML ="";
    //     soniya++
    //     let h1 = document.createElement("h1");
    //     h1.classList.add("card--tim--titil");
    //     h1.textContent=`${soniya}`;
    //     cardTim.appendChild(h1);
    // },1000);
    
// };

// function checBtn2()  {
//     setTimeout(() => {
//         clearTimeout(timStart)
//     },)
// }

// function checBtn3() {
//     cardTim.innerHTML =`${soniya = 0}`;  
// }




