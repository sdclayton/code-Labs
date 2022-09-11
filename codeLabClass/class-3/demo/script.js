//       ARRAYS
// const fruit = ['Bananas','Apples', 'Oranges', 'Peaches', 'Pears']
// console.log(fruit);

// // INDEXING
// console.log(fruit[2]);


// //       METHODS
// // PUSH METHOD
// fruit.push('Blueberries')
// console.log(fruit);

// // POP METHOD
// fruit.pop()
// console.log(fruit);

// //

// console.log(fruit)

// // SLICE METHOD
// fruit.slice(2, 'Blueberries')
// console.log(fruit);

// console.log(fruit.slice(1, 4));
// console.log(fruit.slice(1, 3));

// console.log(fruit);

// // INDEX OF METHOD
// console.log(fruit.indexOf('Apples'));

// console.log(fruit.length);
// APPEND METHOD

//        OBJECTS
// add Properties to Object 
// key: value pairs  (key/property)
// const person = {
//   name: 'sarah',
//   shirt: 'white'
// }

// // access object: dot notation vs. bracket notation

// console.log(person.name);
// console.log(person.shirt);

// // bracket notation
// console.log(person['name']);
// console.log(person['shirt']);


// // assign objects
// person['phone'] = '417-425-7418'
// console.log(person.phone)

// person['address'] = '492 E. Battlefield'
// console.log(person.address)


// const person2 = {
//   name: 'janet',
//   shirt: 'black'
// }
// console.log(person2)

// console.log(person2.name)

//        FUNCTIONS
// Literial Templates
// ES6 Functions
// const introducer = (name, shirt) => {
//   const person = {
//     name: name,
//     shirt: shirt,
//     assets: 300000,
//     liabilities: 100000
//   }
 
//   const intro = `Hi my name is ${person.name} and the color of my shirt is ${person.shirt}. My networth is $${person.assets - person.liabilities}USD.`

//   return intro
// } 
// console.log(introducer('Sarah', 'black'));

// Methods inside of an object



const fruits = ['Bananas','Apples', 'Oranges', 'Peaches', 'Pears']
console.log(fruits);

for(let i = 0; i < fruits.length; i++) {
  console.log(fruits[i])
}

const numbers = [1, 2, 3, 4, 5, 6]

for(let i = 0.; i < numbers.length; i++) {
  console.log(numbers[i])
}

// Sum up all numbers in array

