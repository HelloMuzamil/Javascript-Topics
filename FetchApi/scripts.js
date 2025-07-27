let button=document.querySelector("#button");
let result =document.querySelector("#result");



async function api(num1,num2) {
    
  try {
    const response = await fetch(`https://codethreadpracticeapi.vercel.app/sum?a=${num1}&b=${num2}`);
    const data = await response.json();
   result.innerHTML =data.sum;
  } catch (error) {
    console.error("Error:", error);
  }
}

button.addEventListener("click",function(){
    console.log("Inside")
let num1= document.querySelector("#num1").value
let num2= document.querySelector("#num2").value
    api(num1,num2)
})

 