const formItemNodeList = document.querySelectorAll(".form__item");

formItemNodeList.forEach((item) => {
  item.addEventListener("click", handleFormItemClick);
});

function handleFormItemClick({ currentTarget }) {
  formItemNodeList.forEach((item) => {
    // Validate if field is empty
    const currentInput = item.querySelector(".form__input");
    if (currentInput.value.length > 0) return;

    item.classList.remove("form__item--active");
  });
  currentTarget.classList.add("form__item--active");
}
