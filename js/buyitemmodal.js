let buyItemModal = document.querySelector("div.buy-item-form-container");

function buyItemModalOpen(e) {
  e.preventDefault();
  buyItemModal.classList.add("buy-item-form-container-open");
}

function buyItemModalClose(e) {
  e.preventDefault();
  buyItemModal.classList.remove("buy-item-form-container-open");
}