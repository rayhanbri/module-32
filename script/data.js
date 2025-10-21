// primive data type , what is non-primitive data type ?

// Definition:
// Primitive data types are the basic or fundamental data types provided by a programming language.
// They store simple values and do not have methods or properties. 
// ⚙️ Characteristics:
// Stored directly in memory (stack).
// Immutable (cannot be changed directly).
// When assigned to another variable, a copy of the value is made.
// eg . number,string,boolean,null,definied 

// 🧩 Non-Primitive (Reference) Data Types
// Definition:
// Non-primitive data types (also called reference types) are objects that can hold multiple values or complex structures.

// ⚙️ Characteristics:
// Stored in heap memory (reference stored in stack).
// Mutable (can be changed after creation).
// When assigned to another variable, only the reference (address) is copied.

// eg . Array, object, function 


// const name = ' rayhan';

// non-primitive
const array = [1,'rayhan',13]

// it is not changable 
// let person = 'gias uddin';
// let newperson = person;
// person = 'rayhan'
// console.log(newperson)

// it can do it becacuse non primitive data do not share value it just share pointer 
// let person = {
//   name:'rayhan'
// }
// let newperson = person;

// person.name = 'ikthiar uddin'

// console.log(newperson)



//what is type conversition in javascript w3 school
// is Number and parseINt are same 
// let number = Number(55.21);
// const typess = parseInt(number)
// const types = Number(number);
// console.log(types)

// what  is this ? 
// let x = typeof(Number('John'));
// console.log(x)
