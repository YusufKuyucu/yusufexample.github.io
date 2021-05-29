const input = document.querySelector("#new-input");
const newBtn = document.querySelector("#new-btn");
const todos = document.querySelector(".todos");

newBtn.addEventListener("click", addTodo);

function addTodo(e) {
  // Create todo item
  let task = document.createElement("div");
  task.classList.add("todo");
  task.innerText = `${input.value}`;

  //Create check button
  let checkBtn = document.createElement("button");
  checkBtn.innerHTML = "✔";
  checkBtn.addEventListener("click", checkTodo);

  // Create delete button
  let delBtn = document.createElement("button");
  delBtn.innerHTML = ` <i class="fas fa-trash"></i> `;
  delBtn.addEventListener("click", delTodo);

  // Create span
  let newSpan = document.createElement("span");

  newSpan.appendChild(checkBtn);
  newSpan.appendChild(delBtn);
  task.appendChild(newSpan);

  if (input.value !== "") {
    todos.appendChild(task);
    todoList.push(input.value);
    input.value = "";
    console.log(todoList);
  }
}

function checkTodo(e) {
  e.target.parentElement.parentElement.classList.add("checked");
}
function delTodo(e) {
  let currentElement = e.target.parentElement.parentElement.parentElement;
  currentElement.classList.forEach((element) => {
    if (element == "todo") {
      currentElement.remove();
    }
  });
}
