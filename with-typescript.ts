function addNum(a: number, b: number) {
   return a + b;
}

const result = addNum(2, 5);

console.log(result);

let hobbies: string[] = ['Surf' ,'Snowboard', 'Cooking'];
console.log(hobbies);


// *** Assigning TYPE ALIASES ***
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

// Set the var people to the type Person Array.
let people: Person[];


console.log(person);

// *** INFERENCE ***
let course = 'Vai se fuder';
course = 'Vai voce meu fio';
//course = 1233;  This will not work as the course is inferenced as a string value.

// *** UNION TYPES ***
let courseUnion: string | number = 'Vai que vai!'
courseUnion = 123;
courseUnion = 'Mudei novamente'
console.log(typeof courseUnion); // The [typeof] of Union Types will depend on the last assigned variable.

// *** FUNCTIONS ***
// This is a type [void] function as the function does not return anything.
function printValues(value1: any, value2: any) {
   console.log(value1 + value2);
}

// This is a type [number] function as the function returns a number
// The type [number] here is IMPLICIT as we are NOT specifying the type of the function
function printResult(value1: number, value2: number) {
   return value1 + value2
}

// This is a type [number] function as the function returns a number
// The type [number] here is EXPLICIT as we are specifying the type of the function
function printNumber(value1: number, value2: number): number {
   return value1 + value2
}

// *** GENERICS ***
// It sets the type of the function depending on the type of the parameters we are passing in.
function insertAtBegin<T>(array: T[], value: T) {
   const newArray = [value, ...array];
   return newArray
}

// Test insertAtBegin function with numbers
console.log(insertAtBegin([2,3,4,5], 1));

// Test insertAtBegin function with strings
console.log(insertAtBegin(['b', 'c', 'd', 'e'], 'a'));


// *** CLASSES AND TYPESCRIPT ***
console.log(`
************* Functions *************
`);
class Student {
   // Defining the variable type
   // firstName: string;
   // lastName: string
   // age: number;
   // private courses: string[];

   // // Assigning the variable values
   // constructor(first: string, ) {
   //    this.firstName = first;
   //    this.lastName = last;
   //    this.age = age;
   //    this.courses = courses;
   // }

   // Shorthand notation - This is the same as the //commented// code above - In this case we do not need to define the variables and then assign it on the constructor. Instead we can use the short hand notation declaring which variable(s) is(are) public or private and also the type of the variable
   constructor(public firstNanme: string, public lastName: string, public age: number, private courses: string[]){}
   

   enroll(courseName: string) {
      this.courses = [...this.courses, courseName];
   }

   public getCourses() {
      return this.courses;
   }
}

const student = new Student('Marcio', 'Braz', 42, ['Angular']);
student.enroll('React');
console.log(student.getCourses());