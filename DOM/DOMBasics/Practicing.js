//     function create(){
//         //pehly parent ko target karo jha append krna chahthy ho
//         let parent=document.getElementById("para");
//         //ab jonsa bhi elelemt create krna h karo
//         let  new1=document.createElement("p");
//         //osmai text likho
//         new1.innerText="Hello Dear how are you ";
//         //jo elelemt bananaya h ossy append karo parent mai
//         // parent.appendChild(new1);
//         //agr body mai append krna ho too




//practicing with get and remove attributes
function deletecard(id) {
  console.log("Function chla");
  console.log("iD YAI H ", id);
  let card = document.getElementById(id);
  console.log("Card yai wala h ", card);
  card.remove();
}

//practicing with setattributes

function highlightCard(id) {
  let card = document.getElementById(id);
  // Set the style attribute
  card.setAttribute("style", "background-color: yellow; padding: 10px;");
}

let hover = document.getElementById("para");
hover.setAttribute("style", "cursor:pointer");
hover.setAttribute("title", "This is a tooltip");

function highlightCard(id) {
  let card = document.getElementById(id);
  card.setAttribute("style", "background-color: yellow; padding: 10px;");
}

function create() {
  // 1. Create a <div> element and give it class 'card'
  let card = document.createElement("div");
  card.setAttribute("class", "card");
  console.log("Div card created:", card);

  // 2. Create a <p> tag and set text inside it
  let para = document.createElement("p");
  para.innerText = "Item: CSS Book";
  console.log("Paragraph created with text:", para.innerText);

  // 3. Create a <button> and set text inside it
  let button = document.createElement("button");
  button.innerText = " New Highlight";
  console.log("Button created with text:", button.innerText);

  // 4. Set onclick event for the button
  button.onclick = function () {
    card.setAttribute("style", "background-color: red; padding: 10px;");
    console.log("Card highlighted with red background.");
  };

  // 5. Append <p> and <button> inside the card
  card.appendChild(para);
  card.appendChild(button);
  console.log("Paragraph and button appended to card.");

  // 6. Append the complete card into the body
  document.body.appendChild(card);
  console.log("Card appended to body.");
}