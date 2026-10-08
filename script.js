const button = document.querySelector("#party");

button.addEventListener("click", function () {
  console.log("party!");
});

// greet.js
export function greet(name) {
  return "Hello, " + name;
}

// script.js
import { greet } from "./greet.js";
console.log(greet("Maya"));

import confetti from "canvas-confetti";
const button = document.querySelector("#party");
button.addEventListener("click", function () {
  confetti();
});
