// what is scope ? 
// Scope means the area of a program where a variable can be accessed (used). 

// JavaScript mainly has three types of scope:

// Global Scope
// A variable declared outside of any function or block has global scope.

// Local / Function Scope
// Variables declared inside a function are local to that function —

// Block Scope (ES6 feature – let & const)
// Variables declared with let or const are limited to the block {} where they are declared.

function sum(num1, num2) {
    //brakcer er bhitroe block bole 
    var result = num1 + num2;
    var hero =  '12'

    // console.log(result2) 
    if (true) {
        var result2 = 'rayhan'

        // result is accessible from there beacute  is functional 
        // console.log(result)
        
        // but this not accessible  out  side this block 
        const names='rayhan'
    }
    // console.log(names)

    // console.log(result2)
}

// function var is not accessible from here beacuse it  will limited on the function var  is functional scope 
// console.log(hero)
sum(10, 20)


// console.log(role)
// const role = "co";
// var role= "co";