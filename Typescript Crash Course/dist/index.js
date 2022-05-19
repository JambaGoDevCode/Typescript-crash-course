"use strict";
// Declarando uma variavel 
let ida = 5;
let Id = 5;
console.log("O meu ID", Id);
/******************************************************************************************************/
// Basic types 
let num = 100;
let nameCompany = "Bee company";
let isPublished = true;
let x = "Hello my brother";
let numS = [10, 20, 30, 40]; //array 
// numS.push("hello")  => Err its not a number type
let Arr = [1, true, "Hello"];
// Tuple
let person = [1, "Olá", true];
/******************************************************************************************************/
// Tuple Array
let employee;
employee = [
    [1, "Olá"],
    [2, "Name"],
    [0, "Zero"],
];
/******************************************************************************************************/
// Union of types 
let temp;
temp = "frio";
// or temp = 45
/******************************************************************************************************/
// Enum 
var Directions;
(function (Directions) {
    Directions[Directions["Up"] = 0] = "Up";
    Directions[Directions["Down"] = 1] = "Down";
    Directions[Directions["Left"] = 2] = "Left";
    Directions[Directions["Right"] = 3] = "Right";
})(Directions || (Directions = {}));
console.log(Directions.Left);
/******************************************************************************************************/
// Objects
const user = {
    id: 1,
    name: "typescript"
};
const userss = {
    id: 2,
    name: "typescript"
};
console.log(userss);
/******************************************************************************************************/
// Type Assertion
let cid = 1;
let customerId = cid;
// can also -> let customerID = <number>cid
/******************************************************************************************************/
// Functions
function addnum(x, y) {
    return x + y;
}
console.log(addnum(34, 1));
// void
function log(message) {
    console.log(message);
}
log("true");
const user3 = {
    id: 1,
    name: "typescript"
};
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
// the class   
class PersonM {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return ` ${this.name} is now registered`;
        // if return were a number its give any err 
    }
}
const paul = new PersonM(1, "Paul Carvalho");
const John = new PersonM(2, "John Lengend");
paul.id = 5;
// if private is true can not change de date or value variable  making paul.id = 5
// Public
// Private
// Protected
console.log(paul.register());
console.log(paul, John);
/******************************************************************************************************/
// Extend class - SubClass
class Employee extends PersonM {
    constructor(id, name, positon) {
        super(id, name);
        this.positon = positon;
    }
}
const emp = new Employee(4, "John", "Developer");
console.log(emp.register());
/******************************************************************************************************/
// Generics 
