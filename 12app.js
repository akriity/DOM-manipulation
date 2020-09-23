// // Session storage
// sessionStorage.setItem("roll", 6);
// // Local storage
// localStorage.setItem("name", "Akriti");

// // To get value
// const name = localStorage.getItem("name");
// console.log(name);

// to remove local storage
//  localStorage.removeItem("name");

// // to clear local storage
//  localStorage.clear();

// To get the value from the form submitted
document.querySelector("form").addEventListener("submit", function (e) {
  const task = document.getElementById("task").value;

  let tasks;
  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }
  tasks.push(task);
  localStorage.setItem("tasks", JSON.stringify(tasks));

  alert("Task submited");
});

// To pull the value
const tasks = JSON.parse(localStorage.getItem("tasks"));
tasks.forEach(function (task) {
  console.log(task);
});
