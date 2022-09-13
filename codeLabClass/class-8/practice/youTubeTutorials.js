// // YouTube - Closure tutorial w/ German

// // YouTube - Object tutorial w/ German
let person = {
  firstName: 'John',
  age: 35, 
  favoriteIceCream: 'Strawberry'
}

// print person's message
console.log(`My name is ${person.firstName}. I am ${person.age} years old and love ${person.favoriateIceCream} flavor ice cream `);

// created a arrow function to print person's message
const personalMessage = () => {
  console.log(`My name is ${person.firstName}. I am ${person.age} years old and love ${person.favoriateIceCream} flavor ice cream `);
}

/////////////////////////////////

// // YouTube - Array tutorial w/ German
let personalDate = 

/////////////////////////////////

// Classes - YouTube

// A class is a blueprint for objects --> objects = instances
class User {
  // properties -> data
  username = ''
  // constructor -> that is executed when a instance gets created 
  //constructor are already built
  constructor() {
    console.log('instance was created!')
  }
  // methods -> define logic to manipulate data
  // methods we create
  printMyName() {
    console.log(`My name is ${this.username}`)
  }
}

