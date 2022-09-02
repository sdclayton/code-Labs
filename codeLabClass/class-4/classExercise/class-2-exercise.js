// Exercise #1: Variable
const string = 'This is a string';
const num = 40
const boolean = true
const undefined = null
const undefinedValue = undefined
const objectUserInfo = {
    name: Sarah,
    username: sdclayton,
    gender: female
}

const arr = ['Sarah', 'Clint', 'Adalyn', 'Tuff'];
const noDefault = '';

// Exercise #2: Operators
const add = 2 + 3;
const minus = 50 - 3; 
const divide = 20 / 2;
const multiple = 40 * 2;

if(add > minus) {
    console.log('My anwer is grater than minus');
} else {
    console.log('My answer is less than minus');
};

const lessThan = 10 < 5;
console.log(lessThan);  //false

// Exercise #3: Conditional Statements
const x = 5;
const y = '5';

if(x === 5) {
    console.log(true);
} else {
    console.log(fales);
}

// Exercise #4: For Loop
let students = ['John', 'Jane', 'Jimmy'];

for (let i = 0; i < students.length; i++) {
    console.log(students[i]);
}

// Exercise #5: Found John!
let people = [
    {
        name: 'James',
        age: 34
    },
    {
        name: 'John',
        age: 43
    },
    {
        name: 'Jane',
        age: 23
    }
]

for (let i = 0; i < people.length; i++) {
    console.log(people[i])
    if(name === 'John') {
        console.log('I found John!')
    }
}
// Finish exercise #5 with find
