let val;

const list = document.querySelector("ul.collection");
const listItem = document.querySelector("li.collection-item:first-child");

val = list;
val = listItem;

// HTML collection
val = list.children;
// get childNodes
val = list.childNodes;
val = list.childNodes[0];
val = list.childNodes[0].nodeType;

/*Node type
1:Element
2:attribute
3:text node
8:Comment
9:Documnet itself
10:Doctype
*/

// get children element nodes
val = list.children[2];
list.children[1].textContent = "Hello";

// Children of Children
val = list.children[3].children;

// We can also add id to the children of children
list.children[3].children[0].id = "new-id";
val = list.children[3].children[0];

// list.children.id = "id"; yesari id rakhna pani milcha
val = list.children;

// euta child lina pani milcha but it gives #text which is nodelist
val = list.firstChild;
// so use this to get HTML element
val = list.firstElementChild;

// Last child
val = list.lastChild;
list.lastElementChild.id = "put";
val = list.lastElementChild;

// Parent node
val = list.parentNode;
val = list.parentElement;
// they both usually gives same o/p

// Parent of parent
val = list.parentElement.parentElement;

// get next sibling
val = listItem.nextSibling;
// this gives #text so do this
val = listItem.nextElementSibling;

// another sibling
val = list.nextElementSibling.nextElementSibling;
val = listItem.nextElementSibling.nextElementSibling;

// Previous sibling
val = listItem.previousElementSibling;
val = list.previousElementSibling;
// We can also go through previous of previous

console.log(val);
