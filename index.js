const openButton = document.getElementById("openDialog");
const closeButton = document.getElementById("closeDialog");
const form = document.getElementById("contactForm");
const dialog = document.getElementById("contactDialog");
let lastActive = null;

openButton.addEventListener("click", () => {
  lastActive = document.activeElement;
  dialog.showModal();
  dialog.querySelector("input,select,textarea,button").focus();
  [...form.elements].forEach((el) => (el.value = ""));
});

closeButton.addEventListener("click", () => {
  dialog.close("cancel");
});

form.addEventListener("submit", (e) => {
  [...form.elements].forEach((el) => el.setCustomValidity(""));
  if (!form.checlValidity()) {
    e.preventDefault();
    const email = form.elements.email;
    if (email.validity.typeMismatch) {
      email.setCustomValidity("Введите корректный e-mail");
    }
  }
  e.preventDefault();
  dialog.close("success");
  form.submit();
});

dialog.addEventListener("close", () => {
  lastActive.focus();
});
