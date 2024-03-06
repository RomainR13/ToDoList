document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.querySelector("#taskInput");
    const taskList = document.querySelector("#taskList");

    function addTask() {
        if (taskInput.value !== "") {
            const li = document.createElement("li");
            li.innerHTML = `<input type="checkbox" class="task-checkbox" onchange="toggleTask(this)"> ${taskInput.value}`;
            taskList.appendChild(li);
            taskInput.value = "";
        }
    }

    function toggleTask(checkbox) {
        const li = checkbox.parentNode;
        if (checkbox.checked) {
            li.remove();
        }
    }

    taskInput.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            addTask();
        }
    });

    window.addTask = addTask;
    window.toggleTask = toggleTask;
});

