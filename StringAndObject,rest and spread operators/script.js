// const object={
//    Name : "Muzamil",
//    Father : "Iqbal Zahid",
//    Degree: "Bscs",
//    Age:23

// };
// //object destrutring
// let {Name,Father,Degree,...remaing}=object;
// console.log(Name);
// console.log(Father);
// console.log(Degree);
// console.log(remaing); //spread operator

// // console.log(remaining);

// const object1={
//    Name : "Muzamil",
//    Father : "Iqbal Zahid",
//    Degree: "Bscs",
//    Age:23

// };
// function object(/*...remaing   you can do this also  you can aslo destructre it  for example*/){
//    // console.log(remaing);
//    console.log(firstname);
   
//    console.log(lastname);
//    console.log(Study);
// }
// object(object1)


// const object1 = {
//    Name: "Muzamil",
//    Father: "Iqbal Zahid",
//    Degree: "Bscs",
//    Age: 23
// };

// function object({ Name, Father, Degree }) {  // ✅ Destructure object 
//    console.log(Name);   // Muzamil
//    console.log(Father); // Iqbal Zahid
//    console.log(Degree); // Bscs
// }
             
// object(object1); // ✅ Correct way to call the function
 
//this is spreading of opearators use to spread to value /arrays
let arr1=[1,2,3];
let arr2=[4,5,6];
let newarr=[...arr1,...arr2];
console.log(newarr);













// for (const val in object) {
//     console.log(val,object[val]);
    
 
// }

// let arr=[45,20,33];
// for (const element of arr) {
//     console.log(element);
    
// }

// let str = 'hello'
// console.log(`${str}`)

//how to join two arrays??
//first method

// let arr=[1,2,3];let arr2=[4,5,6]

// let newarr=[arr.concat(arr2)];
// console.log(newarr);     


 //second method
//arr.push(arr2);
//console.log(arr); 

//thid Method
//By using Spread and Rest Operators
//sprad opearotrs 
// let newarr=[...arr,...arr2]
// console.log(newarr);
//usecage of spread in function
// const numbers = [1, 2, 3, 4];
// console.log(Math.max(...numbers)); // Outputs: 4

//usecage of rest opearators 
// const [first, ...rest] = [1, 2, 3, 4, 5];
// console.log(first); // Outputs: 1
// console.log(rest);  // Outputs: [2, 3, 4, 5]

// function findMaximum(numbers) {
//     // Spread the array elements as individual arguments to Math.max
//     return Math.max(...numbers);
//   }
  
//   // Example usage:
//   const numbers1 = [1, 2, 3];
//   console.log(findMaximum(numbers1)); // Output: 3
  
// function sum(...number){
//     let Total=0;
// for(let num of number){
//     Total=Total+num   //num is just like i in an for loop 
// }
// return a;
// }
// console.log(sum(1,2,3,4,5));


// function sum(...numbers) {
//     // 'numbers' is now an array containing all arguments
//     let total = 0;
//     for (let num of numbers) {
//       total += num;
//     }
//     return total;
//   }
//   console.log(sum(1, 2, 3, 4)); // Outputs: 10
  
