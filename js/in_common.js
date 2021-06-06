const searchIcon = document.querySelector(".fa-search");
const ticketIcon = document.querySelector(".fa-ticket-alt");
const profileIcon = document.querySelector(".fa-user-circle");

const searchDropdow = document.querySelector(".search-dropdown");
const ticketDropdow = document.querySelector(".ticket-dropdown");
const profileDropdow = document.querySelector(".profile-dropdown");

const fadingBackground = document.querySelector(".fading-background_1");

function searchDropdown() {
  if (searchDropdow.style.display === "block") {
    searchDropdow.style.display = "none";
    fadingBackground.style.display = "none";
    document.body.style.position = "static";
    document.body.style.paddingRight = 0;
    searchIcon.style.scale = null;
    ticketIcon.style.scale = null;
    profileIcon.style.scale = null;
  } else {
    searchDropdow.style.display = "block";
    ticketDropdow.style.display = "none";
    profileDropdow.style.display = "none";
    fadingBackground.style.display = "block";
    document.body.style.position = "fixed";
    document.body.style.paddingRight = "17px";
    profileIcon.style.paddingLeft = "1px";
    searchIcon.style.scale = "1.2";
    ticketIcon.style.scale = null;
    profileIcon.style.scale = null;
  }
}

console.log(searchDropdown);

function ticketDropdown() {
  if (ticketDropdow.style.display === "block") {
    ticketDropdow.style.display = "none";
    fadingBackground.style.display = "none";
    document.body.style.position = "static";
    document.body.style.paddingRight = 0;
    searchIcon.style.scale = null;
    ticketIcon.style.scale = null;
    profileIcon.style.scale = null;
  } else {
    searchDropdow.style.display = "none";
    ticketDropdow.style.display = "block";
    profileDropdow.style.display = "none";
    fadingBackground.style.display = "block";
    document.body.style.position = "fixed";
    document.body.style.paddingRight = "17px";
    profileIcon.style.paddingLeft = "1px";
    searchIcon.style.scale = null;
    ticketIcon.style.scale = "1.2";
    profileIcon.style.scale = null;
  }
}

function profileDropdown() {
  if (profileDropdow.style.display === "block") {
    profileDropdow.style.display = "none";
    fadingBackground.style.display = "none";
    document.body.style.position = "static";
    document.body.style.paddingRight = 0;
    searchIcon.style.scale = null;
    ticketIcon.style.scale = null;
    profileIcon.style.scale = null;
  } else {
    searchDropdow.style.display = "none";
    ticketDropdow.style.display = "none";
    profileDropdow.style.display = "block";
    fadingBackground.style.display = "block";
    document.body.style.position = "fixed";
    document.body.style.paddingRight = "17px";
    profileIcon.style.paddingLeft = "1px";
    searchIcon.style.scale = null;
    ticketIcon.style.scale = null;
    profileIcon.style.scale = "1.2";
  }
}

searchIcon.addEventListener("click", searchDropdown);
ticketIcon.addEventListener("click", ticketDropdown);
profileIcon.addEventListener("click", profileDropdown);

function closeSearchDropdown(event) {
  if (
    searchDropdow.style.display === "block" &&
    !event.target.matches(".search-dropdown") &&
    !event.target.matches(".fa-search") &&
    !event.target.matches(".search-header") &&
    !event.target.matches(".dropdown-text") &&
    !event.target.matches(".dropdown-form") &&
    !event.target.matches(".box") &&
    !event.target.matches(".label")
  ) {
    searchDropdow.style.display = "none";
    fadingBackground.style.display = "none";
    searchIcon.style.scale = null;
    document.body.style.position = "static";
    document.body.style.paddingRight = 0;
  }
}

document.addEventListener("click", closeSearchDropdown);

function closeTicketDropdown(event) {
  if (
    ticketDropdow.style.display === "block" &&
    !event.target.matches(".ticket-dropdown") &&
    !event.target.matches(".fa-ticket-alt") &&
    !event.target.matches(".ticket-header") &&
    !event.target.matches(".dropdown-text") &&
    !event.target.matches(".dropdown-form") &&
    !event.target.matches("#select") &&
    !event.target.matches(".ticket-label") &&
    !event.target.matches(".ticket") &&
    !event.target.matches(".option")
  ) {
    ticketDropdow.style.display = "none";
    fadingBackground.style.display = "none";
    ticketIcon.style.scale = null;
    document.body.style.position = "static";
    document.body.style.paddingRight = 0;
  }
}

document.addEventListener("click", closeTicketDropdown);

