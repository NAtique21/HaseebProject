// console.log(fetch("https://reqres.in/api/users"));

// fetch("https://reqres.in/api/users") //4XX 5XX not network errors - not considered reject
//   .then(function (data) {
//     //succesful
//     if (data.ok) {
//       console.log("Successfully received");
//     } else {
//       throw new Error("Something wrong happened");
//     } //Exception-  try catch(){ }
//   })
//   .catch(function (err) {
//     //unsucessful
//     console.log("I am catch ..." + err);
//   });

// fetch("https://reqres.in/api/users")
//   .then(function (response) {
//     console.log(response);
//     console.log("I am then");
//     let data = response.json(); //ERROR--
//     return data;
//   })
//   .then(function (a) {
//     console.log("I am 2nd then");
//     console.log(a);
//   })
//   .catch(function (err) {
//     console.log(err);
//   });

//ARROW FUNCTIONS: Latest format to define functions

// function myFunction(){
//   console.log("My function");
// }

// const myFunction = function () { //Anonymous Functions
//   console.log("I am another functions");
// };

// const myFunction = () => {
//
//   console.log("I am another functions");
// };

///const myFunction = () => console.log("I am arrow function");

// function anyFunction() {
//   var x = "anythihng";
// }
// anyFunction();
// console.log(x);

// function main() {
//   var x = 10; //var defines function level variable

//   if (x == 10) {
//     let y = 20; //let defines a block level variable
//     const z = 20;
//     console.log(x); // 10
//     x = x + 1;
//     console.log(z);
//   }
//   console.log(x); //11
//   //console.log(y); //ERROR here...y is only accessible inside if()
//   // console.log(z);
// }

// // console.log(x);

// main();

// let a = () => "Hello world!";

// console.log(a());

//Exercise 1:

// const users = ["Alan", "Bob", "christina", "Doug", "Elvis"];

// let myLengths = users.map(function (item) {
//   return item.length;
// });

// function(item){return item.length  }    item =>item.legth;
// console.log(myLengths);

//let myLengths = users.map(item => item.length);

// let myLengths = users.map((item)=>{ return item.length});

// console.log(myLengths);

// users.forEach(function(user){
// console.log(u)
// });

// const wordLength = users.map(function(name){
//   return name.length;
// });

// console.log(wordLength);

//XHR : XMLHttpRequest - Asynchronous
//Fetch( )  more widely ...

let lname = "Stephen ";
let fname = "Menecola";
let tname = "Chris";
let age = 12;

//TERNARY OPERATOR:     x ? y : z;    a+b    a++ // a-- //--a  TERNARY- 3

//x?y:z;
// x is the condition
// y is the value if conditon true
//z is teh value if condition false

// if (age > 10) {
//   console.log("Good");
// } else {
//   console.log("BAD");
// }

age > 10 ? console.log("Good") : console.log("BAD");

console.log(age > 10 ? 20 : 40);

//console.log("Your name is " + lname + "." + fname + "." + tname + "."); //concating the strings and variables..

// console.log(`Your name is ${lname + fname}.${fname}`);
//less pain

//Stephen.Jennifer.Chris.12.7.2.chris12.24
