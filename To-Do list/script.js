document.addEventListener("DOMContentLoaded", loadTasks);

function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    let taskList = document.getElementById("taskList");
    let li = document.createElement("li");
    li.innerHTML = `${taskText} <button class="delete-btn" onclick="deleteTask(this)">X</button>`;
    
    li.addEventListener("click", function() {
        this.classList.toggle("completed");
        saveTasks();
    });

    taskList.appendChild(li);
    taskInput.value = "";

    saveTasks();
}

function deleteTask(task) {
    task.parentElement.remove();
    saveTasks();
}

function saveTasks() {
    let tasks = [];
    document.querySelectorAll("#taskList li").forEach(task => {
        tasks.push({ text: task.innerText.replace("X", "").trim(), completed: task.classList.contains("completed") });
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.forEach(task => {
        let taskList = document.getElementById("taskList");
        let li = document.createElement("li");
        li.innerHTML = `${task.text} <button class="delete-btn" onclick="deleteTask(this)">X</button>`;
        
        if (task.completed) li.classList.add("completed");

        li.addEventListener("click", function() {
            this.classList.toggle("completed");
            saveTasks();
        });

        taskList.appendChild(li);
    });
}

