//how to write arrow function 

// let hello = ()=>{
//     console.log("Hello world ");
    
// }
// hello();

// let add=(a,b)=>{
//     console.log(a+b);
    
// }

// add(2,4);




// function getdata(dataid,getnextdata){
//     setTimeout( ()=>{
//         console.log("Data ",dataid);
//         if (getnextdata) {
//             getnextdata(); // ye check karega agar callback diya gaya hai to hi chale
//         }
//     }

//     ,2000)
// }
// getdata(1,()=>{
//     getdata(2);
//     getdata(3,()=>{
        
//     })
// })       wrong 


// function getdata(dataid, getnextdata) {
//     setTimeout(() => {
//         console.log("Data", dataid);
//         if (getnextdata) {
//             getnextdata(); // tabhi chalega jab previous complete ho
//         }
//     }, 2000);
// }

// getdata(1, () => {
//     getdata(2, () => {
//         getdata(3, () => {
//             getdata(4, () => {
//                 getdata(5); // last one, no callback needed
//             });
//         });
//     });
// });



// function getdata(getid){

//    setTimeout( ()=>{
//     console.log("data is ",getid);
    
//    }

//   ,2000 )
    
    
//     } 

// let showresult=(a,b)=>{
//     setTimeout(  ()=>{
//             console.log(`Your sum is ${a,b}`);
//         }
//    ,2000 )
  
    
// }

// showresult(12,3);

function greet(name, callback) {
    console.log("Hi", name);
    callback(); // calling the passed function
  }
  
  greet("Ali", () => {
    console.log("Welcome!");
  });
  

