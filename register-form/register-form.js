"use strict";

const username = document.form.name;
const password = document.form.password;
const confirmation = document.form.confirm;
const email = document.form.email;
const checkbox = document.form.checkbox;

const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

function validate() {
  if (username.value === "") {
    username.placeholder = "Username is required.";
    username.classList.add("error");
    document.addEventListener("click", function () {
      username.placeholder = "Username";
      username.classList.remove("error");
    });
    username.focus();
    return false;
  } else {
    if (username.value.length < 6) {
      username.classList.add("error");
      username.focus();
      return false;
    }
  }

  if (password.value === "") {
    password.placeholder = "Password is required.";
    password.classList.add("error");
    document.addEventListener("click", function () {
      password.placeholder = "Password";
      password.classList.remove("error");
    });
    password.focus();
    return false;
  } else {
    if (password.value.length < 6) {
      password.classList.add("error");
      password.focus();
      return false;
    }
  }

  if (confirmation.value === "") {
    confirmation.placeholder = "Password is required.";
    confirmation.classList.add("error");
    document.addEventListener("click", function () {
      confirmation.placeholder = "Confirm Password";
      confirmation.classList.remove("error");
    });
    confirmation.focus();
    return false;
  } else {
    if (confirmation.value !== password.value) {
      confirmation.classList.add("error");
      confirmation.focus();
      return false;
    }
  }

  if (email.value === "") {
    email.placeholder = "Email is required.";
    email.classList.add("error");
    document.addEventListener("click", function () {
      email.placeholder = "Email";
      email.classList.remove("error");
    });
    email.focus();
    return false;
  } else {
    if (!email.value.match(pattern)) {
      email.classList.add("error");
      email.focus();
      return false;
    }
  }

  if (!checkbox.checked) {
    checkbox.classList.add("error");
    checkbox.focus();
    document.addEventListener("click", () => {
      checkbox.classList.remove("error");
    });
    return false;
  }
  return true;
}

function validateUsername() {
  if (username.value.length > 0 && username.value.length < 6) {
    username.setCustomValidity("Username must be at least 6 characters long.");
    username.classList.add("error");
  } else {
    username.setCustomValidity("");
    username.classList.remove("error");
  }
}

function validatePassword() {
  if (password.value.length > 0 && password.value.length < 6) {
    password.setCustomValidity("Password must be at least 6 characters long.");
    password.classList.add("error");
  } else {
    password.setCustomValidity("");
    password.classList.remove("error");
  }
}

function validateConfirmation() {
  if (confirmation.value !== password.value) {
    confirmation.setCustomValidity(
      "Confirm Password and Password must be the same."
    );
    confirmation.classList.add("error");
  } else {
    confirmation.setCustomValidity("");
    confirmation.classList.remove("error");
  }
}

function validateEmail() {
  if (!email.value.match(pattern)) {
    email.setCustomValidity("Email is invalid.");
    email.classList.add("error");
    document.addEventListener("click", () => {
      email.classList.remove("error");
    });
  } else {
    email.setCustomValidity("");
    email.classList.remove("error");
  }
}

username.addEventListener("input", validateUsername);
password.addEventListener("input", validatePassword);
confirmation.addEventListener("input", validateConfirmation);
email.addEventListener("input", validateEmail);
