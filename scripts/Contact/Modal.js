const contactBtn = document.querySelector("button");
const modal = document.querySelector(".modal");

document.addEventListener("click", hideForm);
contactBtn.addEventListener("click", displayForm);

function displayForm() {
  modal.classList.toggle("modal--active");
}

function hideForm({ target }) {
  // Guard clause added to prevent the class from being removed when the modal or button is clicked
  if (modal.contains(target) || target === contactBtn) return;
  modal.classList.remove("modal--active");
}
