// Define UI Vars
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');


localStorage.setItem('test','test value');

// Load Event Listeners
loadEventListeners();

// Creating task list from local storage
createTaskListFromLocalStorage();

// Load Event Listener Function
function loadEventListeners(){
    // Add Task Event
    form.addEventListener('submit', addTask);
    
    // Remove Task Event - We will be using event delegation over here
    taskList.addEventListener('click', removeTask);
    
    // Clear Task List
    clearBtn.addEventListener('click', clearTasks);

    // Filter Task List
    filter.addEventListener('keyup', filterTasks);
}

// Add Task
function addTask(event){
    if(taskInput.value === ""){
        alert('Add a Task');
    }else{
        createTaskListElement(taskInput.value);
        // Store task in local storage
        storeTaskInLocalStorage(taskInput.value);

        taskInput.value = '';
    }
    event.preventDefault();
}


// Remove Task - using event delegation here
function removeTask(event){

    if(event.target.className === 'fa fa-remove'){
        let taskIndex;

        const li = event.target.parentElement.parentElement;
        // Instead of removing the child we can remove the element directly from DOM
        // taskList.removeChild(li);
        
        taskIndex = Array.prototype.indexOf.call(taskList.children, li);

        const tasks = getTaskListFromLocalStorage();
        tasks.splice(taskIndex,1)
        setTaskListInLocalStorage(tasks);
        // Only after succesfully removing it from the local storage we are moving forward
        li.remove();
    };

    // No need to write event.preventDefault as we were doing earlier
};

// Clear Tasks
function clearTasks(event){

    // Method 0 - InnerHTML as empty
    // taskList.innerHTML = '';

    // Method 1 - Slower
    // const lis = taskList.querySelectorAll('li');
    // Array.prototype.forEach.call(lis, function(li){
    //     li.remove();
    // });

    // Method 2 - Faster
    // https://jsperf.com/innerhtml-vs-removechild/47
    while(taskList.firstChild){
        taskList.removeChild(taskList.firstChild);
    }
    localStorage.removeItem('tasks');
};


// Filter Tasks
function filterTasks(event){
    const filterValue = event.target.value.toLowerCase();
    const lis = taskList.querySelectorAll('li');
    lis.forEach(function(li){
        const liText = li.firstChild.textContent;
        if(liText.toLowerCase().indexOf(filterValue) != -1){
            li.style.display = 'block';
        }else{
            li.style.display = 'none';
        }
    });
};


// We want to persist the data - in local storage so as when we reload the page it is still present there
function storeTaskInLocalStorage(task){
    const tasks = getTaskListFromLocalStorage();

    tasks.push(task);
    setTaskListInLocalStorage(tasks);
};


function createTaskListFromLocalStorage(){
    const tasks = getTaskListFromLocalStorage();
    tasks.forEach(createTaskListElement);
};


function getTaskListFromLocalStorage(){
    const tasksString = localStorage.getItem('tasks');
    let tasks;
    if(tasksString !== null){
        tasks = JSON.parse(tasksString);
    }else{
        tasks = [];
    }
    return tasks;
};

function setTaskListInLocalStorage(tasks){
    const updatedTasksString = JSON.stringify(tasks);
    localStorage.setItem('tasks', updatedTasksString);
}


function createTaskListElement(task){
    const li = document.createElement('li');
        li.className = "collection-item";
        // Create text node and append to li
        const textNode = document.createTextNode(task);
        li.appendChild(textNode);
    
        // Create new link element
        const link = document.createElement('a');
        // Secondary content class is used to display on left side of the panel
        link.className = 'delete-item secondary-content';
        link.innerHTML = '<i class = "fa fa-remove"></i>';
        li.appendChild(link);
        // Append to UL
        taskList.appendChild(li);
};