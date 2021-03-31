"use strict";

function focus() {
  const input = document.querySelector(".input-container");

  document.addEventListener("click", function (e) {
    if (input.contains(e.target)) {
      input.classList.add("focus");
    } else {
      input.classList.remove("focus");
    }
  });
}

focus();
