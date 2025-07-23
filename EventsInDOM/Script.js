// Dark Mode Toggle
let enabledark = document.querySelector("#darkmode");
let ison = false;
console.log("Entering In condition");

enabledark.addEventListener("click", function () {
  if (!ison) {
    console.log("Dark Mode");
    document.body.style.backgroundColor = "black";
  } else {
    console.log("Light Mode");
    document.body.style.backgroundColor = "white";
  }
  console.log("Outside");
  ison = !ison;
});

// Menu Show/Hide Toggle
let menulist = document.querySelector("#menulist");
let isclick = true;

menu.addEventListener("click", function () {
  console.log("Entering in function");
  if (isclick) {
    console.log("If condition");
    menulist.style.display = "none";
  } else {
    console.log("Entering in else");
    menulist.style.display = "block";
  }
  isclick = !isclick;
});

// Image Scroll Buttons
let scrollBox = document.getElementById("scrollBox");
let leftBtn = document.getElementById("leftBtn");
let rightBtn = document.getElementById("rightBtn");

leftBtn.addEventListener("click", function () {
  scrollBox.scrollLeft -= 200;
});

rightBtn.addEventListener("click", function () {
  scrollBox.scrollLeft += 200;
});

// Sample Reusable Double Click Style Function (Commented)
/*
let p1 = document.querySelector("p");
p1.addEventListener("dblclick", function () {
  p1.style.backgroundColor = "red";
});

function changecolor(element, color) {
  element.addEventListener("dblclick", function () {
    element.style.backgroundColor = color;
  });
}

let p2 = document.querySelector("#id2");
let p3 = document.querySelector("#id3");
changecolor(p2, "blue");
changecolor(p3, "green");
*/

// Input Event Example (Commented)
/*
let inputtype = document.querySelector("input");
inputtype.addEventListener("input", function (dets) {
  console.log(dets.data);
});
*/

// Message Show/Hide Toggle (Commented)
/*
let msg = document.getElementById("message");
let toggleBtn = document.getElementById("toggleBtn");
let isVisible = true;

toggleBtn.addEventListener("click", function () {
  if (isVisible) {
    msg.style.display = "none";
    toggleBtn.innerText = "Show";
  } else {
    msg.style.display = "block";
    toggleBtn.innerText = "Hide";
  }
  isVisible = !isVisible;
});
*/
