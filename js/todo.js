const ToDoForm = document.getElementById("todo");
const TodoInput = ToDoForm.querySelector("input");
const ToDoList = document.getElementById("Todo-list");

const TODOS_KEY = "todos";
let toDos = [];

function saveTodos(){
    //console.log(`saveTodos() list toDos == ${toDos}`);
    localStorage.setItem(TODOS_KEY,JSON.stringify(toDos));
}

function deleteTodo (event){
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((todo) => {
        return todo.id !== parseInt(li.id);
    });
    saveTodos();
}

function paintTodo (newTodo){
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const butten = document.createElement("button");
    butten.innerText = "X";
    butten.addEventListener("click",deleteTodo )

    li.appendChild(span);
    li.appendChild(butten);
    ToDoList.appendChild(li);

}

function handleTodoSubmit (event){
    event.preventDefault();
    const newTodo = TodoInput.value;
    TodoInput.value = "";
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
      };
      toDos.push(newTodoObj);
      paintTodo(newTodoObj);
    saveTodos();
}

ToDoForm.addEventListener("submit",handleTodoSubmit);

const savedTodos = localStorage.getItem(TODOS_KEY);

if (savedTodos !== null) {
    const parsedToDos = JSON.parse(savedTodos);
    toDos = parsedToDos;
    
    parsedToDos.forEach(element => paintTodo(element));
    }
  