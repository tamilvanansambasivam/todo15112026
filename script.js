// Find the elements on the page using the id name tags we gave them.
const todoInput = document.getElementById("todo-input");
const addBtn = document.getElementById("add-btn");
const todoList = document.getElementById("todo-list");

// NEW: this array is now the single source of truth for all tasks.
// Each task is an object like { text: "Buy milk", done: false }.
// let is used because we will change this array over time.
let todos = [];

// NEW: render() redraws the whole list on the page from the todos array.
// Whenever the data changes, we change the array and then call render().
function render() {
  // Wipe the list on the page so we can rebuild it from scratch.
  todoList.innerHTML = "";

  // forEach runs the code below once for every task in the array.
  // "todo" is the current task, "index" is its position (0, 1, 2...).
  todos.forEach(function (todo, index) {
    const li = document.createElement("li");

    // The span holds the task text.
    const span = document.createElement("span");
    span.textContent = todo.text;

    // If this task is marked done, give the span the "done" class.
    if (todo.done) {
      span.classList.add("done");
    }

    // Clicking the text flips done between true and false,
    // then redraws the list so the change shows up.
    span.addEventListener("click", function () {
      todo.done = !todo.done;
      render();
    });

    // The Delete button.
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";

    // splice(index, 1) removes 1 item from the array at this position.
    // Then we redraw the list.
    deleteBtn.addEventListener("click", function () {
      todos.splice(index, 1);
      render();
    });

    // Put the text and button inside the <li>, and the <li> in the list.
    li.appendChild(span);
    li.appendChild(deleteBtn);
    todoList.appendChild(li);
  });
}

// Runs each time the Add button is clicked.
function addTodo() {
  // .trim() removes spaces from the start and end of the text.
  const text = todoInput.value.trim();

  // If the text is empty, stop here.
  if (!text) {
    return;
  }

  // CHANGED: instead of building HTML here, add a task object to the array.
  todos.push({ text: text, done: false });

  // Clear the input box.
  todoInput.value = "";

  // CHANGED: redraw the list from the array.
  render();
}

// When addBtn is clicked, run the addTodo function.
addBtn.addEventListener("click", addTodo);
