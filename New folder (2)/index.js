let elCards = document.querySelector(".cards");
let elAddForm = document.querySelector(".addForm");

let products = JSON.parse(localStorage.getItem("products")) || [];

elAddForm.addEventListener("submit", function (e) {
  e.preventDefault();

  let product = {
    name: e.target[0].value,
    price: e.target[1].value,
    img: e.target[2].value,
    
  };

  let obj = products.find((el) => el.name == product.name)

  if(obj){
    alert(`${product.name} allaqachon mavjud`)
  } else {

    products.push(product);

    localStorage.setItem("products", JSON.stringify(products));

    renderData(products)
  }

});

function renderData(data) {
    elCards.innerHTML = ""

   data.forEach((el) => {
    let card = document.createElement("div");
    card.classList.add("card");
    card.style.width = "18rem";

    card.innerHTML += `
    <img src=${el.img} class="card-img-top" alt=${el.name}>
    <div class="card-body">
      <h5 class="card-title">${el.name}</h5>
      <p class="card-text">Narxi: ${el.price}</p>
    </div>
  `;

    elCards.appendChild(card);
  });
}

renderData(products)
