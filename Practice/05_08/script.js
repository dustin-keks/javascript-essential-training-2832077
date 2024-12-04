/**
 * Note: This file is intentionally empty.
 * You can use it to test your skills at adding, removing, or modifying
 * attributes, classes, and inline styles on elements.
 */

document.querySelector("#pack01 h1").classList.remove("backpack__name");

document.querySelector("h2").classList.add("new-class");

document
  .querySelector("#pack01 li:first-child")
  .setAttribute("data-volume", "30 litres");

const volume = document
  .querySelector("#pack01 li:first-child")
  .getAttribute("data-volume");

console.log(volume);
