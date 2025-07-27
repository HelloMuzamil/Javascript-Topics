## 📘 README: Understanding Event Listeners in JavaScript (Beginner Guide)

### 🔰 What is an Event Listener?

An **event listener** is a way to make your webpage **respond** when something happens — like clicking a button, hovering the mouse, typing into a textbox, etc.

```js
element.addEventListener("event-type", function);
✅ Commonly Used Events:
Event	Description
click	When user clicks something
mouseover	When mouse hovers over an element
mouseout	When mouse leaves the element
focus	When input box is selected
blur	When input box loses focus
keydown	When key is pressed
input	When value is typed/changed

👇 Beginner-Level Confusions & Answers:
❓1. "Kya sirf buttons pr event listener lagta hai?"
🟢 Nahi, kisi bhi HTML element par laga sakte ho: div, img, input, li, p, etc.

❓2. "Function ke andar logic kaise likhna hai?"
Wo kaam depend karta hai tumhara goal kya hai. Jaise:


button.addEventListener("click", function () {
  alert("You clicked the button!");
});
❓3. "Ek button click pr koi div hide/show kaise hota hai?"

let btn = document.getElementById("toggleBtn");
let box = document.getElementById("myBox");
let visible = true;

btn.addEventListener("click", function () {
  if (visible) {
    box.style.display = "none";
  } else {
    box.style.display = "block";
  }
  visible = !visible;
});
🧠 Logical Gotchas (Confusions that happen a lot)
❌ Mistake: document.getelement (Wrong spelling)
✅ Correct: document.getElementById("id")

❌ Mistake: = vs ==
= means assign

== means compare

❌ Confusion: CSS display: "none" vs visibility: "hidden"
display: none — completely hides, element is not even there

visibility: hidden — hides but still takes space

📱 Responsive Menu Example (Show on mobile only)

<!-- HTML -->
<button id="menuBtn">☰</button>
<ul id="menuList">
  <li>Home</li>
  <li>About</li>
  <li>Contact</li>
</ul>
css
Copy
Edit
/* CSS */
#menuBtn {
  display: none;
}

@media (max-width: 768px) {
  #menuBtn {
    display: block;
  }
  #menuList {
    display: none;
  }
}
js
Copy
Edit
// JavaScript
let btn = document.getElementById("menuBtn");
let list = document.getElementById("menuList");

btn.addEventListener("click", function () {
  if (list.style.display === "block") {
    list.style.display = "none";
  } else {
    list.style.display = "block";
  }
});
🖼️ Image Scrollbar Example Using Buttons
js
Copy
Edit
let scrollBox = document.querySelector(".imgContainer");
let leftBtn = document.getElementById("left");
let rightBtn = document.getElementById("right");

rightBtn.addEventListener("click", () => {
  scrollBox.scrollLeft += 200;
});

leftBtn.addEventListener("click", () => {
  scrollBox.scrollLeft -= 200;
});
📌 += 200 → Move right by 200 pixels
📌 -= 200 → Move left by 200 pixels




console.log("User clicked button");
Use flags like let isOpen = true; to toggle things

🤖 Useful Pattern for Toggling:
js
Copy
Edit
let visible = true;

btn.addEventListener("click", function () {
  someElement.style.display = visible ? "none" : "block";
  visible = !visible;
});
✅ 1. Mouse Events
Event	Description
click	User clicks on an element
dblclick	User double-clicks
mousedown	Mouse button is pressed
mouseup	Mouse button is released
mousemove	Mouse is moved
mouseenter	Cursor enters an element
mouseleave	Cursor leaves an element

✅ 2. Keyboard Events
Event	Description
keydown	Key is pressed down
keyup	Key is released
keypress	Key is pressed (deprecated)

✅ 3. Form Events
Event	Description
submit	Form is submitted
change	Value of an element changes
input	User inputs something (live typing)
focus	Element is focused (clicked/selected)
blur	Element loses focus

✅ 4. Window Events
Event	Description
load	Page or resource finishes loading
resize	Window is resized
scroll	Page is scrolled
unload	User leaves the page

✅ 5. Clipboard Events
Event	Description
copy	User copies content
cut	User cuts content
paste	User pastes content

✅ 6. Drag and Drop Events
Event	Description
drag	Element is being dragged
dragstart	Dragging starts
dragend	Dragging ends
dragover	Item is dragged over a target
drop	Item is dropped

1. Click Event (click)

<button id="btn">Click Me</button>
<script>
  document.getElementById("btn").addEventListener("click", function() {
    alert("Button clicked!");
  });
</script>
2. Mouse Events Example

<div id="box" style="width:100px; height:100px; background:red;"></div>
<script>
  let box = document.getElementById("box");
  box.addEventListener("mouseover", () => box.style.background = "green");
  box.addEventListener("mouseout", () => box.style.background = "red");
</script>
3. Keyboard Events Example

<input type="text" id="input" placeholder="Type here">
<p id="log"></p>
<script>
  let input = document.getElementById("input");
  let log = document.getElementById("log");
  input.addEventListener("keydown", function(e) {
    log.textContent = `You pressed: ${e.key}`;
  });
</script>
4. Change Event Example

<select id="device">
  <option>Choose</option>
  <option>Mobile</option>
  <option>Laptop</option>
</select>
<script>
  document.getElementById("device").addEventListener("change", function(e) {
    alert(`You selected: ${e.target.value}`);
  });
</script>
5. Focus & Blur Example

<input type="text" id="name" placeholder="Enter name">
<p id="hint" style="display:none;">Name must be at least 3 characters</p>
<script>
  let name = document.getElementById("name");
  let hint = document.getElementById("hint");
  name.addEventListener("focus", () => hint.style.display = "block");
  name.addEventListener("blur", () => hint.style.display = "none");
</script>
6. Input Event Example

<input type="text" id="search" placeholder="Type something...">
<p id="live"></p>
<script>
  document.getElementById("search").addEventListener("input", function(e) {
    document.getElementById("live").textContent = e.target.value;
  });
</script>
7. Submit Event Example

<form id="myForm">
  <input type="text" required>
  <button type="submit">Submit</button>
</form>
<script>
  document.getElementById("myForm").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Form submitted!");
  });
</script>
8. Load Event Example

<body onload="alert('Page fully loaded!')">
9. Scroll Event Example

window.addEventListener("scroll", () => {
  console.log("Scrolled: ", window.scrollY);
});
10. Double Click Event Example

<p id="para">Double-click to change text</p>
<script>
  document.getElementById("para").addEventListener("dblclick", function() {
    this.textContent = "Text Changed!";
  });
</script>
11. Resize Event Example

window.addEventListener("resize", function() {
  console.log("Width:", window.innerWidth);
});
