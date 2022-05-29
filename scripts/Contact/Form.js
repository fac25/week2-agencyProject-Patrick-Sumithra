const formItemNodeList = document.querySelectorAll(".form__item");

formItemNodeList.forEach((item) => {
  item.addEventListener("click", handleFormItemClick);
  item.addEventListener("invalid", emulateClick);
});

function handleFormItemClick({ currentTarget }) {
  const currentInput = currentTarget.querySelector(".form__input");
  clearInputStyling();
  currentTarget.classList.add("form__item--active");
  currentInput.focus();
}

function clearInputStyling() {
  formItemNodeList.forEach((item) => {
    const currentInput = item.querySelector(".form__input");
    if (currentInput.value.length > 0) return;
    item.classList.remove("form__item--active");
  });
}

function emulateClick({ currentTarget }) {
  console.log("focused");
  currentTarget.click();
}
