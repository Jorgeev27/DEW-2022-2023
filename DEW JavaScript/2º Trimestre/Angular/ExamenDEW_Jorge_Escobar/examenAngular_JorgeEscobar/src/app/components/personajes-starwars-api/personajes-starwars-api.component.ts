import { Component, OnInit } from '@angular/core';
import { PersonajesService } from 'src/app/services/personajes.service';
import { Personajes } from 'src/app/model/personajes';

@Component({
  selector: 'app-personajes-starwars-api',
  templateUrl: './personajes-starwars-api.component.html'
})
export class PersonajesStarwarsApiComponent implements OnInit{
  /* Declarar una matriz de tipo Personajes. */
  perso: Personajes[] = [];

  /**
   * El constructor es una función que se llama cuando se crea una nueva instancia de una clase
   * @param {PersonajesService} personajesService - Este es el nombre del parámetro.
   */
  constructor(private personajesService: PersonajesService) {}

  /**
   * La función ngOnInit() es un enlace de ciclo de vida que se llama después de que Angular haya
   * inicializado todas las propiedades vinculadas a datos de una directiva
   */
  ngOnInit(): void {
    this.perso = this.personajesService.personaj;
  }

  /**
   * Llama a la función deletePersonaje() del servicio personajesService, y luego llama a la función
   * recargarPersonajes() para refrescar la lista de personajes
   * @param {number} id - número
   */
  borrar(id: number){
    this.personajesService.borrarPersonaje(id);
    this.recargarPersonajes();
  }

  /**
   * La función recargarPersonajes() es una función que se llama cuando el usuario hace clic en el
   * botón "Recargar Personajes" en el archivo HTML. Esta función se llama en el archivo HTML con el
   * siguiente código:
   */
  recargarPersonajes(){
    this.personajesService.pers$?.subscribe((data) =>{
      this.perso = data;
    })
  }
}
