// function hello(para){     //pass by value yaha para refer karha h cb ko or jab is 
//                           //ismai call hoga to oska log bhi print hojai ga 
//     console.log("Inside hello");

//     para();
    
// }



// hello(function cb(){    ///Jab aap hello(cb) bolte ho, to JavaScript “pass by\
//                         // value” ke rule se: cb ka reference hello ke parameter para mein copy ho jata hai
//     console.log("Inside call back ");

    
// });


// function hello(text1,para){     //pass by value yaha para refer karha h cb ko or jab is 
//     //ismai call hoga to oska log bhi print hojai ga 
// console.log("Inside hello");

// para(text1);

// }



// hello( "hello",function cb(data){    ///Jab aap hello(cb) bolte ho, to JavaScript “pass by\
//                         // value” ke rule se: cb ka reference hello ke parameter para mein copy ho jata hai
// console.log("Inside call back ",data);


// });



// const hello =(text,para)=>{
//     console.log("Inside hello ");
    
//     para(text);
// }

// hello ("hello",(text)=>{
//     console.log("Inside Call back ",text);
//     })

// function fun1(){
//     function fun2(){
//         console.log("hello world");
        
//     }
//     return fun2

// }
// let res = fun1();
// res();

// function greet(name) {
//      function greet2() {
//         console.log("Hello, " + name);
//     };
//     return greet2;
// }

// const greetJohn = greet("John");   //greetjohn = greet2()
// greetJohn();  // Output: Hello, John

function fun1(text){
    function fun2(text2){
        console.log( text ,text2);
        
    }
    return fun2;

}
let  res = fun1("Chiken or mayo ky sath ");//calling fun1()arrgument 
res("Zinger Burger ")//calling function with argument