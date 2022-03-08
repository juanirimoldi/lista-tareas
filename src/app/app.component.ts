import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'lista-tareas';
  nombre = "JUANI";
  urltrash = "/assets/images/trash-can-regular.svg";
  texto = '';
  tasks : string[] = [];

    // Agrego una nueva tarea a la lista de tareas.
  createTask(text: any) {
  if (text == '') {
      alert("Debes escribir una tarea!");
    } else {
      this.tasks.push(text);
    }
  this.texto = '';
  }

  // Marca la tarea como completada, clickeando la casilla y tachando la tarea.
  completeTask(event: any){
    var task = event.target.parentElement.parentElement;
    if (task.className == "completed") {
      task.removeAttribute("class");
    } else{
      task.setAttribute("class","completed");
    }
  }

  // Elimina una tarea de la lista de tareas.
  deleteTask(event: any){
    var task = event.target.parentElement;
    var list = task.parentElement;
    list.removeChild(task);  
  }
}
