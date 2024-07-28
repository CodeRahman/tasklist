//Constants declared for input button and task list area
const taskInput = document.querySelector("#newtask input");
const taskSection = document.querySelector('.tasks');

//Listener for the Enter key to add a new task
taskInput.addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
        createTask();
    }
});

//Onclick event for the 'Add' button
document.querySelector('#push').onclick = function() {
    createTask();
}

//Function to create a task
function createTask() {
    if (taskInput.value.trim().length == 0) {
        alert("The task field is blank. Enter a task name and try again.");
    } 
    else {
    //Insert HTML that creates each task into the task area div element
        taskSection.innerHTML += `
            <div class="task">
                <label id="taskname">
                    <input onclick="updateTask(this)" type="checkbox" id="check-task">
                    <p>${taskInput.value}</p>
                </label>
                <div class="delete">
                    <i class="uil uil-trash"></i>
                </div>
            </div>`;
        
        //Clear the input field
        taskInput.value = '';

        //Add event listeners for delete buttons
        var currentTasks = document.querySelectorAll(".delete");
        currentTasks.forEach(task => {
            task.onclick = function() {
                this.parentNode.remove();
            }
        });

        //Handle overflow
        taskSection.offsetHeight >= 300 ? 
            taskSection.classList.add("overflow") : 
            taskSection.classList.remove("overflow");
    }
}

//Function to update task status (checked)
function updateTask(task) {
    let taskItem = task.parentElement.lastElementChild;
    if (task.checked) {
        taskItem.classList.add("checked");
    } else {
        taskItem.classList.remove("checked");
    }
}
