// Get DOM Elements
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const clearAllBtn = document.getElementById("clearAllBtn");
const filterButtons = document.querySelectorAll(".filters button");

// Add Task
addTaskBtn.addEventListener("click", () => {
  const taskText = taskInput.value.trim();
  if (taskText !== "") {
    addTask(taskText);
    taskInput.value = "";
  } else {
    alert("Please enter a task!");
  }
});

// Add task to list
function addTask(taskText) {
  const li = document.createElement("li");

  // Create span (task text)
  const span = document.createElement("span");
  span.textContent = taskText;

  // Mark as completed on click
  span.addEventListener("click", () => {
    li.classList.toggle("completed");
    saveTasks();
  });

  // Delete button
  const delBtn = document.createElement("button");
  delBtn.textContent = "Delete";
  delBtn.addEventListener("click", () => {
    li.remove();
    saveTasks();
  });

  li.appendChild(span);
  li.appendChild(delBtn);

  taskList.appendChild(li);
  saveTasks();
}

// Clear All
clearAllBtn.addEventListener("click", () => {
  if (confirm("Are you sure you want to clear all tasks?")) {
    taskList.innerHTML = "";
    saveTasks();
  }
});

// Filter Tasks
filterButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelector(".filters .active").classList.remove("active");
    btn.classList.add("active");

    const filter = btn.getAttribute("data-filter");
    filterTasks(filter);
  });
});

function filterTasks(filter) {
  const tasks = taskList.querySelectorAll("li");
  tasks.forEach(task => {
    switch (filter) {
      case "all":
        task.style.display = "flex";
        break;
      case "completed":
        task.style.display = task.classList.contains("completed") ? "flex" : "none";
        break;
      case "pending":
        task.style.display = task.classList.contains("completed") ? "none" : "flex";
        break;
    }
  });
}

// Save tasks to localStorage (optional but useful)
function saveTasks() {
  const tasks = [];
  taskList.querySelectorAll("li").forEach(li => {
    tasks.push({
      text: li.querySelector("span").textContent,
      completed: li.classList.contains("completed")
    });
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Load tasks from localStorage
function loadTasks() {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.forEach(task => {
    addTask(task.text);
    if (task.completed) {
      taskList.lastChild.classList.add("completed");
    }
  });
}

// Initialize
loadTasks();

