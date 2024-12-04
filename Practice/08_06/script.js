/**
 * Practice: Pass values between functions
 *
 * - Create two functions
 * - Main function creates article element with data from object
 * - Helper function creates.
 */

function createHeadline(text) {
  let headline = document.createElement(text);
  headline.innerHTML = "some text";
  document.querySelector("main").append(headline);
}

createHeadline("h1");
createHeadline("h2");

const createParagraph = function (anotherText) {
  let p = document.createElement("p");
  p.innerHTML = anotherText;
  document.querySelector("main").append(p);
};

createParagraph("lorem ipsum");
createParagraph("even more text");

const createButton = (buttonText, buttonValue) => {
  let button = document.createElement("button");
  button.innerHTML = buttonText;
  button.value = buttonValue;
  document.querySelector("main").append(button);
};

createButton("button1", "value1");
createButton("button2", "value2");
