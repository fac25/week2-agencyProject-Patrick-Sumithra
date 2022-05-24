const contactBtn = document.querySelector("button");
const modal = document.querySelector(".modal");

contactBtn.addEventListener("click", displayForm);

function displayForm() {
  modal.classList.toggle("modal--active");
}
