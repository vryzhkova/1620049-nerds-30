const contactsButton = document.querySelector(".contacts-button");
const modal = document.querySelector(".modal");
const modalCloseButton = document.querySelector(".modal-close");
const nameInput = modal.querySelector("[name=name]");
const emailInput = modal.querySelector("[name=email]");
const textInput = modal.querySelector("[name=text]");
const modalForm = modal.querySelector(".appointment-form");

let isStorageSupport = true;
let name = "";
let email = "";

try {
  name = localStorage.getItem("name");
  email = localStorage.getItem("email");
} catch (err) {
  isStorageSupport = false;
}

contactsButton.addEventListener("click", function (event) {
  event.preventDefault();
  modal.classList.add("modal-show");

  if (name && email) {
    nameInput.value = name;
    emailInput.value = email;
    textInput.focus();
  } else {
    nameInput.focus();
  }
});

modalCloseButton.addEventListener("click", function (event) {
  event.preventDefault();
  modal.classList.remove("modal-show");
  modal.classList.remove("modal-error");
});

modalForm.addEventListener("submit", function (event) {
  if (!nameInput.value || !emailInput.value || !textInput.value) {
    event.preventDefault();
    modal.classList.remove("modal-error");
    modal.offsetWidth = modal.offsetWidth;
    modal.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("name", nameInput.value);
      localStorage.setItem("email", emailInput.value);
    }
  }
});

window.addEventListener("keydown", function (event) {
  if (event.keyCode === 27) {
    if (modal.classList.contains("modal-show")) {
      event.preventDefault();
      modal.classList.remove("modal-show");
      modal.classList.remove("modal-error");
    }
  }
});
