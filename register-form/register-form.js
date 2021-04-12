"use strict";

function validate() {
  if (document.form.name.value === "") {
    alert("Please write your name!");
    document.form.name.focus();
    return false;
  }
  if (document.form.password.value === "") {
    alert("Please write your password!");
    document.form.password.focus();
    return false;
  }
  if (document.form.confirm.value === "") {
    alert("Please confirm your password!");
    document.form.confirm.focus();
    return false;
  }
  if (document.form.email.value === "") {
    alert("Please write your email!");
    document.form.email.focus();
    return false;
  }
  return true;
}
