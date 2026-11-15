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

  // NEW: create a <span> to hold the task text.
  // The <li> will now contain two things (the text and a delete button),
  // so the text needs its own element. Otherwise clicking Delete
  // would also count as clicking the task and toggle "done".
  const span = document.createElement("span");
  span.textContent = text;

  // CHANGED: the click-to-toggle now listens on the <span>, not the <li>.
  span.addEventListener("click", function () {
    span.classList.toggle("done");
  });

  // NEW: create the Delete button.
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";

  // NEW: when Delete is clicked, remove the whole <li> from the page.
  deleteBtn.addEventListener("click", function () {
    li.remove();
  });

  // NEW: put the text and the button inside the <li>.
  // appendChild adds them in order: text first, then button.
  li.appendChild(span);
  li.appendChild(deleteBtn);

  // Attach the <li> to the <ul>. Now it shows up on the page.
  todoList.appendChild(li);

  // Set the input box's value to an empty string.
  todoInput.value = "";
}

// When addBtn is clicked, run the addTodo function.
addBtn.addEventListener("click", addTodo);
