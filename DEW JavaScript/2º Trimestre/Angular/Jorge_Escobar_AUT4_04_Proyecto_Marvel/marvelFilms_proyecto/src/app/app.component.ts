/* Importación de la clase Component de la biblioteca principal de Angular. */
import { Component } from '@angular/core';

/* Un decorador que se utiliza para definir los metadatos del componente. */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})

/* Exportando la clase AppComponent para que pueda ser utilizada en otros archivos. */
export class AppComponent{

  /* Definición del título de la aplicación. */
  title = 'marvelFilms_proyecto';
}
