// create new element
const newHeading = document.createElement("h2");

// assign id,class or whatever is needed
newHeading.id = "task-title";
// append text node
newHeading.appendChild(document.createTextNode("New task"));
// find the old element to be replaced
const oldHeading = document.querySelector("#task-title");
// Find it parent class or id
const parent = document.querySelector(".card-action");
// replace the child of the parent by new child
parent.replaceChild(newHeading, oldHeading);
console.log(oldHeading);
console.log(newHeading);

// Remove elements
const lis = document.querySelectorAll("li");
lis[0].remove();

// Remove element by parent
const list = document.querySelector("ul");
list.removeChild(lis[2]);

// Class and attribute

// CLASS
const firstLi = document.querySelector("li:first-child");
const link = firstLi.children[0];

let val;
link.classList.add("test");
link.classList.remove("test");
link.id = "Test";

// ATTRIBUTE
val = link.getAttribute("href");
val = link.setAttribute("href", "http://google.com");
val = link.setAttribute("title", "Google");
val = link.removeAttribute("title");
val = link;
console.log(val);
