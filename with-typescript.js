function addNum(a, b) {
    return a + b;
}
var result = addNum(2, 5);
console.log(result);
var hobbies = ['Surf', 'Snowboard', 'Cooking'];
console.log(hobbies);
// Set the var person to the type Person
var person;
person = {
    name: 'Marcio',
    age: 42
};
// Set the var people to the type Person
var people;
console.log(person);
// INFERENCE
var course = 'Vai se fuder';
course = 'Vai voce meu fio';
//course = 1233;  This will not work as the course is inferenced as a string value.
// UNION TYPES
var courseUnion = 'Vai que vai!';
courseUnion = 123;
