"use strict";
let button = document.querySelector("#toggle");
let navbar = document.querySelector("#links");

function createToggle() {
  navbar.classList.toggle("active");
}

button.addEventListener("click", createToggle);
