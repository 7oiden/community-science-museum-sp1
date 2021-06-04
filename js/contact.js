const form = document.querySelector(".main-form");

const name = document.querySelector("#name");
const email = document.querySelector("#email_2");
const message = document.querySelector("#message");

const success = document.querySelector("#success");

const nameError = document.querySelector("#name-error");
const emailError = document.querySelector("#email_2-error");
const messageError = document.querySelector("#message-error");

function checkInput() {
  if (checkLength(name.value, 4)) {
    nameError.style.visibility = "hidden";
  }
  if (checkLength(message.value, 14)) {
    messageError.style.visibility = "hidden";
  }
  if (validateEmail(email.value) === true) {
    emailError.style.visibility = "hidden";
  }
}

name.addEventListener("keyup", checkInput);
message.addEventListener("keyup", checkInput);
email.addEventListener("keyup", checkInput);

function validateForm(event) {
  event.preventDefault();

  if (checkLength(name.value, 4) === true) {
    nameError.style.visibility = "hidden";
  } else {
    nameError.style.visibility = "visible";
  }
  if (checkLength(message.value, 14) === true) {
    messageError.style.visibility = "hidden";
  } else {
    messageError.style.visibility = "visible";
  }
  if (validateEmail(email.value) === true) {
    emailError.style.visibility = "hidden";
  } else {
    emailError.style.visibility = "visible";
  }
  if (
    checkLength(name.value, 4) === true &&
    checkLength(message.value, 14) === true &&
    validateEmail(email.value) === true
  ) {
    success.style.display = "block";
  }
}

form.addEventListener("submit", validateForm);

function checkLength(value, len) {
  if (value.trim().length > len) {
    return true;
  } else {
    return false;
  }
}

function validateEmail(email) {
  const regEx = /\S+@\S+\.\S+/;
  const patternMatches = regEx.test(email);
  return patternMatches;
}
