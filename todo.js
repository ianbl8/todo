let todoItems = [];

function uuidv4() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0, v = c == "x" ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
};

function renderTodo(todo) {
  const table = document.getElementById("todo-table");
  const row = table.insertRow(-1);
  const textCell = row.insertCell(0);
  textCell.innerText = todo.text;
  const dateCell = row.insertCell(1);
  dateCell.innerText = todo.date;
  const deleteCell = row.insertCell(2);
  deleteCell.innerHTML = `<a onclick="deleteTodo('${todo.id}')" class="uk-button uk-button-default">delete</a>`;
};

function renderAllTodos() {
  for (let i = 0; i < todoItems.length; i++) {
    renderTodo(todoItems[i]);
  };
};

function clearAllTodos() {
  let table = document.getElementById("todo-table");
  for (let i = 0; i < todoItems.length; i++) {
    table.deleteRow(-1);
  };
};

function addTodo() {
  const todoText = document.getElementById("todo-id").value;
  const todo = {
    text: todoText,
    date: new Date().toLocaleString("en-IE"),
    id: uuidv4(),
  };
  todoItems.push(todo);
  renderTodo(todo);
  console.log(`Add item: ${todo.id}`);
};

function deleteTodo(id) {
  clearAllTodos();
  const found = todoItems.findIndex((todo) => todo.id == id);
  const done = todoItems[found];
  todoItems.splice(found, 1);
  renderAllTodos();
  addDone(done);
  console.log(`Delete item: ${id}`);
};

function addDone(doneItem) {
  const table = document.getElementById("done-table");
  const row = table.insertRow(-1);
  const textCell = row.insertCell(0);
  textCell.innerText = doneItem.text;
  const dateCell = row.insertCell(1);
  dateCell.innerText = doneItem.date;
}
