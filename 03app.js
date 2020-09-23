// // document.getElementById
// console.log(document.getElementById("task-title"));

// // get things from the element
// console.log(document.getElementsByClassName("task-title").className);

// // to change style
// document.getElementById("task-title").style.background = "#333";
// document.getElementById("task-title").style.color = "red";

// const todo = document.getElementById("task-title");
// // to change the content
// todo.textContent = "Hello";
// todo.innerText = "Hey";
// todo.innerHTML = '<span style="background:yellow">Hey </span>';

/* query selector is much more powerful because we dont
  have to select by ID we can select using any CSS selector*/

// documnet.querySelector()
console.log(document.querySelector("#task-title"));
console.log(document.querySelector(".card-title"));
console.log(document.querySelector("h5"));

// single element selector so the following code takes just one element
document.querySelector("li").style.color = "red";
document.querySelector("li:nth-child(3)").style.color = "green";
document.querySelector("li:nth-child(even)").style.color = "purple";
