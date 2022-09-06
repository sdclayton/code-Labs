// Function w/ math
function calculateFoodTotal(food, tipPercentage) {
    tipPercentage = tip/100
    tipAmount = food * tipPercentage 
    total = food + tipAmount

    return total
}
console.log(calculateFoodTotal(100, 10));

// Letter Counter...get the number of letters
const howManyLetters = () => {
  const phrase = 'hey, can you go to the grocery store?'

  // counter
  let result = 0;
  
  for(const index in phrase) {
    console.log(Number(index) + 1)
    result = Number(index) + 1
  }
  return {result}
}
console.log(howManyLetters());

// Letter Counter prompt w/ phrase
const howManyLetters = () => {

  let results = 0;

  for(const index in phrase) {
    console.log(Number(phrase) + 1)
    results = Number(phrase) + 1
  }
  return {results}
}
const phrase = prompt('Write a phrase')

console.log(howManyLetters(phrase))

// Get number w/ string.length
const howManyLetters = (phrase) => {
  return {results: phrase.length}
}
const phrase = prompt('Write a phrase')

console.log(howManyLetters(phrase))

// Get the Letters
const howManyLetters = () => {
  const phrase = 'hey, can you go to the grocery store?'

  for(const letter of phrase) {
    
    console.log(letter);
  }
}
console.log(howManyLetters());

// sum of numbers 
const sumArr = (numbers) => {  
  result = 0
  
  for(const number of numbers) {
    result = result + number
  }
  return {result: result}
}
const nums = [2, 4, 7, 10, 34, 22];
console.log(sumArr(nums));

// double numbers
const doubleNumber = (numbers) => {
  let result = []
  for(const number of numbers) {
    result.push(number * 2)  
    }
  return result
}
console.log(doubleNumber([1, 2, 3, 4, 5, 6]));

// double number w/ map
// map - loops and returns an arry
let result = [2, 4, 6, 8].map(number => number * 2);
console.log(result);

// print numbers w/ map


// filter - loops and returns an arry with matching conditions
const filter = (numbers, greaterThan) => {
  let result = []
  for(const number of numbers) {
    if(number > greaterThan) {
      result.push(number)
    } 
  }
  return result
}
console.log(filter([1, 20, 16, 55, 39, 80], 14));
// OR....
const filter = (numbers, greaterThan) => {
  let result = []
  for(const number of numbers) {
    if(number > greaterThan) {
      result.push(number)
    } 
  }
  return result
}
const nums = [1, 20, 16, 55, 39, 80]
console.log(nums.filter(nums => nums > 14));

// class 6...variables, scope, hoisting
// Warm up

const countTo = (num) => {
  let result = 0;

  for(const index in num) {
  console.log(Number(index) + 1) 
  result = Number(num) + 1
  }
  return {results}
}
const num = [1, 2, 3, 4, 5];
console.log(countTo());

// void function
function countTo(num) {
  for(let i = 0; 1 <= num; i++) {
    console.log(i);
  }
}

countTo(5);

// Given two int values, return their sum. Unless the two values are the same, then return double their sum.
const intValue = (a, b) => {
  if(a === b) {
    console.log((a * 2), (b *2));
  } else {
    console.log(a, b)
  }
}
console.log(intValue(40, 40));

// Arrays w/ map
const printNumber = [1, 2, 3, 4, 5, 6].map(number in number)
console.log(printNumber);

let result = [2, 4, 6, 8].map(number => number * 2);
console.log(result);

// filter
const filter = (numbers, greaterThan) => {
  let result = []
  for(const number of numbers) {
    if(number > greaterThan) {
      result.push(number)
    } 
  }
  return result
}
const nums = [1, 20, 16, 55, 39, 80]
console.log(nums.filter(nums => nums > 14));
 const actor = [
   {name: 'sarah', f}
 ]
const filter = (numbers, greaterThan) => {
  numbers.map(numbers in groupNumbers())
}

// alarm clock
const weekday = true
const weekend = false
const vacation = false

const whatDay = () => {
  if(weekday === true) {
    console.log('Time to Wake Up');
  } else if(weekend === true) {
    console.log("It's the weekend, you get to sleep in!");
  } else {
    console.log('Vacation time! Sleep In!')
  }
}
console.log(whatDay());

// filter
const nums = [1, 2, 3, 4, 5, 6]
console.log(nums.filter(num => num > 4 || num < 2))

// return key object w/ filter
const actors = [
  {name: 'jonny', netWorth: 300000},
  {name: 'amber', netWorth: 10},
  {name: 'leonardo', netWorth: 500000},
  {name: 'brad', netWorth: 100000000},
  {name: 'matt', netWorth: 300000000},
]
let result = actors.filter(actor => actor.netWorth > 100000);
console.log(result);
let names = result.map(actor => actor.name).join(', ')

playground.innerHTML = `<h1>${names}</h1>`
const sum = (a, b) => {
  return a + b
}


// REDUCE
// Reduce takes in a function as an argument
// Reduce loops and gives you back the accumulator
let totalNetworth = actors.reduce((prev, curr) => prev + curr.netWorth)
console.log(totalNetworth);

const nums = [1, 2, 3, 4];
const results = nums.reduce(sum)

console.log(results)

// OR 
const nums = [1, 2, 3, 4];
const result = nums.reduce((prev, curr) => prev + curr)
console.log(result)

// multiple
const result = nums.reduce((prev, curr) => prev * curr)
console.log(result)

