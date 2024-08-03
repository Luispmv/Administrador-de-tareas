//Nos traemos el formulario de HTML con id #task-form
const taskForm = document.getElementById("task-form");

//Nos traemos la lista desordenada ul con el id #task-list
const taskList = document.getElementById("task-list");

//Creamos un evento submit el cual ejecuta una funcion anonima la cual toma como parametro event, dentro de la funcion prevenimos el comportamiento default de el boton submit para que no se refresque la pagina.
//Tambien dentro de la funcion llamamos al input dentro del form con id #task-input y guardamos el valor de este en la constante task para despues imprimirlo por consola
taskForm.addEventListener("submit", (event)=>{
    event.preventDefault()
    const taskInput = document.getElementById("task-input")
    const task = taskInput.value;
    console.log(task)
})