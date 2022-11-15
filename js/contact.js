const form = document.querySelector("#contact-form");
const name = document.querySelector("#name");
const email = document.querySelector("#email_2");
const message = document.querySelector("#message");
const success = document.querySelector("#success");
const nameError = document.querySelector("#name-error");
const emailError = document.querySelector("#email_2-error");
const messageError = document.querySelector("#message-error");

function checkInput() {
  if (checkLength(name.value, 4)) {
    nameError.style.display = "none";
  }
  if (checkLength(message.value, 14)) {
    messageError.style.display = "none";
  }
  if (validateEmail(email.value) === true) {
    emailError.style.display = "none";
  }
}

name.addEventListener("keyup", checkInput);
message.addEventListener("keyup", checkInput);
email.addEventListener("keyup", checkInput);

function validateForm(event) {
  event.preventDefault();

  if (checkLength(name.value, 4) === true) {
    nameError.style.display = "none";
  } else {
    nameError.style.display = "block";
  }
  if (checkLength(message.value, 14) === true) {
    messageError.style.display = "none";
  } else {
    messageError.style.display = "block";
  }
  if (validateEmail(email.value) === true) {
    emailError.style.display = "none";
  } else {
    emailError.style.display = "block";
  }
  if (
    checkLength(name.value, 4) === true &&
    checkLength(message.value, 14) === true &&
    validateEmail(email.value) === true
  ) {
    success.style.display = "block";

    setTimeout(function () {
      success.style.display = "none";
    }, 3000);
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
