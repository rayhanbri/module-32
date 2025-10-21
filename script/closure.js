// what is closure.js //know in detials 
// A closure is created when a function remembers the variables from its outer scope,
// even after that outer function has finished executing.

// A closure gives an inner function access to the variables of its parent function,
// even after the parent function has returned


//what is garbage value

// JavaScript has automatic memory management via garbage collection.

// Any variable or object that is no longer referenced will be cleaned from memory automatically.

// The variable is automatically initialized to undefined. 

// If you want, I can also explain the difference between undefined, null, and “garbage values” in other languages — it helps clear a lot of confusion. Do you want me to do that?

// https://web.programming-hero.com/web-11/video/web-11-32-5-advanced-explore-about-closure

// let counter = 0;

// function sum(){
// // console.log(counter)
//   counter += 1;
//   console.log(counter);
// }
// sum()
// sum()
// sum();





// function sum(){
//   let counter = 0;
//   counter += 1;
//   console.log(counter);
// }
// sum()
// sum()


// function sum(){
//   let counter = 0;
//   const updatecounter =  function(){
//     counter ++;
//     console.log(counter);
//   }
//   updatecounter();
// }
// sum()
// sum()


function sum(){
  let counter = 0;
  return  function(){
    counter ++;
    console.log(counter);
  }
  
}


// const result =sum();
// result();
// result();
