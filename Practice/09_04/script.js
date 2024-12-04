/**
 * Practice: Play with event listeners
 * - Use an event listener and CSS either inline or through an added class to draw a highlight around the entire grid when you hover over it with your mouse.
 * - Add an event listener to each grid cell to highlight that cell when you hover your mouse over it.
 * - Add an event listener to each grid cell to change its background color when it is clicked.
 * - Add an event listener to a specific key on the keyboard to change the background color of the whole page - from dark to light and back again.
 */

const grid = document.querySelector(".grid");

grid.addEventListener("mouseenter", (event) => {
  grid.style.backgroundColor = "yellow";
});

grid.addEventListener("mouseleave", (event) => {
  grid.style.backgroundColor = "";
});

const cells = document.querySelectorAll(".cell");

cells.forEach((cell) => {
  cell.addEventListener("mouseenter", () => {
    cell.style.border = "1px solid red";
  });

  cell.addEventListener("mouseleave", () => {
    cell.style.border = "";
  });

  cell.addEventListener("click", () => {
    cell.style.backgroundColor = "green";
  });
});

const body = document.querySelector("body");
let darkMode = false;

document.addEventListener("keydown", (event) => {
  if (event.key === "d" || event.key === "D") {
    if (darkMode === true) {
      body.style.backgroundColor = "white";
      darkMode = false;
    } else {
      body.style.backgroundColor = "black";
      darkMode = true;
    }
  }
});
