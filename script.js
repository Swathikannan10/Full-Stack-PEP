let tasks = [];

function addTask() {

    let input = document.getElementById("taskInput");
    let taskText = input.value.trim();

    if (taskText === "") {
        alert("Enter a task!");
        return;
    }

    tasks.push({
        text: taskText,
        completed: false
    });

    input.value = "";
    displayTasks();
}


function displayTasks() {

    let list = document.getElementById("taskList");
    list.innerHTML = "";

    tasks.forEach((task, index) => {

        let li = document.createElement("li");

        if (task.completed) {
            li.classList.add("completed");
        }

        li.innerHTML = `
            <span>${task.text}</span>

            <div class="task-buttons">
                <button onclick="toggleComplete(${index})">✔</button>
                <button onclick="updateTask(${index})">✏</button>
                <button onclick="deleteTask(${index})">🗑</button>
            </div>
        `;

        list.appendChild(li);
    });
}


function toggleComplete(index) {
    tasks[index].completed = !tasks[index].completed;
    displayTasks();
}


function updateTask(index) {

    let newTask = prompt("Update your task:", tasks[index].text);

    if (newTask !== null && newTask.trim() !== "") {
        tasks[index].text = newTask;
        displayTasks();
    }
}


function deleteTask(index) {

    if (confirm("Delete this task?")) {
        tasks.splice(index, 1);
        displayTasks();
    }
}