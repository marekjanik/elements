"use strict";

function focus() {
  const input = document.querySelectorAll(".input-container");

  document.addEventListener("click", function (e) {
    for (let i = 0; i < input.length; i++) {
      if (input[i].contains(e.target)) {
        input[i].classList.add("focus");
      } else {
        input[i].classList.remove("focus");
      }
    }
  });
}

focus();
