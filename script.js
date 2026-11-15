// Find the elements on the page using the id name tags we gave them.
const todoInput = document.getElementById("todo-input");
const addBtn = document.getElementById("add-btn");

// Find the empty list, because we add tasks into it.
const todoList = document.getElementById("todo-list");

// Runs each time the Add button is clicked.
function addTodo() {
  // NEW: .trim() removes spaces from the start and end of the text.
  // This way a box containing only spaces counts as empty too.
  const text = todoInput.value.trim();

  // NEW: if the text is empty, stop here.
  // "return" exits the function immediately, so nothing below runs.
  // The ! means "not", and an empty string counts as false,
  // so !text is true when there is no text.
  if (!text) {
    return;
  }

  // Create a brand new <li> element in memory.
  const li = document.createElement("li");

  // Put the typed text inside the <li>.
  li.textContent = text;

  // Attach the <li> to the <ul>. Now it shows up on the page.
  todoList.appendChild(li);

  // Set the input box's value to an empty string.
  todoInput.value = "";
}

// When addBtn is clicked, run the addTodo function.
addBtn.addEventListener("click", addTodo);
