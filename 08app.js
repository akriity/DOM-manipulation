document.querySelector(".clear-tasks").addEventListener("click", function (e) {
  console.log("HEllo World");
  //   e.preventDefault();
});

// with named function
document.querySelector(".clear-tasks").addEventListener("click", onClick);
function onClick(e) {
  //   console.log("Clicked");

  // to know the target oject further  we can do following
  let val;
  val = e;

  //   Event target element
  val = e.target.className;
  val = e.target.id;
  val = e.target.classList;
  //   name nai change gardina pani milcha after an event of clicking
  e.target.innerText = "HEllo";

  //   Event type
  val = e.type; /*op=click..because click ko event thyo*/

  //   Coordinate event relative to the window
  val = e.clientY;
  val = e.clientX;

  //   Coordinate event relative to the element
  val = e.offsetY;
  val = e.offsetX;

  console.log(val);
}
