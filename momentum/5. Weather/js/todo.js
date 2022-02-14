const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
  // event.target = 입력된 ToDo값, 의 parentElement이기때문에 ToDo가 입력된 li를 가리키게됨
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDos();
}

function paintToDo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  span.innerText = newTodo.text;

  const button = document.createElement("button");
  button.innerText = "Delete";
  button.addEventListener("click", deleteToDo);

  li.appendChild(span);
  li.appendChild(button);

  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newToDo = toDoInput.value;
  console.log(newToDo);
  toDoInput.value = "";
  const newTodoObj = {
    text: newToDo,
    id: Date.now(),
  };
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

// function sayHello(item) {
//   console.log("this is the turn of", item);
// }

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos) {
  const parsedToDos = JSON.parse(savedToDos);
  // 새로고침할때 toDos가 []로 초기화되어버리는것을 방지하기위해 toDos에 현재 localStorage에 있는 값을 다시 넣어줌
  toDos = parsedToDos;
  // parsedToDos.forEach(sayHello);
  parsedToDos.forEach(paintToDo);
}
