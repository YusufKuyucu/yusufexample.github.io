"use strict";

var input = document.querySelector("#new-input");
var newBtn = document.querySelector("#new-btn");
var todos = document.querySelector(".todos");
newBtn.addEventListener("click", addTodo);

function addTodo(e) {
  // Create todo item
  var task = document.createElement("div");
  task.classList.add("todo");
  task.innerText = "".concat(input.value); //Create check button

  var checkBtn = document.createElement("button");
  checkBtn.innerHTML = "✔";
  checkBtn.addEventListener("click", checkTodo); // Create delete button

  var delBtn = document.createElement("button");
  delBtn.innerHTML = " <i class=\"fas fa-trash\"></i> ";
  delBtn.addEventListener("click", delTodo); // Create span

  var newSpan = document.createElement("span");
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
  var currentElement = e.target.parentElement.parentElement.parentElement;
  currentElement.classList.forEach(function (element) {
    if (element == "todo") {
      currentElement.remove();
    }
  });
}