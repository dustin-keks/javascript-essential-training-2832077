/**
 * Practice: Making classes and objects
 *
 * - Find a type of object you have more than one of in your house (eg. clothing, writing tools, etc).
 * - Create a class describing this object type - its properties and methods.
 * - Create several objects using the class.
 * - Test the objecs by calling their properties and using their methods in the console.
 */

class Clothing {
  constructor(
    // parameters
    color,
    size,
    material,
    isClean
  ) {
    // properties
    (this.color = color),
      (this.size = size),
      (this.material = material),
      (this.isClean = isClean);
  }

  // methods
  changeColor(newColor) {
    this.color = newColor;
  }
}

const shirt = new Clothing("red", "L", "cotton", true);

const trousers = new Clothing("blue", "M", "denim", false);

const cap = new Clothing("black", "one-size", "leather", true);

console.log("my shirt", shirt);

console.log("my trousers", trousers);

console.log("my cap", cap);

shirt.changeColor("green");

console.log("my green shirt", shirt);
