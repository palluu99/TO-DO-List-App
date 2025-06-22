let taskList = JSON.parse(localStorage.getItem("tasks")) || [];

function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(taskList));
}

function renderTasks() {
  const list = document.getElementById("taskList");
  list.innerHTML = "";

  taskList.forEach((task, index) => {
    const li = document.createElement("li");
    if (task.completed) li.classList.add("completed");

    li.innerHTML = `
      <input type="checkbox" onchange="toggleTask(${index})" ${task.completed ? "checked" : ""}>
      <span>${task.text}</span>
      <button onclick="deleteTask(${index})">X</button>
    `;
    list.appendChild(li);
  });
}

function addTask() {
  const input = document.getElementById("taskInput");
  const text = input.value.trim();

  if (text) {
    taskList.push({ text, completed: false });
    saveTasks();
    renderTasks();
    input.value = "";
  }
}

function toggleTask(index) {
  taskList[index].completed = !taskList[index].completed;
  saveTasks();
  renderTasks();
}

function deleteTask(index) {
  taskList.splice(index, 1);
  saveTasks();
  renderTasks();
}

renderTasks();
