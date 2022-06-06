const form = document.getElementById('task-form');
const taskL = document.getElementById('tasks')

form.onsubmit = function (e) {
    e.preventDefault();
    const inputField = document.getElementById('task-input');
    addTask(inputField.value);
    form.reset();
};

function addTask(description) {
    const taskContainer = document.createElement('div');
    const newTask = document.createElement('input');
    const taskLabel = document.createElement('label');
    const taskDescription = document.createTextNode(description);

    newTask.setAttribute('type', 'checkbox');
    newTask.setAttribute('name', description);
    newTask.setAttribute('id', description);

    taskLabel.setAttribute('for', description);
    taskLabel.appendChild(taskDescription);

    taskContainer.classList.add('task-item');
    taskContainer.appendChild(newTask);
    taskContainer.appendChild(taskLabel);

    taskL.appendChild(taskContainer);
}