class Tarea {
    constructor(nombre) {
      this.nombre = nombre;
      this.completada = false;
    }
  
    marcarComoCompletada() {
      this.completada = !this.completada;
    }
  }
  
  let tareas = [];
  
  function agregarTarea() {
    const nombreTarea = document.getElementById('taskInput').value;
    if (nombreTarea.trim() !== "") {
      const nuevaTarea = new Tarea(nombreTarea);
      tareas.push(nuevaTarea);
      mostrarTareas(); 
      document.getElementById('taskInput').value = ''; 
    } else {
      alert("Por favor, ingresa una tarea válida.");
    }
  }
  
  function mostrarTareas() {
    const lista = document.getElementById('taskList');
    lista.innerHTML = ''; 
    tareas.forEach((tarea, indice) => {
      const li = document.createElement('li');
      li.className = tarea.completada ? 'completed' : '';
      li.innerHTML = `
        <span>${tarea.nombre}</span>
        <div class="actions">
          <button onclick="marcarComoCompletada(${indice})">Completada</button>
          <button onclick="eliminarTarea(${indice})">Eliminar</button>
        </div>`;
      lista.appendChild(li);
    });
  }
  
  function marcarComoCompletada(indice) {
    tareas[indice].marcarComoCompletada();
    mostrarTareas();
  }
  
  function eliminarTarea(indice) {
    tareas.splice(indice, 1); 
    mostrarTareas(); //
  }