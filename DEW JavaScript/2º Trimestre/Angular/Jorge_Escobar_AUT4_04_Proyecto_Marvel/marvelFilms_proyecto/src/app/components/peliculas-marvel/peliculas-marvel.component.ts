import { Component, OnInit } from '@angular/core';
import { PeliculaService } from 'src/app/services/pelicula.service';
import { Pelicula } from 'src/app/model/pelicula';

@Component({
  selector: 'app-peliculas-marvel',
  templateUrl: './peliculas-marvel.component.html',
})
export class PeliculasMarvelComponent implements OnInit {
  /* Declarar un array de objetos Pelicula. */
  pelis: Pelicula[] = [];
  /**
   * La función constructora es una función predeterminada que se llama al crear una instancia de una clase
   * @param {PeliculaService} peliSer - PeliculaServicio.
   */
  constructor(private peliSer:PeliculaService){}
  
  /**
   * La función ngOnInit() es un enlace de ciclo de vida que se llama después de que Angular haya
   * inicializado todas las propiedades vinculadas a datos de una directiva.
   */
  ngOnInit() {
    this.pelis = this.peliSer.movie;
  }

  
  
  /**
   * La función borrar() toma una identificación como parámetro, llama a la función deleteMovie en el servicio de películas
   * y luego llama a la función recargarPeliculas().
   * @param {number} id - número
   */
  borrar(id: number){
    this.peliSer.borrarPeliculas(id);
    this.recargarPeliculas();
  }

  /**
   * La función recargarPeliculas() se utiliza para recargar las películas desde la base de datos.
   */
  recargarPeliculas(){
    this.peliSer.peli$?.subscribe((data) =>{
      this.pelis = data;
    })
  }
}