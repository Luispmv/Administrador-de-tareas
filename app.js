//Nos traemos el formulario de HTML con id #task-form
const taskForm = document.getElementById("task-form");

//Nos traemos la lista desordenada ul con el id #task-list
const taskList = document.getElementById("task-list");

//Usando local storage
loadTasks()

function createNewListItem(task){
    new_li = document.createElement("li")
    new_li.textContent = `${task}`

    new_first_span = document.createElement("span")
    new_first_span.setAttribute("class", "edit-btn")
    new_first_span.textContent = "✏️"

    new_second_span = document.createElement("span")
    new_second_span.setAttribute("class","delete-btn")
    new_second_span.textContent = "❌"

    new_li.append(new_first_span)
    new_li.append(new_second_span)
    return new_li
}


taskForm.addEventListener("submit", (event)=>{
    event.preventDefault()
    const taskInput = document.getElementById("task-input")
    const task = taskInput.value;
    // console.log(task)
    nuevo_item = createNewListItem(task)
    taskList.append(nuevo_item)
    storeTaskInLocalStorage(task)
})

//Delegacion de eventos con tasklist

taskList.addEventListener("click", (event)=>{
    if (event.target.classList.contains("delete-btn")){
        deleteTask(event.target.parentElement)
    }else if(event.target.classList.contains("edit-btn")){
        editTask(event.target.parentElement)
    }
})


function deleteTask(taskItem){
    if(confirm("Estas segura(o) de borrar esta tarea?")){
        removeFromLocalStorage(taskItem.firstChild.textContent);
        taskItem.remove()
    }
}

function editTask(taskItem){
    const newTask = prompt("Edita la tarea", taskItem.firstChild.textContent)

    if(newTask !== null){
        taskItem.firstChild.textContent = newTask
        updateLocalStorage()
    }

}


//Utilizando local storage
function storeTaskInLocalStorage(task){
    const tasks = JSON.parse(localStorage.getItem("tasks") || "[]");

    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks(){
    const tasks = JSON.parse(localStorage.getItem("tasks") || "[]") 
    tasks.forEach((task) =>{
        taskList.appendChild(createNewListItem(task))
    })
}


function updateLocalStorage() {
    const tasks = Array.from(taskList.querySelectorAll("li")).map(
      (li) => li.firstChild.textContent
    );
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }


function removeFromLocalStorage(taskContent) {
    const tasks = JSON.parse(localStorage.getItem("tasks") || "[]");
  
    const updateTasks = tasks.filter((task) => task !== taskContent);
  
    localStorage.setItem("tasks", JSON.stringify(updateTasks));
}