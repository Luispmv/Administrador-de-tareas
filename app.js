//Nos traemos el formulario de HTML con id #task-form
const taskForm = document.getElementById("task-form");

//Nos traemos la lista desordenada ul con el id #task-list
const taskList = document.getElementById("task-list");

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
})