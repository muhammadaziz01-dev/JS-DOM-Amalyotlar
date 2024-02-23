
let cardWrapper = document.querySelector(".card--wrapper");
let search = document.querySelector("#search");


// ------------------------test-------




// ----------------------------RANDER STATE DINAMIC CARD---------
function randerState(data) {
    cardWrapper.innerHTML=""
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
           <button id= ${el.numericCode} class="card-btn" >tanlash</button>
        </div>
        `
    
        cardWrapper.appendChild(card)
    })
}

randerState(country);


// ----------------------------SEARCH STATE -----------

search.addEventListener("input",(e)=>{
    let searchData = e.target.value 
    let searchStste = country.filter((el)=> el.name.toLowerCase().includes(searchData.toLowerCase()) );
    randerState(searchStste);
})

//-----------------Render States region-----------------

let arr =[];

let select = document.querySelector("#select");

country.filter((el)=>{
    if(!arr.includes(el.region)){
        arr.push(el.region)
    }
})

arr.forEach((el)=>{
    let option = document.createElement("option");
    option.value = `${el}`
    option.innerHTML= el
    select.appendChild(option);
})

select.addEventListener("change" , (el)=>{
    let selectedRegion = el.target.value;
    let randerRegion = country.filter((el)=> el.region == selectedRegion);
    randerState(randerRegion);
})

//---------------------Rander State Subregion------

let subRegion = [];

let select2 = document.querySelector("#select2");

country.forEach((el)=>{
    if(!subRegion.includes(el.subregion)){
        subRegion.push(el.subregion);
    }
})

subRegion.forEach((el)=>{
    let dataSubRegion = document.createElement("option");
    dataSubRegion.value=el;
    dataSubRegion.innerHTML=el;
    select2.appendChild(dataSubRegion);
})

select2.addEventListener("change",(el)=>{
    let selectSubRegion = el.target.value;
    let renderSubRegion = country.filter((el)=> el.subregion == selectSubRegion);
    randerState(renderSubRegion);
})

//---------------------------Render Population--------

let searchPopulation = document.querySelector("#search-population");
searchPopulation.addEventListener("input", (el) => {
   let selectPopulation = el.target.value;
   let renderPopulation = country.filter((el) => el.population > selectPopulation ||  el.population == selectPopulation);
   randerState(renderPopulation);
});

//--------------------------------CARDLARNI TANLASH ---------
let changStates = JSON.parse(localStorage.getItem("states")) || [];
cardWrapper.addEventListener("click" , (el)=>{
    let id = el.target.id
    // console.log(id);
    let chengCard = country.find((el) => el.numericCode === id);
    changStates = JSON.parse(localStorage.getItem("states")) || [];
    if(!changStates.find((el)=>  el.numericCode === id)){
        changStates.push(chengCard);
        localStorage.setItem("states", JSON.stringify(changStates))
    }else{
        alert("Bu davlat allaqachon tanlangan !!");
    }

})