function closeProfileDropdown(event) {
  if (
    profileDropdow.style.display === "block" &&
    !event.target.matches(".profile-dropdown") &&
    !event.target.matches(".fa-user-circle") &&
    !event.target.matches(".profile-header") &&
    !event.target.matches(".dropdown-text") &&
    !event.target.matches(".dropdown-form") &&
    !event.target.matches(".label") &&
    !event.target.matches(".label_2") &&
    !event.target.matches(".box") &&
    !event.target.matches(".profile") &&
    !event.target.matches(".error-message")
  ) {
    profileDropdow.style.display = "none";
    fadingBackground.style.display = "none";
    profileIcon.style.scale = null;
    document.body.style.position = "static";
    document.body.style.paddingRight = 0;
  }
}

document.addEventListener("click", closeProfileDropdown);

const profileButton = document.querySelector("#profile-submit-button");
const dropdownForm = document.querySelector("#profile-form");
const dropdownEmail = document.querySelector("#dropdown-email");
const dropdownPassword = document.querySelector("#dropdown-password");

const profileEmailError = document.querySelector("#profile-email-error");
const profilePasswordError = document.querySelector("#profile-password-error");
const loginMessage = document.querySelector("#success-message");

function checkInput() {
  if (validateEmail(dropdownEmail.value)) {
    profileEmailError.style.visibility = "hidden";
  } else {
    profileEmailError.style.visibility = "visible";
  }
  if (checkLength(dropdownPassword.value, 4)) {
    profilePasswordError.style.visibility = "hidden";
  } else {
    profilePasswordError.style.visibility = "visible";
  }
}

dropdownEmail.addEventListener("keyup", checkInput);
dropdownPassword.addEventListener("keyup", checkInput);

function validateProfileForm(event) {
  event.preventDefault();
  event.stopPropagation();

  if (validateEmail(dropdownEmail.value)) {
    profileEmailError.style.visibility = "hidden";
  } else {
    profileEmailError.style.visibility = "visible";
  }
  if (checkLength(dropdownPassword.value, 4)) {
    profilePasswordError.style.visibility = "hidden";
  } else {
    profilePasswordError.style.visibility = "visible";
  }
  if (
    validateEmail(dropdownEmail.value) === true &&
    checkLength(dropdownPassword.value, 4) === true
  ) {
    loginMessage.style.visibility = "visible";
  } else {
    loginMessage.style.visibility = "hidden";
  }
}

dropdownForm.addEventListener("submit", validateProfileForm);

function checkLength(value, len) {
  if (value.trim().length > len) {
    return true;
  } else {
    return false;
  }
}

function validateEmail(newsletterEmail) {
  const regEx = /\S+@\S+\.\S+/;
  const patternMatches = regEx.test(newsletterEmail);
  return patternMatches;
}

//const dropdownContent = document.querySelector(".dropdown-info");
const infoWrapper = document.querySelectorAll(".info-wrapper");
const fadingBackground2 = document.querySelector(".fading-background_2");

const exhibitionWrapper = document.querySelector("#exhibition-wrapper");
const exploreWrapper = document.querySelector("#explore-wrapper");
const getInvolvedWrapper = document.querySelector("#get-involved-wrapper");
const visitWrapper = document.querySelector("#visit-wrapper");

const exhibitions = document.querySelector("#exhibitions-dropdown");
const explore = document.querySelector("#explore-dropdown");
const getInvolved = document.querySelector("#get-involved-dropdown");
const visit = document.querySelector("#visit-dropdown");

const linkBox1 = document.querySelector(".link-box1");
const linkBox2 = document.querySelector(".link-box2");
const linkBox3 = document.querySelector(".link-box3");
const linkBox4 = document.querySelector(".link-box4");

console.log(exhibitions);

function exhibitionDropdown() {
  let timer = setTimeout(function () {
    exhibitions.classList.add("show-info");
    fadingBackground2.classList.add("fb-show");
    linkBox1.classList.add("purple-box");
    fadingBackground2.style.zIndex = "40";
    linkBox2.classList.remove("purple-box");
    linkBox3.classList.remove("purple-box");
    linkBox4.classList.remove("purple-box");
    explore.classList.remove("show-info");
    getInvolved.classList.remove("show-info");
    visit.classList.remove("show-info");
    document.body.style.position = "static";
    document.body.style.paddingRight = 0;
  }, 700);
  function exhibitionDropdownStop() {
    clearTimeout(timer);
  }
  exhibitionWrapper.addEventListener("mouseleave", exhibitionDropdownStop);
}

