// create element
const li = document.createElement("li");

// Add class
li.className = "collection-item";

// Add id
li.id = "new-item";

// Add attribute
li.setAttribute("title", "New Item");

// Create text node and append
li.appendChild(document.createTextNode("Hello World"));

// // Append i.e put the li as new child to ul
document.querySelector("ul.collection").appendChild(li);

// create link
const link = document.createElement("a");
// create class
link.className = "delete-item secondary-content";
// create sub html
link.innerHTML = ' <i class="fa fa-remove"></i>';
// append
li.appendChild(link);
console.log(li);
