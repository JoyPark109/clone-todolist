const toDoForm = document.querySelector("#todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.querySelector("#todo-list");

toDoForm.addEventListener("submit", toDoSubmit)

const TODO_KEY = "todos";

let todos = [];

function toDoSubmit(event) {
    event.preventDefault();
    const newdo = toDoInput.value;
    toDoInput.value = "";
    const newdoObject = {
        text: newdo,
        id: Date.now(),
    };
    todos.push(newdoObject);
    todoShow(newdoObject);
    todoSave();
}

function todoShow(newdo) {
    const li = document.createElement("li");
    li.id = newdo.id;
    const span = document.createElement("span");
    span.innerText = newdo.text;
    const button = document.createElement("button");
    button.innerText = "delete";
    button.addEventListener("click", todoDelete);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function todoSave() {
    localStorage.setItem(TODO_KEY, JSON.stringify(todos));
}

function todoDelete(event) {
    const toDoLi = event.target.parentElement;
    toDoLi.remove();
    todos = todos.filter((toDo) => toDo.id !== parseInt(toDoLi.id));
    todoSave(); 
}

const todoSaved = localStorage.getItem(TODO_KEY);

if (todoSaved !== null) {
    const todoParse = JSON.parse(todoSaved);
    todos = todoParse;
    todoParse.forEach(todoShow);
}