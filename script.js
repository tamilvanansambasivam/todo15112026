// Find the elements on the page using the id name tags we gave them.
const todoInput = document.getElementById("todo-input");
const addBtn = document.getElementById("add-btn");

// Find the empty list, because we add tasks into it.
const todoList = document.getElementById("todo-list");

// Runs each time the Add button is clicked.
function addTodo() {
  // .trim() removes spaces from the start and end of the text.
  const text = todoInput.value.trim();

  // If the text is empty, stop here.
  if (!text) {
    return;
  }

  // Create a brand new <li> element in memory.
  const li = document.createElement("li");

  // Put the typed text inside the <li>.
  li.textContent = text;

  // NEW: when this <li> is clicked, run the code inside { }.
  // classList.toggle("done") adds the "done" class if it is missing,
  // and removes it if it is already there. So each click flips
  // the task between done and not done.
  li.addEventListener("click", function () {
    li.classList.toggle("done");
  });

  // Attach the <li> to the <ul>. Now it shows up on the page.
  todoList.appendChild(li);

  // Set the input box's value to an empty string.
  todoInput.value = "";
}

// When addBtn is clicked, run the addTodo function.
addBtn.addEventListener("click", addTodo);
