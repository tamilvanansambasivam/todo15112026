// Find the elements on the page using the id name tags we gave them.
// document.getElementById("...") returns the matching element.
// const means these variables won't be reassigned later.
const todoInput = document.getElementById("todo-input");
const addBtn = document.getElementById("add-btn");

// A function is a named block of code we can run whenever we want.
// This one will run each time the Add button is clicked.
function addTodo() {
  // .value is whatever text is currently typed in the input box.
  const text = todoInput.value;

  // Print it to the console so we can confirm we are reading it correctly.
  console.log("You typed:", text);
}

// Tell the browser: "when addBtn is clicked, run the addTodo function".
// Note: we write addTodo without (), because we are handing over
// the function itself, not running it right now.
addBtn.addEventListener("click", addTodo);
