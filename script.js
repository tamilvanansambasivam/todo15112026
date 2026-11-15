// Find the elements on the page using the id name tags we gave them.
const todoInput = document.getElementById("todo-input");
const addBtn = document.getElementById("add-btn");
const todoList = document.getElementById("todo-list");

// NEW: the name (key) under which we store our tasks in the browser.
const STORAGE_KEY = "todos";

// CHANGED: instead of starting with an empty array, we call loadTodos()
// (defined just below). Function declarations are available before
// the line where they are written, so this works.
let todos = loadTodos();

// NEW: save the todos array into the browser's localStorage.
// localStorage can only store text, so JSON.stringify converts
// the array into a text string first.
function saveTodos() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
}

// NEW: read the saved text back from localStorage.
function loadTodos() {
  // getItem returns null if nothing has been saved yet.
  const saved = localStorage.getItem(STORAGE_KEY);

  // If nothing is saved, start with an empty array.
  if (!saved) {
    return [];
  }

  // JSON.parse converts the saved text back into a real array.
  return JSON.parse(saved);
}

// Redraws the whole list on the page from the todos array.
function render() {
  // Wipe the list on the page so we can rebuild it from scratch.
  todoList.innerHTML = "";

  todos.forEach(function (todo, index) {
    const li = document.createElement("li");

    // The span holds the task text.
    const span = document.createElement("span");
    span.textContent = todo.text;

    // If this task is marked done, give the span the "done" class.
    if (todo.done) {
      span.classList.add("done");
    }

    // Clicking the text flips done, saves, then redraws.
    span.addEventListener("click", function () {
      todo.done = !todo.done;
      saveTodos(); // NEW
      render();
    });

    // The Delete button.
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";

    // Remove the task, save, then redraw.
    deleteBtn.addEventListener("click", function () {
      todos.splice(index, 1);
      saveTodos(); // NEW
      render();
    });

    li.appendChild(span);
    li.appendChild(deleteBtn);
    todoList.appendChild(li);
  });
}

// Runs each time the Add button is clicked.
function addTodo() {
  const text = todoInput.value.trim();

  // If the text is empty, stop here.
  if (!text) {
    return;
  }

  // Add a task object to the array.
  todos.push({ text: text, done: false });

  // Clear the input box.
  todoInput.value = "";

  saveTodos(); // NEW
  render();
}

// When addBtn is clicked, run the addTodo function.
addBtn.addEventListener("click", addTodo);

// NEW: draw the saved tasks as soon as the page loads.
render();
