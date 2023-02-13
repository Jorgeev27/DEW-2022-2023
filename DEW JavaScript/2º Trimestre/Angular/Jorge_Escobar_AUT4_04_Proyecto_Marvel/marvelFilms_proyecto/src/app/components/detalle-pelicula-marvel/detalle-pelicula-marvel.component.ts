/* Importación de los componentes, servicios y modelos necesarios. */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pelicula } from 'src/app/model/pelicula';
import { PeliculaService } from 'src/app/services/pelicula.service';

/* Un decorador que se utiliza para definir los metadatos del componente. */
@Component({
  selector: 'app-detalle-pelicula-marvel',
  templateUrl: './detalle-pelicula-marvel.component.html',
})

/* Exportando la clase DetallePeliculaMarvelComponent e implementando la interfaz OnInit. */
export class DetallePeliculaMarvelComponent implements OnInit{

  /* Creando un nuevo objeto de tipo Pelicula. */
  peli: Pelicula = {id: 0, title: "", cover_url: "", release_date: "", overview: ""};
  
  /* La declaración de las variables que se van a utilizar en el componente. */
  id: number = 0;
  title: string = "";
  cover_url: string = "";
  release_date: string = "";
  overview: string = "";
  editar:boolean=false;
  peliculaSeleccionada: Pelicula = {id: 0, title: "", release_date: "", overview: "", cover_url:""};

  /**
   * La función constructora es una función predeterminada que se llama al crear una instancia de una clase.
   * @param {ActivatedRoute} route - ActivatedRoute.
   * @param {PeliculaService} servicePeli - PeliculaServicio.
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
   * La función obtenerPelicula() obtiene la identificación de la película de la URL, luego usa el servicio para obtener la película
   * con esa identificación y luego asigna los valores de la película a las variables del componente.
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

  
  /**
   * La función modificarPelicula() toma dos parámetros, id y peliculaSeleccionada, y luego llama a la
   * función actualizarPelicula() del servicio servicePeli, pasando los parámetros id y
   * peliculaSeleccionada.
   * @param {number} id - ID de la película que se va a modificar.
   * @param {Pelicula} peliculaSeleccionada - Película que se ha seleccionado para modificar.
   */
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

  
  /* Función que se utiliza para mostrar la descripción de la película. */
  maxLength = 300;
  isClose: boolean = false;
  onClick = () => this.isClose = !this.isClose;
}