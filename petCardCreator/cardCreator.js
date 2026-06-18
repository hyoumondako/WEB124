function Pet(name, type, age) { //1
  this.name = name;
  this.type = type;
  this.age = age;
  this.id = Symbol();
  this.getDescription = function() { //2
    return this.name + " is a " + this.type + " and is " + this.age + " years old.";
  }
  this.haveBirthday = function() { //2
    this.age++;
  }
  this.getOwnerName = function() { //2
    return this.owner?.name || "none";
  }
  this.getID = function () { //2
    return this.id;
  }
}

//3
const pet1 = new Pet("Hudson", "dog", 10);
pet1.owner = { name: "Loren"};
const pet2 = new Pet("Izzy", "cat", 2);
pet2.owner = { name: "Megan" };
const pet3 = new Pet("Goldie", "chicken", 4);

//4
console.log(pet1.name, pet1.type, pet1.age, pet1.getOwnerName()); 
console.log(pet2.name, pet2.type, pet2.age, pet2.getOwnerName());
console.log(pet3.name, pet3.type, pet3.age, pet3.getOwnerName());

//5
pet3.haveBirthday();
console.log(pet3.age);

//6
let now = new Date();
console.log(now);

/*7
- What does this refer to in your constructor and methods?
The current Pet and its properties.

- What does optional chaining do in your code?
If a nested property doesn't exist (like owner.name), Javascript won't completely error out or crash. Instead, it'll show as "undefined" (or whatever you choose, like "none" in this assignment).

- Why might the Date object be useful in a JS program?
Scheduling tasks or comparing past/future dates.
*/