// Seleccionamos los elementos del DOM
const taskInput = document.getElementById("taskInput");  // Input donde se escribe la tarea
const addTaskBtn = document.getElementById("addTaskBtn");  // Botón para agregar tarea
const taskList = document.getElementById("taskList");  // Lista de tareas

// Evento para agregar tarea al hacer clic en el botón
addTaskBtn.addEventListener("click", () => {
    let taskText = taskInput.value.trim(); 

    if (taskText !== "") {
        addTask(taskText);
        taskInput.value = "";
    } else {
        alert("Por favor, escribe una tarea antes de agregarla.");
    }
});

// Evento para agregar tarea al presionar "Enter"
taskInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        addTaskBtn.click(); 
    }
});

// Función para agregar una nueva tarea al DOM
function addTask(taskText) {
    let li = document.createElement("li"); // Creamos un nuevo elemento <li>
    li.textContent = taskText; // Agregamos el texto de la tarea

    // Botón de eliminar tarea
    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "X";

    // Evento para eliminar la tarea al hacer clic en el botón
    deleteBtn.addEventListener("click", () => {
        li.remove(); // Eliminamos la tarea del DOM
    });

    // Cambiar el color cuando el mouse pase por encima
    deleteBtn.addEventListener("mouseover", () => {
        deleteBtn.style.background = "#c82333";
    });

    // Restaurar color cuando el mouse salga
    deleteBtn.addEventListener("mouseout", () => {
        deleteBtn.style.background = "#dc3545";
    });

    li.appendChild(deleteBtn); // Agregamos el botón de eliminar al <li>
    taskList.appendChild(li);  // Agregamos el <li> a la lista de tareas
}
