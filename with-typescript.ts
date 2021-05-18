function addNum(a: number, b: number) {
   return a + b;
}

const result = addNum(2, 5);

console.log(result);

let hobbies: string[] = ['Surf' ,'Snowboard', 'Cooking'];
console.log(hobbies);

let person: {
   name: string;
   age: number;
}[]

person = [
   {name: 'Marcio', age: 42},
   {name: 'Leah', age: 38},
   {name: 'Julian', age: 2}
]

console.log(person);

// INFERENCE
let course = 'Vai se fuder';
course = 'Vai voce meu fio';
//course = 1233;  This will not work as the course is inferenced as a string value.