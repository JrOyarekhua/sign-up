// select elements
const button = document.getElementById("submit-btn");
const inputs = document.querySelectorAll("input");
const form = document.querySelector(".odin-form");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm-password");
const number = document.querySelector("#phone-number");
const firstName = document.querySelector("#first-name");
const lastName = document.querySelector("#last-name");

button.addEventListener("click", (e) => {
  e.preventDefault();

  validateForm();
});

function validateForm() {
  if (!validateFirstName()) {
    return updateFirstNameField();
  } else if (!validateLastName()) {
    return updateLastNameField();
  } else if (!validateEmail()) {
    return updateEmailField();
  } else if (!validateNumber()) {
    return updateNumberField();
  } else if (!validatePassword()) {
    return updatePasswordField();
  } else if (!validateConfirmPassword()) {
    return updateConfirmPasswordField();
  } else {
    form.submit();
  }
}

function validateFirstName() {
  const existingError = document.querySelector(".first-name p");
  if (existingError) {
    existingError.remove();
  }

  const isValid = firstName.value != "";

  if (isValid) {
    firstName.classList.remove("invalid");
  } else {
    firstName.classList.add("invalid");
  }

  return isValid;
}

function validateLastName() {
  const existingError = document.querySelector(".last-name p");
  if (existingError) {
    existingError.remove();
  }

  const isValid = lastName.value != "";

  if (isValid) {
    lastName.classList.remove("invalid");
  } else {
    lastName.classList.add("invalid");
  }

  return isValid;
}

function validatePassword() {
  const existingError = document.querySelector(".password p");
  if (existingError) {
    existingError.remove();
  }

  const isValid = password.value != "";

  if (isValid) {
    password.classList.remove("invalid");
  } else {
    password.classList.add("invalid");
  }

  return isValid;
}

function validateConfirmPassword() {
  const existingError = document.querySelector(".confirm-password p");
  if (existingError) {
    existingError.remove();
  }

  const isValid = password.value == confirmPassword.value;

  if (isValid) {
    confirmPassword.classList.remove("invalid");
  } else {
    confirmPassword.classList.add("invalid");
  }

  return isValid;
}

function validateEmail() {
  const regex = /^[\w._$]+@[\w._$]+\.[\w]{2,}$/gi;

  const existingError = document.querySelector(".email p");

  if (existingError) {
    existingError.remove();
  }

  const isValid = regex.test(email.value);
  console.log("email:", isValid);

  if (isValid) {
    email.classList.remove("invalid");
  } else {
    email.classList.add("invalid");
  }

  return isValid;
}

function validateNumber() {
  const regex = /^[\d\s()-]+$/;

  const existingError = document.querySelector(".phone-number p");
  console.log("existing error:", existingError);
  if (existingError) {
    existingError.remove();
    console.log("the number text is removed");
  }

  const isValid = regex.test(number.value);

  console.log("isValid:", isValid);

  if (isValid) {
    number.classList.remove("invalid");
  } else {
    number.classList.add("invalid");
  }

  console.log(number.classList);
  return isValid;
}

function updatePasswordField() {
  // change the color of the input to red
  // add text under the input fild
  const div = document.querySelector(".password");

  //   creates new p element and adds it to the div
  const text = document.createElement("p");
  text.innerText = "* invalid password";
  div.appendChild(text);
}

function updateConfirmPasswordField() {
  const div = document.querySelector(".confirm-password");
  const text = document.createElement("p");
  text.innerText = "* passwords must be the same";
  div.appendChild(text);
}

function updateEmailField() {
  const div = document.querySelector(".email");
  const text = document.createElement("p");
  text.innerText = "* invalid email";
  div.appendChild(text);
}

function updateNumberField() {
  const div = document.querySelector(".phone-number");
  const text = document.createElement("p");
  text.innerText = "* invalid number";
  div.appendChild(text);
}

function updateFirstNameField() {
  const div = document.querySelector(".first-name");

  const text = document.createElement("p");
  text.innerText = "* required field";
  div.appendChild(text);
}

function updateLastNameField() {
  const div = document.querySelector(".last-name");
  const text = document.createElement("p");
  text.innerText = "* required field";
  div.appendChild(text);
}
