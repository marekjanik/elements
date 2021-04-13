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
    document.form.password.placeholder = "Password is required.";
    document.form.password.classList.add("error");
    document.addEventListener("click", function () {
      document.form.password.placeholder = "Password";
      document.form.password.classList.remove("error");
    });
    document.form.password.focus();
    return false;
  }

  if (confirmation.value === "") {
    document.form.confirm.placeholder = "Password is required.";
    document.form.confirm.classList.add("error");
    document.addEventListener("click", function () {
      document.form.confirm.placeholder = "Password";
      document.form.confirm.classList.remove("error");
    });
    document.form.confirm.focus();
    return false;
  }

  if (email.value === "") {
    document.form.email.placeholder = "Email is required.";
    document.form.email.classList.add("error");
    document.addEventListener("click", function () {
      document.form.email.placeholder = "Password";
      document.form.email.classList.remove("error");
    });
    document.form.email.focus();
    return false;
  }
  return true;
}
