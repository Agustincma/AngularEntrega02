import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Entrega02';
 
  estudiantes = ['Goku', 'Vegeta', 'Gohan', 'Piccolo', 'Jiren'];
  
  examen = this.estudiantes.map(estudiante => ({ nombre: estudiante, aprobado: Math.random() < 0.5 }));

  refrescarPagina(): void{
    window.location.reload();
  }
}


