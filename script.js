// Find the elements on the page using the id name tags we gave them.
const todoInput = document.getElementById("todo-input");
const addBtn = document.getElementById("add-btn");

// NEW: also find the empty list, because we will add tasks into it.
const todoList = document.getElementById("todo-list");

// Runs each time the Add button is clicked.
function addTodo() {
  // .value is whatever text is currently typed in the input box.
  const text = todoInput.value;

  // NEW: create a brand new <li> element in memory.
  // It is not on the page yet, it only exists in JavaScript for now.
  const li = document.createElement("li");

  // NEW: put the typed text inside the <li>.
  // textContent is safe: it treats the text as plain text, not HTML.
  li.textContent = text;

  // NEW: attach the <li> to the <ul>. Now it shows up on the page.
  todoList.appendChild(li);
}

// When addBtn is clicked, run the addTodo function.
addBtn.addEventListener("click", addTodo);
