// function multiply(x){

//    return function (y){
//       console.log(`The product of ${x} and ${y} is ${x * y}`);

//    }

// }


// let result3 =multiply(2)
// result3(1); // This will call the inner function with x = 2 and y = 1
// result3(3); // This will call the inner function with x = 2 and y = 3
// result3(4); // This will call the inner function with x = 2 and y = 4
// result3(5); // This will call the inner function with x = 2 and y = 5
// result3(6); // This will call the inner function with x = 2 and y = 6

// let result4 = multiply(3);
// result4(1); // This will call the inner function with x = 3 and y = 1
// result4(2); // This will call the inner function with x = 3 and y = 2
// result4(3); // This will call the inner function with x = 3 and y = 3
// result4(4); // This will call the inner function with x = 3 and y = 4
// result4(5); // This will call the inner function with x = 3 and y = 5
// result4(6); // This will call the inner function with x = 3 and y = 6

// function multiply(x) {
//     console.log(`Outer function 'multiply' called with x = ${x}`);

//     return function(y) {
//         console.log(`Inner function called with y = ${y}`);
//         console.log(`x = ${x}, y = ${y}`);
//         console.log(`The product of ${x} and ${y} is ${x * y}`);
//         console.log('-------------------------------');
//     };
// }

// // First Closure: multiply(2)
// let result = multiply(2); // x = 2

// result(1); // y = 1
// result(3); // y = 3
// result(4); // y = 4
// result(5); // y = 5
// result(6); // y = 6

// // Second Closure: multiply(3)
// let result2 = multiply(3); // x = 3

// result2(1); // y = 1
// result2(2); // y = 2
// result2(3); // y = 3
// result2(4); // y = 4
// result2(5); // y = 5
// result2(6); // y = 6


 function discountvalue(discount){

   return function (price){
    let discountprice = price - (price*discount/100);
    console.log(`The price after ${discount}% discount of ${price} is ${discountprice}`);
   }

 }
 
 let orginalvalue =discountvalue(20)
 orginalvalue(100);