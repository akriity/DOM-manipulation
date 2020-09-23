// Multiple Element Selector

// document.getElementsByClassName
// const items = document.getElementsByClassName("collection-item");
// console.log(items);
/*op=all elements of the class
proto:HTMLCollection
*/
// console.log(items[0]);
// items[0].style.color = "red";
// items[3].style.background = "blue";

// // Query selector
// const listItems = document
//   .querySelector("ul")
//   .getElementsByClassName("collection-item");
// console.log(listItems);

// // document.getElementsByTagName

// let lis = document.getElementsByTagName("li");
// console.log(lis);
// console.log(lis[0]);
// lis[2].style.color = "orange";
// lis[1].textContent = "Hello";

// // Convert HTML Collection to array
// lis = Array.from(lis);
// lis.reverse();
// lis[0].style.color = "pink";
// lis.forEach(function (li, index) {
//   console.log(li.className);
//   li.textContent = `${index}:Hello`;
// });

// console.log(lis);

// document.querySelectorAll

const items = document.querySelectorAll("ul.collection li.collection-item");

items.forEach(function (item, index) {
  item.textContent = `${index}:Hello`;
});

const liOdd = document.querySelectorAll("li:nth-child(odd)");
const liEven = document.querySelectorAll("li:nth-child(even)");

liOdd.forEach(function (li, index) {
  li.style.background = "#ccc";
});

for (let i = 0; i < liEven.length; i++) {
  liEven[i].style.background = "#f4f4f4";
}
console.log(items);
