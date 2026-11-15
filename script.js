// Find the elements on the page using the id name tags we gave them.
const todoInput = document.getElementById("todo-input");
const addBtn = document.getElementById("add-btn");

// Find the empty list, because we add tasks into it.
const todoList = document.getElementById("todo-list");

// Runs each time the Add button is clicked.
function addTodo() {
  // .value is whatever text is currently typed in the input box.
  const text = todoInput.value;

  // Create a brand new <li> element in memory.
  const li = document.createElement("li");

  // Put the typed text inside the <li>.
  li.textContent = text;

  // Attach the <li> to the <ul>. Now it shows up on the page.
  todoList.appendChild(li);

  // Set the input box's value to an empty string.
  // This wipes the old text so you can type the next task right away.
  todoInput.value = "";
}

// When addBtn is clicked, run the addTodo function.
addBtn.addEventListener("click", addTodo);
