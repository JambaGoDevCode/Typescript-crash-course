
// Declarando uma variavel 
let ida = 5;

let Id: number = 5;

console.log("O meu ID", Id);




/******************************************************************************************************/
// Basic types 

let num: number = 100
let nameCompany: string = "Bee company"
let isPublished: boolean = true
let x: any = "Hello my brother"


let numS: number[] = [10,20,30,40] //array 
// numS.push("hello")  => Err its not a number type

let Arr: any[] = [1, true, "Hello"] 



// Tuple

let person: [number, string, boolean] = [1, "Olá", true]






/******************************************************************************************************/
// Tuple Array

let employee: [number, string][]
employee = [
    [1, "Olá"],
    [2,"Name"],
    [0,"Zero"],
]

/******************************************************************************************************/
// Union of types 
let temp: string | number
temp = "frio"
// or temp = 45








/******************************************************************************************************/
// Enum 
enum Directions {
    Up, //Up = "Up" Can pass a string value
    Down,
    Left,
    Right,
}
console.log(Directions.Left)





/******************************************************************************************************/
// Objects

const user: {
    id:number,
    name: string
} = {
    id: 1,
    name: "typescript"
}

type User = {
    id: number
    name: string
}
const userss : User = {
    id: 2,
    name: "typescript"
}
console.log(userss)


/******************************************************************************************************/
// Type Assertion
let  cid: any = 1
let customerId = cid as number
    // can also -> let customerID = <number>cid









/******************************************************************************************************/
// Functions


 function addnum(x:number, y:number): number{
     return x + y
 }
 console.log(addnum(34,1))
// void
 function log(message: string | number): void {
     console.log(message)
 }
 log("true")






/******************************************************************************************************/
 // Interfaces 
 interface UserInterface {
     id: number
     name: string
     age?: number
 }

 const user3: UserInterface = {
     id:1,
     name:"typescript"
 }

 interface MathFunc{
     (x:number, y: number): number
 }

 const add : MathFunc = (x:number, y: number): number => x + y 
 const sub : MathFunc = (x:number, y: number): number => x - y 


/******************************************************************************************************/
// Classes


// Interfaces class
interface PersonMInterface {
    id: number
    name: string

    //pass the metodo
    register(): string
}


// the class   
class PersonM  implements PersonMInterface {
    id: number // private id: number
    name: string

    constructor(id: number, name: string){
        this.id = id
        this.name = name
    }

    register(){
        return ` ${this.name} is now registered`
        // if return were a number its give any err 
    }
}

const paul = new PersonM(1, "Paul Carvalho")
const John = new PersonM(2, "John Lengend")
paul.id = 5

// if private is true can not change de date or value variable  making paul.id = 5
// Public
// Private
// Protected

console.log(paul.register())
console.log(paul, John)




/******************************************************************************************************/

// Extend class - SubClass

class Employee extends PersonM {
    positon: string

    constructor (id: number, name: string,positon:string){
        super(id,name)
        this.positon = positon
    }
}


const emp = new Employee(4, "John", "Developer")
console.log(emp.register())




/******************************************************************************************************/

// Generics 
