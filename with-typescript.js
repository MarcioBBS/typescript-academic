var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
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
// Set the var people to the type Person Array.
var people;
console.log(person);
// *** INFERENCE ***
var course = 'Vai se fuder';
course = 'Vai voce meu fio';
//course = 1233;  This will not work as the course is inferenced as a string value.
// *** UNION TYPES ***
var courseUnion = 'Vai que vai!';
courseUnion = 123;
courseUnion = 'Mudei novamente';
console.log(typeof courseUnion); // The [typeof] of Union Types will depend on the last assigned variable.
// *** FUNCTIONS ***
// This is a type [void] function as the function does not return anything.
function printValues(value1, value2) {
    console.log(value1 + value2);
}
// This is a type [number] function as the function returns a number
// The type [number] here is IMPLICIT as we are NOT specifying the type of the function
function printResult(value1, value2) {
    return value1 + value2;
}
// This is a type [number] function as the function returns a number
// The type [number] here is EXPLICIT as we are specifying the type of the function
function printNumber(value1, value2) {
    return value1 + value2;
}
// *** GENERICS ***
// It sets the type of the function depending on the type of the parameters we are passing in.
function insertAtBegin(array, value) {
    var newArray = __spreadArray([value], array);
    return newArray;
}
// Test insertAtBegin function with numbers
console.log(insertAtBegin([2, 3, 4, 5], 1));
// Test insertAtBegin function with strings
console.log(insertAtBegin(['b', 'c', 'd', 'e'], 'a'));