function exploreDropdown() {
  let timer = setTimeout(function () {
    explore.classList.add("show-info");
    fadingBackground2.classList.add("fb-show");
    linkBox2.classList.add("purple-box");
    linkBox1.classList.remove("purple-box");
    linkBox3.classList.remove("purple-box");
    linkBox4.classList.remove("purple-box");
    exhibitions.classList.remove("show-info");
    getInvolved.classList.remove("show-info");
    visit.classList.remove("show-info");
    document.body.style.position = "static";
    document.body.style.paddingRight = 0;
  }, 700);
  function exhibitionDropdownStop() {
    clearTimeout(timer);
  }
  exploreWrapper.addEventListener("mouseleave", exhibitionDropdownStop);
}

function getInvolvedDropdown() {
  let timer = setTimeout(function () {
    getInvolved.classList.add("show-info");
    fadingBackground2.classList.add("fb-show");
    linkBox3.classList.add("purple-box");
    linkBox1.classList.remove("purple-box");
    linkBox2.classList.remove("purple-box");
    linkBox4.classList.remove("purple-box");
    explore.classList.remove("show-info");
    exhibitions.classList.remove("show-info");
    visit.classList.remove("show-info");
    document.body.style.position = "static";
    document.body.style.paddingRight = 0;
  }, 700);
  function exhibitionDropdownStop() {
    clearTimeout(timer);
  }
  getInvolvedWrapper.addEventListener("mouseleave", exhibitionDropdownStop);
}

function visitDropdown() {
  let timer = setTimeout(function () {
    visit.classList.add("show-info");
    fadingBackground2.classList.add("fb-show");
    linkBox4.classList.add("purple-box");
    linkBox1.classList.remove("purple-box");
    linkBox2.classList.remove("purple-box");
    linkBox3.classList.remove("purple-box");
    explore.classList.remove("show-info");
    getInvolved.classList.remove("show-info");
    exhibitions.classList.remove("show-info");
    document.body.style.position = "static";
    document.body.style.paddingRight = 0;
  }, 700);
  function exhibitionDropdownStop() {
    clearTimeout(timer);
  }
  visitWrapper.addEventListener("mouseleave", exhibitionDropdownStop);
}

exhibitionWrapper.addEventListener("mouseover", exhibitionDropdown);
exploreWrapper.addEventListener("mouseover", exploreDropdown);
getInvolvedWrapper.addEventListener("mouseover", getInvolvedDropdown);
visitWrapper.addEventListener("mouseover", visitDropdown);

function closeExhibitionDropdown(event) {
  setTimeout(function () {
    if (
      exhibitions.classList.contains("show-info") &&
      !event.target.matches(".exhibitionWrapper")
    ) {
      exhibitions.classList.remove("show-info");
      fadingBackground2.classList.remove("fb-show");
      linkBox1.classList.remove("purple-box");
    }
  }, 700);
}

document.addEventListener("mouseout", closeExhibitionDropdown);

function closeExploreDropdown(event) {
  setTimeout(function () {
    if (
      explore.classList.contains("show-info") &&
      !event.target.matches(".exploreWrapper")
    ) {
      explore.classList.remove("show-info");
      fadingBackground2.classList.remove("fb-show");
      linkBox2.classList.remove("purple-box");
    }
  }, 700);
}

document.addEventListener("mouseout", closeExploreDropdown);

function closeGetInvolvedDropdown(event) {
  setTimeout(function () {
    if (
      getInvolved.classList.contains("show-info") &&
      !event.target.matches(".getInvolvedWrapper")
    ) {
      getInvolved.classList.remove("show-info");
      fadingBackground2.classList.remove("fb-show");
      linkBox3.classList.remove("purple-box");
    }
  }, 700);
}

document.addEventListener("mouseout", closeGetInvolvedDropdown);

function closeVisitDropdown(event) {
  setTimeout(function () {
    if (
      visit.classList.contains("show-info") &&
      !event.target.matches(".visitWrapper")
    ) {
      visit.classList.remove("show-info");
      fadingBackground2.classList.remove("fb-show");
      linkBox4.classList.remove("purple-box");
    }
  }, 700);
}

document.addEventListener("mouseout", closeVisitDropdown);


const newsletterError = document.querySelector("#newsletter-error");
const newsletterSuccess = document.querySelector(".newsletter-success");
const newsletterInput = document.querySelector("#newsletter");
const newsletterForm = document.querySelector(".newsletter");
const signUpButton = document.querySelector("#sign-up");

function validateNewsletterForm(event) {
  event.preventDefault();
  event.stopPropagation();

  if (validateEmail(newsletterInput.value)) {
    newsletterError.style.visibility = "hidden";
  } else {
    newsletterError.style.visibility = "visible";
  }

  setTimeout(function () {
    if (validateEmail(newsletterInput.value) === true) {
      newsletterSuccess.style.display = "block";
    } else {
      newsletterSuccess.style.display = "none";
    }
  }, 700);
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
