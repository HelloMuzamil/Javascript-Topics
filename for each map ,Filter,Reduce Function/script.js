// function updateVisualizations() {
//      let text = document.getElementById("userInput").value;
 
//      // Array Methods

     
//      let arrExample = [1, 2, 3, 4, 5];
//      document.getElementById("pushResult").textContent = JSON.stringify(arrExample.push(6));
//      document.getElementById("popResult").textContent = JSON.stringify(arrExample.pop());
//      document.getElementById("shiftResult").textContent = JSON.stringify(arrExample.shift());
//      document.getElementById("unshiftResult").textContent = JSON.stringify(arrExample.unshift(0));
//      document.getElementById("concatResult").textContent = JSON.stringify(arrExample.concat([6, 7, 8]));
//      document.getElementById("joinResult").textContent = arrExample.join("-");
//      document.getElementById("sliceResult").textContent = JSON.stringify(arrExample.slice(1, 3));
//      document.getElementById("spliceResult").textContent = JSON.stringify(arrExample.splice(2, 1, 10));
//      document.getElementById("indexOfResult").textContent = arrExample.indexOf(10);
//      document.getElementById("lastIndexOfResult").textContent = arrExample.lastIndexOf(10);
//      document.getElementById("includesResult").textContent = arrExample.includes(10);
//      document.getElementById("findResult").textContent = arrExample.find(num => num > 5);
//      document.getElementById("findIndexResult").textContent = arrExample.findIndex(num => num > 5);
//      document.getElementById("filterResult").textContent = JSON.stringify(arrExample.filter(num => num % 2 === 0));
//      document.getElementById("mapResult").textContent = JSON.stringify(arrExample.map(num => num * 2));
//      document.getElementById("reduceResult").textContent = arrExample.reduce((acc, num) => acc + num, 0);
//      document.getElementById("reduceRightResult").textContent = arrExample.reduceRight((acc, num) => acc + num, 0);
//      document.getElementById("sortResult").textContent = JSON.stringify(arrExample.sort((a, b) => a - b));
//      document.getElementById("reverseResult").textContent = JSON.stringify(arrExample.reverse());
//      document.getElementById("forEachResult").textContent = arrExample.forEach(num => console.log(num));
//      document.getElementById("everyResult").textContent = arrExample.every(num => num > 0);
//      document.getElementById("someResult").textContent = arrExample.some(num => num > 4);
//      document.getElementById("fillResult").textContent = JSON.stringify(arrExample.fill(10));
//      document.getElementById("copyWithinResult").textContent = JSON.stringify(arrExample.copyWithin(0, 2, 4));
//      document.getElementById("flatResult").textContent = JSON.stringify([1, [2, 3], [4, [5]]].flat());
//      document.getElementById("flatMapResult").textContent = JSON.stringify([1, 2, 3].flatMap(num => [num, num * 2]));
 
//      // String Methods
//      document.getElementById("charAtResult").textContent = text.charAt(0);
//      document.getElementById("charCodeAtResult").textContent = text.charCodeAt(0);
//      document.getElementById("concatStringResult").textContent = text.concat(" Welcome!");
//      document.getElementById("includesStringResult").textContent = text.includes("JavaScript");
//      document.getElementById("indexOfStringResult").textContent = text.indexOf("JavaScript");
//      document.getElementById("lastIndexOfStringResult").textContent = text.lastIndexOf("JavaScript");
//      document.getElementById("matchResult").textContent = text.match(/JavaScript/);
//      document.getElementById("replaceResult").textContent = text.replace("World", "Developers");
//      document.getElementById("replaceAllResult").textContent = text.replaceAll("o", "0");
//      document.getElementById("searchResult").textContent = text.search("JavaScript");
//      document.getElementById("sliceStringResult").textContent = text.slice(0, 5);
//      document.getElementById("splitResult").textContent = text.split(" ");
//      document.getElementById("substringResult").textContent = text.substring(0, 5);
//      document.getElementById("substrResult").textContent = text.substr(0, 5);
//      document.getElementById("toLowerCaseResult").textContent = text.toLowerCase();
//      document.getElementById("toUpperCaseResult").textContent = text.toUpperCase();
//      document.getElementById("trimResult").textContent = text.trim();
//      document.getElementById("trimStartResult").textContent = text.trimStart();
//      document.getElementById("trimEndResult").textContent = text.trimEnd();
//      document.getElementById("padStartResult").textContent = text.padStart(20, "*");
//      document.getElementById("padEndResult").textContent = text.padEnd(20, "*");
//      document.getElementById("repeatResult").textContent = text.repeat(2);
//      document.getElementById("localeCompareResult").textContent = text.localeCompare("hello");
 
