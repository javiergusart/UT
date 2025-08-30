let taskInput = document.getElementById("taskInput");
let addTask = document.getElementById("addTask");
let taskList = document.getElementById("taskList");

addTask.addEventListener("click", addNewTask);

function addNewTask() {
  //get the user input
  let taskName = taskInput.value.trim();
  if (taskName === "") return;
  //create the element that represents the task
  let li = document.createElement("li");
  li.innerHTML =
    `<input type="checkbox">` +
    `<span class="task">` +
    taskName +
    `</span>` +
    `<button class="delete">Delete</button>`;

  let deleteButton = li.querySelector(".delete");
  deleteButton.addEventListener("click", () => {
    li.remove();
  });
  //render this task in the taskList
  taskList.appendChild(li);
  //reset the value in the input
  taskInput.value = "";
}
