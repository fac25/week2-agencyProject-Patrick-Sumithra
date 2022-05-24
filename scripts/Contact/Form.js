const formItemNodeList = document.querySelectorAll(".form__item");

formItemNodeList.forEach((item) =>
  item.addEventListener("click", handleFormItemClick)
);

function handleFormItemClick({ currentTarget }) {
  formItemNodeList.forEach((item) =>
    item.classList.remove("form__item--active")
  );
  currentTarget.classList.add("form__item--active");
}
