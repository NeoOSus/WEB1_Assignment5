// Tasks are stored only while this page is open.
let tasks = [];
let taskInput = document.getElementById("task-input");
let taskList = document.getElementById("task-list");

document.getElementById("add-task").addEventListener("click", function () {
    let text = taskInput.value.trim();
    if (text === "") {
        return;
    }

    tasks.push({ text: text, completed: false });
    taskInput.value = "";
    showTasks();
});

function showTasks() {
    taskList.innerHTML = "";

    tasks.forEach(function (task, index) {
        let item = document.createElement("li");
        let label = document.createElement("label");
        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = task.completed;

        let text = document.createElement("span");
        text.textContent = task.text;
        if (task.completed) {
            text.classList.add("completed");
        }

        checkbox.addEventListener("change", function () {
            task.completed = checkbox.checked;
            showTasks();
        });

        let deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", function () {
            tasks.splice(index, 1);
            showTasks();
        });

        label.appendChild(checkbox);
        label.appendChild(text);
        item.appendChild(label);
        item.appendChild(deleteButton);
        taskList.appendChild(item);
    });
}
