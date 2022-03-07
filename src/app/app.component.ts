import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'lista-tareas';
  // Agrego una nueva tarea a la lista de tareas.
function createTask() {
  var li = document.createElement("li");
  
  var texto = document.getElementById("text").value;
  var task = document.createElement("label");
  task.setAttribute("class","container");
  var t = document.createTextNode(texto);
  task.appendChild(t);
  
  var checkb = document.createElement("input");
  checkb.setAttribute("type","checkbox");
  checkb.addEventListener('click', completeTask);

  var checkm = document.createElement("span");
  checkm.setAttribute("class","checkmark");
  
  task.appendChild(checkb);
  task.appendChild(checkm);
  
  var del = document.createElement("input");
  del.setAttribute("type", "image");
  del.setAttribute("src", "https://freesvg.org/img/trash.png");
  del.setAttribute("class", "deleteIcon");
  del.addEventListener('click', deleteTask);

  li.appendChild(del);
  li.appendChild(task);

  
 if (texto == '') {
    alert("Debes escribir una tarea!");
  } else {
    document.getElementById("list").insertBefore(li, list.children[0]);
  }
  
  document.getElementById("text").value = "";
}

// Marca la tarea como completada, clickeando la casilla y tachando la tarea.
function completeTask(event){
  var task = event.target.parentElement.parentElement;
  if (task.className == "completed") {
    task.removeAttribute("class");
  } else{
    task.setAttribute("class","completed");
  }
}

// Elimina una tarea de la lista de tareas.
function deleteTask(event){
  var task = event.target.parentElement;
  var list = task.parentElement;
  list.removeChild(task);  
}
}
