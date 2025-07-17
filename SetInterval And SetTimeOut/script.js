// let body = document.querySelector("body");
// let colorstring="123456789abcdef";
// let color = "";
// for(let i =0;i<6;i++){
//     let RandemColor=Math.floor(Math.random()*colorstring.length)
//     color=color+colorstring[RandemColor];

//     // console.log(RandemColor + "  " + "Pic That Numbers " + "On "+ i +" Number Iteration ");

//     // console.log(color);

// }

// body.style.backgroundColor = `#${color}`;


//now automate it by using SetInterval =>>>>>>>>>

// function changecolor() {
//   let colorstring = "123456789abcdef";
//   let color = "";
//   for (let i = 0; i < 6; i++) {
//     let RandemColor = Math.floor(Math.random() * colorstring.length);
//     color = color + colorstring[RandemColor];

//     // console.log(RandemColor + "  " + "Pic That Numbers " + "On "+ i +" Number Iteration ");

//     // console.log(color);
//   }

//   body.style.backgroundColor = `#${color}`;
// }

// setInterval(changecolor, 1000);


//Synchrous Javascriptb

// console.log("1");
// console.log(2);

// for(let i=0 ; i<100000000000;i++){

    
// }
                                      //yaha pr ab code 3 jo h boht deer lga rha h execute hony mai 
                                      //ab yahi kam agr ham set time out sy kary to yai delay khtm hojai ga 
// console.log("3");






// ////////_____________________>>>>>>>>>>>>>>Set time out ky zariya sy ___________________>>>>>>>>>>

// console.log("1");

// console.log("2");

// setTimeout(() => {
//     for (let i = 0; i < 1000000000000000; i++) {
      
//     }
// }, 0); // optional delay, default to 0ms

// console.log("3");


//----------------------->>>>>>>>>>>>>Set time out In closure-------------->>>>>>>>>>>>
// function fun1(text){
//     console.log("Starting ");
    
//     console.log(text);
    
//    setTimeout(function fun2(){
//     console.log("Helloo "+ text);
    
     
       
//    },1000) 
//    text="Not a dear " ////jab set time out 1 sec bad chly ga to wo deikhy ga tecxt ki 
//                       //new updated value 
//    console.log("Ending");
//    console.log(text);
   
  
    
// }
// fun1("Dear");

console.log("Startig ");
setTimeout (function hello(){
    console.log("Hello 1");
    
},1000)
setTimeout (function hello(){
    console.log("Hello 2");
    
},3000)
setTimeout (function hello(){
    console.log("Hello 3");
    
},2000)

console.log("Ending");     //jiska time kam h wo sabsy pehly execute hoga starting
                            //ending hello1 (1sec),hello3 (2sec) hello2 (3sec)

