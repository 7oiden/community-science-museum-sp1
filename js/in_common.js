// ticket modal
const ticketButton = document.querySelector("#ticket-button");
const ticketModal = document.querySelector("#ticket-modal");
const fadingBackground = document.querySelector(".fading-background");
const navbar = document.querySelector(".navbar");

function ticketDropdown(event) {
  event.stopPropagation();
  if (ticketModal.style.display === "block") {
    ticketModal.style.display = "none";
    fadingBackground.style.display = "none";
    navbar.style.position = "sticky";
    document.body.style.position = "static";
  } else {
    ticketModal.style.display = "block";
    fadingBackground.style.display = "block";
    navbar.style.position = "static";
    document.body.style.position = "fixed";
  }
}

ticketButton.addEventListener("click", ticketDropdown);

function closeTicketDropdown(event) {
  if (
    ticketModal.style.display === "block" &&
    !event.target.matches(".modal") &&
    !event.target.matches(".modal-body") &&
    !event.target.matches(".fa-ticket-alt") &&
    !event.target.matches(".form-block") &&
    !event.target.matches(".modal-header") &&
    !event.target.matches(".modal-heading") &&
    !event.target.matches(".modal-text") &&
    !event.target.matches(".modal-label") &&
    !event.target.matches(".dropdown-form") &&
    !event.target.matches("#select") &&
    !event.target.matches(".modal-button") &&
    !event.target.matches("#date") &&
    !event.target.matches(".option")
  ) {
    ticketModal.style.display = "none";
    fadingBackground.style.display = "none";
    navbar.style.position = "sticky";
    document.body.style.position = "static";
  }
}

document.addEventListener("click", closeTicketDropdown);


// newsletter email validation
function validateEmail(newsletterEmail) {
  const regEx = /\S+@\S+\.\S+/;
  const patternMatches = regEx.test(newsletterEmail);
  return patternMatches;
}

const newsletterError = document.querySelector("#newsletter-error");
const newsletterSuccess = document.querySelector(".newsletter-success");
const newsletterInput = document.querySelector("#newsletter-input");
const newsletterForm = document.querySelector(".newsletter-form");
const signUpButton = document.querySelector("#sign-up-button");

function validateNewsletterForm(event) {
  event.preventDefault();
  event.stopPropagation();

  if (validateEmail(newsletterInput.value) === true) {
    newsletterError.style.display = "none";
  } else {
    newsletterError.style.display = "block";
  }

  if (validateEmail(newsletterInput.value) === true) {
    newsletterSuccess.style.display = "block";

    setTimeout(function () {
      newsletterSuccess.style.display = "none";
    }, 3000);
  }
}

newsletterForm.addEventListener("submit", validateNewsletterForm);

function checkLength(value, len) {
  if (value.trim().length > len) {
    return true;
  } else {
    return false;
  }
}

function validateEmail(newsletterInput) {
  const regEx = /\S+@\S+\.\S+/;
  const patternMatches = regEx.test(newsletterInput);
  return patternMatches;
}
