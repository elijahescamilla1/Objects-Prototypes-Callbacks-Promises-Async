// Create our Person Prototype
function Person(name, age) {
    this.name = name;
    this.age = age;
}

// Use a regular function to create the printInfo method
Person.prototype.printInfo = function() {
    console.log(`Name: ${this.name}, Age: ${this.age}`);
}

// Create another regular function for the addAge method that takes a single parameter
// Adding to the age 
Person.prototype.addAge = function(years = 1) {
    this.age += years;
}

// Create two people using the 'new' keyword
const person1 = new Person('Alice', 30);
const person2 = new Person('Bob', 25);

// Print both of their infos
person1.printInfo();  // Output: Name: Alice, Age: 30
person2.printInfo();  // Output: Name: Bob, Age: 25

// Increment one person's age by 3 years
person1.addAge(3);

// Print info again to check the updated age
person1.printInfo();  // Output: Name: Alice, Age: 33
