const taskInput = document.getElementById("taskInput");
const addTask = document.getElementById("addTask");
const taskList = document.getElementById("taskList");
const showAllButton = document.getElementById("showAll");
const showActiveButton = document.getElementById("showActive");
const showCompletedButton = document.getElementById("showCompleted");

addTask.addEventListener("click", addNewTask);
showAllButton.addEventListener("click", () => renderFilteredTasks("all"));
showActiveButton.addEventListener("click", () => renderFilteredTasks("active"));
showCompletedButton.addEventListener("click", () =>
  renderFilteredTasks("completed")
);

const tasks = [];

function addNewTask() {
  const taskText = taskInput.value.trim();
  if (taskText === "") return;

  const newTask = { text: taskText, completed: false, deleted: false };
  tasks.push(newTask);

  taskInput.value = "";
  renderFilteredTasks("all");
}

function renderFilteredTasks(filterType) {
  const filteredTasks = filterTasks(filterType);
  renderTasks(filteredTasks);
}

function filterTasks(filterType) {
  resetButtonsBackground();
  switch (filterType) {
    case "all":
      showAllButton.style.backgroundColor = "#3F3047";
      return tasks.filter((task) => !task.deleted);
    case "active":
      showActiveButton.style.backgroundColor = "#3F3047";
      return tasks.filter((task) => !task.completed && !task.deleted);
    case "completed":
      showCompletedButton.style.backgroundColor = "#3F3047";
      return tasks.filter((task) => task.completed && !task.deleted);
    default:
      return [];
  }
}

function resetButtonsBackground() {
  showAllButton.style.backgroundColor = "#007BFF";
  showActiveButton.style.backgroundColor = "#007BFF";
  showCompletedButton.style.backgroundColor = "#007BFF";
}

function renderTasks(filteredTasks) {
  taskList.innerHTML = "";

  filteredTasks.forEach((task) => {
    const li = document.createElement("li");
    li.innerHTML = `<input type="checkbox" ${
      task.completed ? "checked" : ""
    }><span class="task ${task.completed ? "completed" : ""}">${
      task.text
    }</span><button class="delete">Delete</button>`;

    const deleteButton = li.querySelector(".delete");
    if (deleteButton)
      deleteButton.addEventListener("click", () =>
        deleteTask(tasks.indexOf(task))
      );

    const checkbox = li.querySelector("input[type=checkbox]");
    if (checkbox)
      checkbox.addEventListener("change", () =>
        toggleCompletion(tasks.indexOf(task))
      );

    taskList.appendChild(li);
  });
}

function deleteTask(index) {
  tasks[index].deleted = true;
  renderFilteredTasks("all");
}

function toggleCompletion(index) {
  tasks[index].completed = !tasks[index].completed;
  renderFilteredTasks("all");
}

renderFilteredTasks("all");
