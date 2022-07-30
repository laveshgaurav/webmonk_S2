"use strict";

// console.log(document.getElementById("para_id"));

// function changeText() {
//   let elements = document.getElementsByClassName("para_class");
//   for (let i = 0; i < elements.length; i++) {
//     elements[i].style.color = "red";
//   }
// }

// document.getElementById("btn").addEventListener("click", changeText);

// console.log(document.querySelector(".master"));

// console.log(document.querySelectorAll(".master"));

// document.getElementById("btn").addEventListener("click", createElement);

// var counter = 0;
// function createElement() {
//   const new_element = document.createElement("p");
//   new_element.innerHTML = `New Element ${counter}`;
//   //   console.log(new_element);
//   document.getElementById("parent").appendChild(new_element);
//   counter = counter + 1;
// }

// document.getElementById("btn2").addEventListener("click", function () {
//   document.getElementById("btn").classList.toggle("btn-danger");
// });

let user = {
  first_name: "",
  last_name: "",
  age: "",
};

let userList = [];

let formElements = document.querySelectorAll("input");
for (let i = 0; i < formElements.length; i++) {
  formElements[i].addEventListener("keyup", function (e) {
    user[e.target.name] = e.target.value;
  });
}

function submitForm() {
  console.log("USER", user);
}

document.getElementById("submit").addEventListener("click", submitForm);
