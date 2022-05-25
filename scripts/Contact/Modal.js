const body = document.querySelector("body");
const contactBtn = document.querySelector("button");
const modal = document.querySelector(".modal");

body.addEventListener("click", hideForm);
modal.addEventListener("click", modalStopPropagation);
contactBtn.addEventListener("click", displayForm);

function displayForm(event) {
  event.stopPropagation();
  modal.classList.toggle("modal--active");
}

function modalStopPropagation(event) {
  event.stopPropagation();
}

function hideForm() {
  modal.classList.remove("modal--active");
}
