const formItemNodeList = document.querySelectorAll(".form__item");

formItemNodeList.forEach((item) =>
  item.addEventListener("focusin", handleItemFocus)
);

function handleItemFocus({ currentTarget }) {
  removeNodeListActiveStyling();
  currentTarget.classList.add("form__item--active");
}

function removeNodeListActiveStyling() {
  formItemNodeList.forEach((item) => {
    const currentInput = item.querySelector(".form__input");
    if (currentInput.value.length > 0) return;
    item.classList.remove("form__item--active");
  });
}
