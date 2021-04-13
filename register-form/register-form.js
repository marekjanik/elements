"use strict";

const username = document.form.name;
const password = document.form.password;
const confirmation = document.form.confirm;
const email = document.form.email;

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
  }
  return true;
}