//      // Function Methods
//      const sampleFunc = () => "I am a function!";
//      document.getElementById("callResult").textContent = sampleFunc.call(null);
//      document.getElementById("applyResult").textContent = sampleFunc.apply(null);
//      document.getElementById("bindResult").textContent = sampleFunc.bind(null)();
//      document.getElementById("toStringResult").textContent = sampleFunc.toString();
//      document.getElementById("lengthResult").textContent = sampleFunc.length;
//      document.getElementById("nameResult").textContent = sampleFunc.name;
//      document.getElementById("arrowFunctionResult").textContent = (() => "This is an arrow function!")();
//  }
// //  let arr=[100,20,36,46,99,98,96,94,101];
// // let result = arr.filter((value)=>{
// //     if(value >90){
// // console.log(value);

// //     }
// // })
// // let result2=arr.filter(checkout);
// // let checkout =(value)=>{
// //      if(value>40){
// //         console.log(value);
// //         return true;
// //      }
// //      return false;
// // };

// // let result2 = arr.filter(checkout);

// // let checkout = (value) => {
// //     if (value > 40) {
// //         console.log(value);  // Just for printing
// //         return true;         // Tell filter to keep this value
// //     }
// //     return false;
// // };

// // console.log("Filtered Array:", result2);

// // let input = prompt("Enter numbers separated by commas:");
// // let arr1 = input.split(",").map(Number); // Converts input to array of numbers
// // console.log("User Array:", arr1);

// // let n = prompt("Enter number");
// // let ar=[]
// // for (let i=0;i<n;i++){
// //    ar[i]=i;
// //    console.log(ar[i]);
// // }
// // let result = ar.reduce((pre , next) =>{
// //      return pre + next 
// // })
// // console.log(result);


// // let numbers = [1, 2, 3, 4, 5];

// // numbers.forEach((number, index) => {
// //     console.log(`Element at index ${index}: ${number}`);
// // });


// // console.log(a);
// // var a = "Hello "  //undefined

// function fun(){
//     var n= "hello"
//     console.log(n);
    
// }
// fun()

 
// function test(){
//    let a =10;
// }

// test();
// //console.log(a); // This will throw an error because 'a' is not defined in this scope yha tum keh skty ho ky let is a function soped likn here is a twist 

// function test2(){
//     if (true){
//         let b = 20; // var is function scoped
//     }
//     // console.log(b); // This will throw an error because 'b' is not defined in this scope yai deikha B to abhi functionscoped ky  andr h issy access hona chahiya tha likn nahi howa oski wajah yai h ky let aik blocked scoped h functionscoped nai yani isky variable  blocked y andr hi acess hoskty h not bahir of parenthesisi like {}
// }


// let a = undefined;
// console.log(a); // This will log 'undefined' because 'a' is declared but not initialized 
let arr= [1, 9, 5, 4, 54,7,8];
// arr.splice(3,2);
// console.log(arr); // This will log [1, 2, 3, 7, 8] because the elements at index 3 and 4 (which are 4 and 54) have been removed
// arr.sort(function (a,b){
//     return a-b;
// })
// console.log(arr); 

// arr.forEach(function(value,index){
//     console.log("Element at index " + index + ": " + value);
// }); 

// arr.forEach(function (value){
//     console.log(value+5);
// })
// console.log(arr); // This will log the original array [1, 9, 5, 4, 54, 7, 8] because forEach does not modify the array

let words = ["hello", "world", "JavaScript"];
let upperCaseWords = words.map(function(word) {
    return word.toUpperCase();
});
console.log(upperCaseWords); // This will log ["HELLO", "WORLD", "JAVASCRIPT"] because map creates a new array with the results of calling a provided function on every element in the calling array

let filtering = words.filter(function(word){
    return word.length>6;
});
console.log(filtering); // This will log ["JavaScript"] because filter creates a new array with all elements that pass the test implemented by the provided function

let words2 = ["hello", "world", "JavaScript"];

let filteringWithMap = words2.map(function(word) {
    if (word.length > 6) {
        return word;
    } else {
        return null;
    }
});


console.log(filteringWithMap); // [null, null, "JavaScript"] yha deikho null,null print horha islia  yha filter use krna chahiya jo array ki condition puri kry ga bss usy hi print kry ga 
