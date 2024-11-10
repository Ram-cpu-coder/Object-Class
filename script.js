// Here are some beginner exercises for practicing objects and classes in JavaScript. These exercises will help you get comfortable with object properties, methods, and using classes.
// =================================================================================================================

//Part 1: Working with Objects

//Exercise 1: Basic Object Creation
// 1. Create an object called `person` with the following properties:
//    - `name` (a string)
//    - `age` (a number)
//    - `isStudent` (a boolean)
// 2. Add a method to the `person` object called `introduce` that logs a message like `"Hi, my name is [name] and I am [age] years old."`
// 3. Test the `introduce` method by calling it.

// const person = {
//   name: "Ram",
//   age: 23,
//   isStudent: true,
//   introduce() {
//     return `Hi, my name is ${this.name} and I am ${this.age} years old.`;
//   },
// };
// console.log(person.introduce());
// // =================================================================================================================

//Exercise 2: Updating and Accessing Properties
// 1. Add a new property `hobbies` to the `person` object, which should be an array of three hobbies.
// 2. Write a function called `addHobby` that adds a new hobby to the `hobbies` array.
// 3. Write another function `listHobbies` that logs each hobby from the `hobbies` array.
// person.hobbies = ["writing", "singing", "dancing"];
// console.log(person);

// const addHobby = (obj, property, tobeAdded) => {
//   obj[property].push(tobeAdded);
//   return `${property} has been updated`;
// };

// console.log(addHobby(person, "hobbies", "studying"));

// const listHobbies = (arr, obj) => {
//   obj[arr].forEach((item) => {
//     console.log(item);
//   });
// };
// listHobbies("hobbies", person);

// // =================================================================================================================

// //Exercise 3: Nested Objects
// // 1. Add an `address` property to the `person` object, which is an object with properties `street`, `city`, and `zipCode`.
// // 2. Write a method `getAddress` that returns the full address as a single string, e.g., `"123 Main St, Springfield, 12345"`.

// person.address = {
//   street: "Everton",
//   city: "Sydney",
//   zipcode: 2135,
// };

// console.log(person);

// person.getAddress = () => {
//   return `${person.address.street}, ${person.address.city}, ${person.address.zipcode}`;
// };
// console.log(person.getAddress());

// =================================================================================================================

//Exercise 4: Object Iteration
// 1. Write a function `displayObject` that takes any object as an argument and logs all of its properties and their values.
// 2. Test `displayObject` with the `person` object.

// const displayObject = (obj) => {
//   for (let i = 0; obj.length - 1; i++) {
//     console.log(obj);
//   }
// };

// console.log(displayObject(person));
// =================================================================================================================
//Part 2: Working with Classes

// =================================================================================================================

//Exercise 5: Basic Class Creation
// 1. Create a class called `Animal` with the following properties in the constructor:
//    - `name`
//    - `species`
//    - `age`
// 2. Add a method called `describe` that logs a message like `"This is a [species] named [name] and it is [age] years old."`
// 3. Create an instance of `Animal` (e.g., a dog or a cat) and call the `describe` method.

class Animal {
  constructor(name, species, age) {
    this.name = name;
    this.species = species;
    this.age = age;
  }
  describe() {
    return `This is a ${this.species} named ${this.name} and it is ${this.age} years old.`;
  }
}

const Dog = new Animal("Leo", "Dog", 2);
console.log(Dog.describe());

// =================================================================================================================

//Exercise 6: Adding Methods
// 1. Add a method `celebrateBirthday` to the `Animal` class, which increases the `age` by 1.
// 2. Call `celebrateBirthday` on your `Animal` instance and then call `describe` again to see if the age updated.

Animal.prototype.celebrateBirthday = function () {
  this.age += 1;
  return `This is the new ${this.age}`;
};
console.log(Dog.celebrateBirthday());

// =================================================================================================================

//Exercise 7: Inheritance
// 1. Create a subclass of `Animal` called `Dog`.
// 2. Add a new method `bark` to `Dog` that logs `"Woof! Woof!"`.
// 3. Create an instance of `Dog`, call the `describe` method (inherited from `Animal`), and then call `bark`.
// =================================================================================================================

//Exercise 8: Static Methods
// 1. Add a static method to the `Animal` class called `compareAges` that takes two `Animal` instances and logs which one is older.
// 2. Create two `Animal` instances with different ages and use `compareAges` to compare them.
// =================================================================================================================

//Exercise 9: Getters and Setters
// 1. Add a `fullName` property to the `Animal` class, which is a combination of `name` and `species`.
// 2. Use a getter for `fullName` to return the combined string, e.g., `"Charlie the Dog"`.
// 3. Use a setter for `fullName` to split a single string (like `"Charlie the Dog"`) and assign the `name` and `species` properties accordingly.
// =================================================================================================================

// These exercises will help you practice the basics of objects and classes, including creating properties, methods, using inheritance, and exploring getters, setters, and static methods. Let me know if you'd like hints or more detailed examples!
