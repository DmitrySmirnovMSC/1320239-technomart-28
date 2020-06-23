let buyItemModal = document.querySelector("div.buy-item-form-container");
let cart = document.querySelector("a.cart");
let cartCount = document.getElementById("cart-count-ident");
let cartCounter = 0;
let marks = document.querySelector("a.marks");
let marksCount = document.getElementById("marks-count-ident");
let marksCounter = 0;

function buyItemModalOpen(e) {
  e.preventDefault();
  buyItemModal.classList.add("buy-item-form-container-open");
  cartCounter += 1;
  cartCount.innerHTML = cartCounter;
  cart.classList.add("cart-red");
}

function buyItemModalClose(e) {
  e.preventDefault();
  buyItemModal.classList.remove("buy-item-form-container-open");
}

function markIn() {
  marksCounter += 1;
  marksCount.innerHTML = marksCounter;
  marks.classList.add("marks-red");
}