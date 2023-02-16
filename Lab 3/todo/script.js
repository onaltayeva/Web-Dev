let createNewTask = function(taskString) {

    let newTask = document.createElement("li");
    newTask.className = "task";

    let span = document.createElement("span");
    span.className = "span";

    let checkbox = document.createElement("input");
    checkbox.className = "checkboxes";
    checkbox.type = "checkbox";
    
    let deleteImage = document.createElement("img");
    deleteImage.src = "https://img.icons8.com/plasticine/100/000000/filled-trash.png";
    deleteImage.className = "delete_img";
    deleteImage.onclick = deleteTask;

    span.innerHTML = taskString;
    newTask.appendChild(checkbox);
    newTask.appendChild(span);
    newTask.appendChild(deleteImage);

    return newTask
}

let addTask = function() {
    
    let taskList = document.getElementById("tasks_ul");
    let task = document.getElementById("new_task");
    if(task.value === "") {

    } else {
        let listItem = createNewTask(task.value);
        taskList.appendChild(listItem);
    }
    task.value = "";
}

let deleteTask = function() {
    
    let listItem = this.parentNode;
    listItem.remove();
    
}