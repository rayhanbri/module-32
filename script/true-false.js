//what in null in javascript 

// 👉 null is a primitive data type in JavaScript that represents
// “no value” or “intentional absence of any object value.”

// You use null when you want to say — “This variable should have no value right now, but it might have later.”

//why null datatype is an object

// Because of a bug in the original design of JavaScript (from 1995) that was never fixed — for backward compatibility reasons.

// When JavaScript was first created, it stored values in memory using a system where the type information was kept in the lower bits of the value’s binary representation.
// Each type had its own internal type tag, for example:
// Object-000  null-000  

// So, for backward compatibility, this “bug” became part of the ECMAScript standard — officially recognized as intentional behavior.

//what is truthy and falsy value 

// 🧩 What Are Truthy and Falsy Values?

// In JavaScript, every value is either:

// ✅ Truthy → behaves like true when converted to a boolean

// ❌ Falsy → behaves like false when converted to a boolean

// JavaScript automatically does this type coercion in conditions.

// | Falsy Value  | Description         |
// | ------------ | ------------------- |
// | `false`      | The boolean `false` |
// | `0`          | Number zero         |
// | `-0`         | Negative zero       |
// | `""` or `''` | Empty string        |
// | `null`       | No value            |
// | `undefined`  | Not defined         |
// | `NaN`        | Not a Number        |

 

//  let name = "";    //space is truthy 
//  let name ='false';    //this is string 
// let name =-9;
// let name ={};  
// let name =[];
// let name = Infinity  //truthy

 if(name){
  console.log('this is truthy');
 }

 else{
  console.log('this  is flasy value')
 }


// if(!!name){
//   console.log('this is truthy');
//  }


// if(!!name) console.log('this is truthy');




// two undefined

// function sum(num1,num2){
//     console.log(num1,num2);
// }

// const result = sum(10,20)

// console.log(result)
 