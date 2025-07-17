// //let a;  declration 
// //a=5 ;  intilization 


// console.log("Hello World");
// // var a = 20;
// // var a=30;
// // a=40;
// // a=50;   ?///////you can change the value in var 

// let a=30;  //declration
// //let a=40  redeclration not allowed
//  a=22;   //updation is allowed  local scope
// console.log(a);


let b = 15;
// let b = 25;  Error
b = 25;       //  Re-assign allowed
console.log(b); // 25


const d = 30;
// d = 40;  Error: Assignment to constant variable
console.log(d); // 30


{
  let a = 10;
  const b = 20;
  var c = 30;

  console.log("Inside Block:");
  console.log(a); //  10
  console.log(b); //  20
  console.log(c); //  30
}

console.log("Outside Block:");
console.log(c); //  30 (var is NOT block scoped)

// console.log(a); Error: a is not defined let is block scoped
// console.log(b);  Error: b is not defined  const is block scoped



if (true) {
  let name = "Ali";
  var city = "Lahore";
  console.log("Inside if: " + name);  //  Ali
}

console.log("Outside if: " + city);   //  Lahore
// console.log(name);  Error: name is not defined


