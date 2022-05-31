const contactBtn = document.querySelector("button");
const modal = document.querySelector(".modal");

document.addEventListener("click", hideForm);
contactBtn.addEventListener("click", displayForm);

function displayForm() {
  modal.classList.toggle("modal--active");
}

function hideForm({ target }) {
  if (modal.contains(target) || target === contactBtn) return;
  modal.classList.remove("modal--active");
}
