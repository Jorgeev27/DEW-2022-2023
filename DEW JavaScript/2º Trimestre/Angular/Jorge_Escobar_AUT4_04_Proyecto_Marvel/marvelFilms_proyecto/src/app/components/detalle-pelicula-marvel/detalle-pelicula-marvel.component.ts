/* Importación de los componentes, servicios y modelos necesarios. */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pelicula } from 'src/app/model/pelicula';
import { PeliculaService } from 'src/app/services/pelicula.service';

@Component({
  selector: 'app-detalle-pelicula-marvel',
  templateUrl: './detalle-pelicula-marvel.component.html',
})
export class DetallePeliculaMarvelComponent implements OnInit {

  /* Creando un nuevo objeto de tipo Pelicula. */
  peli: Pelicula = {id: 0, title: "", cover_url: "", release_date: "", overview: ""};
  
  id: number = 0;
  title: string = "";
  cover_url: string = "";
  release_date: string = "";
  overview: string = "";
  editar:boolean=false;
  peliculaSeleccionada: Pelicula = {id: 0, title: "", release_date: "", overview: "", cover_url:""};

  /**
   * El constructor es una función que se llama cuando se crea una nueva instancia de la clase.
   * @param {ActivatedRoute} route - ActivatedRoute
   * @param {PeliculaService} servicePeli - PeliculaServicio
   */
  constructor(private route: ActivatedRoute, private servicePeli: PeliculaService) {}

  /**
   * La función ngOnInit() es un enlace de ciclo de vida que se llama después de que Angular haya
   * inicializado todas las propiedades vinculadas a datos de una directiva.
   */
  ngOnInit(): void {
    this.obtenerPelicula();
  }

  /**
   * La función obtenerPelicula() obtiene el ID de la película de la API y luego usa ese ID
   * para encontrar la película en el array de películas.
   */
  obtenerPelicula(){
    let peliId = Number(this.route.snapshot.paramMap.get('id'));
    this.peli = this.servicePeli.buscarPelicula(peliId);
    this.id = this.peli.id;
    this.title = this.peli.title;
    this.cover_url = this.peli.cover_url;
    this.release_date = this.peli.release_date;
    this.overview = this.peli.overview;
  }

  //ESTA FUNCIÓN LA HICE AHORA
  modificarPelicula(id: number, peliculaSeleccionada: Pelicula){
    this.servicePeli.actualizarPelicula(id, peliculaSeleccionada);
    alert("Película modificada con éxito");
  }

  /**
   * La función editarPelicula() toma como referencia la variable editar. Si es verdadera, configúrela como falsa y
   * se muestra el formulario de editar la pelicula. Si la variable editar es falsa, configúrela como verdadera y no se muestra el formulario.
   */
  editarPelicula(){
    if(this.editar === true){
      this.editar = false;
    }else if(this.editar === false){
      this.editar = true;
    }
  }

  /* Una función que se utiliza para mostrar la descripción general de la película. */
  maxLength = 300;
  isClose: boolean = false;
  onClick = () => this.isClose = !this.isClose;
}