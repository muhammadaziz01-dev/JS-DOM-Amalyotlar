let changStates = JSON.parse(localStorage.getItem("states")) || [];

let chengWrapper = document.querySelector(".card--wrapper");

function randerState(data) {
    if(data.length > 0){
        chengWrapper.innerHTML=""
        data.forEach((el)=>{
            let card = document.createElement("div")
            card.classList.add("card")
            card.innerHTML=`
            <div class="card-img">
               <img src="${el.flag}" alt="${el.name}">
            </div>
            <div class="card-titil">
               <h3>${el.name}</h3>
               <p>
                   <span>capital:</span><span>${el.capital}</span>
               </p>
               <p>
                   <span>region:</span><span>${el.region}</span>
               </p>
               <p>
                   <span>population:</span><span>${el.population}</span>
               </p>
               <p>
                   <span>area:</span><span>${el.area}</span>
               </p>
               <p>
                   <span>Numeric Code:</span><span>${el.numericCode}</span>
               </p>
               <p>
                   <span>Calling Code:</span><span>${el.callingCodes}</span>
               </p>
               <button id= ${el.numericCode} class="card-btn">o'chirish</button>
            </div>
            `
        
            chengWrapper.appendChild(card)
        })
    }else {
        chengWrapper.innerHTML="<h1>Hozircha tanlangan davlatlar ro'yhati bittadan oz</h1>"
    }
}

randerState(changStates);

//------------------------------------------------


// chengWrapper.addEventListener("click" , (el)=>{
//     let id = el.target.id
//     let chengData = changStates.find((el)=> el.numericCode == id)
//     console.log(changStates);
//     if(changStates.find((el)=> el.numericCode == id)){
//         changStates.pop(chengData);
//         randerState(changStates)
//     }
// } )