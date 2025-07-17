// function sum (val1, val2){
//   let sumofno = val1+val2;
//   console.log(sumofno); 
// }
// let englishScore= 20;
// let mathScore=30;
// sum(englishScore,mathScore);

// let str="Muzamil Iqbal"
// console.log(str.replace("u","U"));
// console.log(str.replace("Value which you want to replace ", "Value replaced value"));
// console.log(str.search("m"));  use to search index
// console.log(str.split("a"));
// console.log(str.repeat("a"));
// console.log(str.charAt(3));


// function abc (){
    
// }

// abc(function(){
//     console.log("Hello World"

// function abc(){
//     let a = 10;
//     function def(){
//         let b = 20;
//         function ghi(){
//             let c = 30;
//             console.log(a + b + c); // Accessing variables from outer functions
//         }
//         ghi();
      

//     }

//       // Call the innermost function
//         def();
          
// }
// abc(); // This will output 60


// function handleclick(action){
//     return function(){
//         action();
//     }
// }
// function showalert(){
//     alert("Hello World");
// }

// function login(){
//     console.log("Login Successful");
// }

// document.getElementById("alertbutton").addEventListener("click", handleclick(showalert));
// document.getElementById("loginbutton").addEventListener("click", handleclick(login));

// function outer() {
//     let name = "Muzammil";

//     return function inner() {
//         console.log(name); // Accessing the variable from the outer function
//     };
// }

// const greet = outer();
// greet(); // Output: Muzammil


// function showNames(...names) {
//   console.log(names);
// }

// showNames("Ali", "Ahmed", "Zain");


// const a = [1, 2];
// const b = [3, 4];
// const result = [...a, ...b];

// console.log(result);

// function getscores(...scores) {
//     let total = 0;
//     scores.forEach(function(val){
//         total += val;
//     });
//     console.log(total);
// }

// getscores(10,20,30,40,50);




// function discount(originalprice, discount){
//     let finalprice= originalprice - (originalprice*discount/100);
//     console.log(finalprice);
// }
// discount(200, 15);
// discount(500, 20);

