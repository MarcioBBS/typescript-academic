function addNum(a: number, b: number) {
   return a + b;
}

const result = addNum(2, 5);

console.log(result);

let hobbies: string[] = ['Surf' ,'Snowboard', 'Cooking'];
console.log(hobbies);


// Assigning TYPE ALIASES
// Create the Person type aliases
type Person = {
   name: string;
   age: number;
};

// Set the var person to the type Person
let person: Person;

person = {
   name: 'Marcio',
   age: 42
};

// Set the var people to the type Person
let people: Person[];


console.log(person);

// INFERENCE
let course = 'Vai se fuder';
course = 'Vai voce meu fio';
//course = 1233;  This will not work as the course is inferenced as a string value.

// UNION TYPES
let courseUnion: string | number = 'Vai que vai!'
courseUnion = 123;