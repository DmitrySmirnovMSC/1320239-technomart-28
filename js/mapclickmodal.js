let mapclickModal = document.querySelector("div.map-click-after");

console.log(mapclickModal);

function mapclickModalOpen(e) {
  e.preventDefault();
  mapclickModal.classList.add("mapclick-open");
}

function mapclickModalClose(e) {
  e.preventDefault();
  mapclickModal.classList.remove("mapclick-open");
}