/*****************************
 * 1. Dark Mode Toggle Button
 *****************************/
let enabledark = document.querySelector("#darkmode");
let ison = false;

enabledark.addEventListener("click", function () {
  if (!ison) {
    console.log("Dark Mode");
    document.body.style.backgroundColor = "black";
  } else {
    console.log("Light Mode");
    document.body.style.backgroundColor = "white";
  }
  ison = !ison;
});


/*****************************
 * 2. Menu Show/Hide Toggle
 *****************************/
let menulist = document.querySelector("#menulist");
let menu = document.querySelector("#menu"); // Added missing menu element
let isclick = true;

menu.addEventListener("click", function () {
  if (isclick) {
    menulist.style.display = "none";
  } else {
    menulist.style.display = "block";
  }
  isclick = !isclick;
});


/*****************************
 * 3. Image Scroll Buttons
 *****************************/
let scrollBox = document.getElementById("scrollBox");
let leftBtn = document.getElementById("leftBtn");
let rightBtn = document.getElementById("rightBtn");

leftBtn.addEventListener("click", function () {
  scrollBox.scrollLeft -= 200;
});

rightBtn.addEventListener("click", function () {
  scrollBox.scrollLeft += 200;
});


/*****************************
 * 4. Dropdown Selection Event
 *****************************/
let heading = document.querySelector("#heading");
let selection = document.querySelector("#selection");

selection.addEventListener("change", function (e) {
  heading.innerHTML = `${e.target.value} is Selected`;
});


/*****************************
 * 5. Key Press Display (Simple)
 *****************************/
window.addEventListener("keydown", function (e) {
  heading.textContent = e.key;
});


/*****************************
 * 6. Typing Word Checker Game
 *****************************/
let wordArray = "code";
let userTyped = [];
let showWord = document.querySelector("#showWord");

showWord.textContent = wordArray;

window.addEventListener("keydown", function (e) {
  let key = e.key;
  heading.textContent = key;
  userTyped.push(key);

  for (let i = 0; i < userTyped.length; i++) {
    if (userTyped[i] !== wordArray[i]) {
      alert("❌ Galat type kiya! Dobara try karo.");
      userTyped = [];
      return;
    }
  }

  if (userTyped.length === wordArray.length) {
    alert("🎉 Congrats! You typed it correctly.");
    userTyped = [];
  }
});


/*****************************
 * 7. Form Submit -> Create Card
 *****************************/
let form = document.querySelector("#form");
let main = document.querySelector("#main");
let button = document.querySelector("#button");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let username = document.querySelector("#name").value;
  let phone = document.querySelector("#phone").value;
  let occupation = document.querySelector("#occu").value;

  let card = document.createElement("div");
  card.className = "card";

  let name = document.createElement("h1");
  name.innerText = username;

  let newnum = document.createElement("h2");
  newnum.innerText = phone;

  let occup = document.createElement("p");
  occup.innerText = occupation;

  card.appendChild(name);
  card.appendChild(newnum);
  card.appendChild(occup);

  main.appendChild(card);
  form.reset();
});


/*****************************
 * 8. Mouse Over + Out on Div
 *****************************/
let div = document.getElementById("div");

div.addEventListener("mouseover", function () {
  div.style.backgroundColor = "green";
  div.innerText = "Mouse Over!";
});

div.addEventListener("mouseout", function () {
  div.style.backgroundColor = "brown";
  div.innerText = "Follow me!";
});


/*****************************
 * 9. Floating Box on <p> Hover (Image from custom attribute)
 *****************************/
let paras = document.querySelectorAll("p");
let box;

for (let i = 0; i < paras.length; i++) {
  paras[i].addEventListener("mouseover", function () {
    let imagesrc = paras[i].getAttribute("image-tag");

    box = document.createElement("div");
    box.className = "floating";
    box.innerHTML = "<img src='" + imagesrc + "'>";

    document.body.appendChild(box);
  });

  paras[i].addEventListener("mousemove", function (e) {
    box.style.left = e.pageX + 100 + "px";
    box.style.top = e.pageY + 10 + "px";
  });

  paras[i].addEventListener("mouseout", function () {
    box.remove();
  });
}


/*****************************
 * 10. Floating Box with Text + Image (Using data-img)
 *****************************/
let paras1 = document.querySelectorAll("#main1 p");
let box1;

for (let i = 0; i < paras1.length; i++) {
  paras1[i].addEventListener("mouseover", function () {
    let text = paras1[i].innerText;
    let imgSrc = paras1[i].getAttribute("data-img");

    box1 = document.createElement("div");
    box1.className = "floating1";
    box1.innerHTML = text + "<br><img src='" + imgSrc + "'>";

    document.body.appendChild(box1);
  });

  paras1[i].addEventListener("mousemove", function (e) {
    box1.style.left = e.pageX + 10 + "px";
    box1.style.top = e.pageY + 10 + "px";
  });

  paras1[i].addEventListener("mouseout", function () {
    box1.remove();
  });
}
