const ToDoForm = document.getElementById("todo");
const TodoInput = ToDoForm.querySelector("input");
const ToDoList = document.getElementById("Todo-list");

const TODOS_KEY = "todos";
let toDos = [];

function saveTodos(){
    localStorage.setItem(TODOS_KEY,JSON.stringify(toDos));
}

function deleteTodo (event ){
    const li = event.target.parentElement;
    li.remove();
}

function paintTodo (newTodo){
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = newTodo;
    const butten = document.createElement("button");
    butten.innerText = "x";
    butten.addEventListener("click",deleteTodo )

    li.appendChild(span);
    li.appendChild(butten);
    ToDoList.appendChild(li);

}

function handleTodoSubmit (event){
    event.preventDefault();
    const newTodo = TodoInput.value;
    TodoInput.value = "";
    toDos.push(newTodo);
    paintTodo (newTodo);
    saveTodos();
}

ToDoForm.addEventListener("submit",handleTodoSubmit);

const savedTodos = localStorage.getItem(TODOS_KEY);

if (savedTodos !== null) {
    const parsedToDos = JSON.parse(savedTodos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintTodo);
  }