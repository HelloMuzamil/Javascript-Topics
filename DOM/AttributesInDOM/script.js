// // let heading1= document.getElementById("heading");
// // console.log(heading1);
// // let heading2= document.getElementsByClassName("headings")
// // console.log(heading2);

// // let heading3= document.querySelector("h1");
// // console.log(heading3);

// // let div=document.querySelector("div")
// // console.dir(div);
// // div.innerText  yaha sirf show hoga helloWolrd
// // div.innerHTML(div)   yaha tags bhi show hongy 

// // let element=document.querySelector("h1")
// // console.dir(element);

// // element.innerText = element.innerText + "From Youtube "
 
// // let element1 = document.querySelector("#hello");
// // console.log(element1);


// // let element = document.querySelector("h1");

// // // Update the text
// // element.innerText = element.innerText + "From Youtube";

// // // Change color
// // element.style.color = "blue";

// // // Change font size
// // element.style.fontSize = "40px";

// // // Add underline
// // element.style.textDecoration = "underline";

// // // Add background color
// // element.style.backgroundColor = "lightyellow";
  

// ///How to Get attrbutes values 
// // let element=document.querySelector("div")
// // console.log(element);


// // let id =element.getAttribute("id")
// // console.log(id);

// // let name =element.getAttribute("name")
// // console.log(name);



// //how to change attribute value like i have change attribute value  name to course 
// // let course =element.setAttribute("name","course")
// // console.log(course);



// //how to change style of css in js 

// // let div=document.querySelector("div");
// // div.style.backgroundColor="red";
// // div.style.fontSize="50px"

// // div.innerText="Hello"

// function hello(para){
//     console.log("Inside hello");

//     para();
    
// }

// function cb(){
//     console.log("Inside call back ");

    
// }

// hello(cb);


// let box= document.querySelector("#box");
// console.dir(box);
// box.innerText="Hello World";
// box.innerHTML="<i> Hello World </i>" ;

// let a=document.querySelector("a");
// a.setAttribute("href", "https://www.google.com");

let lis = document.querySelectorAll("li");
lis.forEach(function(val){
    console.log(val.innerText);
})