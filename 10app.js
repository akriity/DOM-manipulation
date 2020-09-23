const form = document.querySelector("form");
const taskInput = document.getElementById("task");

// form.addEventListener("submit", runEvent);

// Keyboard events
// taskInput.addEventListener("keydown", runEvent);
// taskInput.addEventListener("keyup", runEvent);
// taskInput.addEventListener("keypress", runEvent);
// taskInput.addEventListener("focus", runEvent);
// taskInput.addEventListener("blur", runEvent);
// taskInput.addEventListener("cut", runEvent);
// taskInput.addEventListener("paste", runEvent);

// Input event
taskInput.addEventListener("input", runEvent);

// change event is also available if you have select list
// select.addEventListener('change',runEvent);
function runEvent(e) {
  console.log(`EVENT TYPE: ${e.type}`);
  //   console.log(taskInput.value);
  console.log(e.target.value);
}
