//1
// Simple Function

// function Wish(){
//     console.log("hello.....");
// }

// Wish()


//2

// Function Declaration
// function greet(name) {
//   console.log("Hello, " + name + "!");
// }

// // Function Call
// greet("John"); // Output: Hello, John!



//3

// // Function Expression
// const add = function (a, b) {
//     return a + b;
//   };
  
//   // Function Call
//   const result = add(3, 5);
//   console.log(result); // Output: 8


//4


// // Arrow Function
// const multiply = (x, y) => x * y;

// // Function Call
// const product = multiply(4, 6);
// console.log(product); // Output: 24




// Function with Rest Parameters
// function sum(...numbers) {
//     return numbers.reduce((total, num) => total + num, 0);
//   }
  
//   // Function Call
//   const total = sum(1, 2, 3, 4, 5);
//   console.log(total); // Output: 15


//IF Else Statements

// if

// let temperature = 35;

// if (temperature > 30) {
//   console.log("It's a hot day!");
// }


//else if

// let temperature = 25;

// if (temperature > 30) {
//   console.log("It's a hot day!");
// } else {
//   console.log("It's not too hot today.");
// }


// Switch case

let day = 3;
let dayName;

switch (day) {
  case 1:
    dayName = 'Monday';
    break;
  case 2:
    dayName = 'Tuesday';
    break;
  case 3:
    dayName = 'Wednesday';
    break;
  case 4:
    dayName = 'Thursday';
    break;
  case 5:
    dayName = 'Friday';
    break;
  default:
    dayName = 'Weekend';
}

console.log(dayName); // Output: Wednesday
