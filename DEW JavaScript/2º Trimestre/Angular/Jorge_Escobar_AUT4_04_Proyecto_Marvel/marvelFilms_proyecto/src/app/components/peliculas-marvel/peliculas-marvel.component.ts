/* Importación del componente, OnInit, PeliculaService y Pelicula desde el núcleo angular. */
import { Component, OnInit } from '@angular/core';
import { PeliculaService } from 'src/app/services/pelicula.service';
import { Pelicula } from 'src/app/model/pelicula';

/* Un decorador que se utiliza para definir los metadatos de la clase. */
@Component({
  selector: 'app-peliculas-marvel',
  templateUrl: './peliculas-marvel.component.html'
})

/* Exportando la clase PeliculasMarvelComponent e implementando la interfaz OnInit. */
export class PeliculasMarvelComponent implements OnInit{

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
   * @param {number} id - ID de la película que se quiere borrar.
   */
  borrar(id: number){
    this.peliSer.borrarPeliculas(id);
    this.recargarPeliculas();
    alert("Película borrada con éxito");
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