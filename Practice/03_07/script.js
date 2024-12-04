/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */

const waterBottle = {
  size: "0,7 litre",
  liquid: "water",
  cap: {
    color: "black",
  },
};

console.log("my bottle of water", waterBottle);
console.log("color of the cap", waterBottle.cap);
