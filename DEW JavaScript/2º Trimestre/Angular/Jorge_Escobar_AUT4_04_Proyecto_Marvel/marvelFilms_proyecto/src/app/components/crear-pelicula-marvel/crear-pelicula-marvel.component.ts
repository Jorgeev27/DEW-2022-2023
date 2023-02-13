/* Importando los componentes, formBuilder, formGroup, validators, pelicula y peliculaService. */
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Pelicula } from 'src/app/model/pelicula';
import { PeliculaService } from 'src/app/services/pelicula.service';

/* Un decorador que se utiliza para definir los metadatos del componente. */
@Component({
  selector: 'app-crear-pelicula-marvel',
  templateUrl: './crear-pelicula-marvel.component.html',
})

/* Exportando la clase CrearPeliculaMarvelComponent. */
export class CrearPeliculaMarvelComponent{

  /* Creando una nueva variable llamada formInsertar de tipo FormGroup. */
  public formInsertar: FormGroup;

  /* Creando un nuevo objeto de tipo Pelicula. */
  insertarPelicula: Pelicula = {id: 0, title: "", release_date: "", overview: "", cover_url: ""};

  /**
   * Crea un grupo de formularios con cuatro controles de formulario, cada uno de los cuales tiene un validador.
   * @param {FormBuilder} formBuilder - Objeto FormBuilder que importamos.
   * @param {PeliculaService} servicioPeliculaInsertar - PeliculaService: Servicio que creamos.
   */
  constructor(private formBuilder: FormBuilder, private servicioPeliculaInsertar: PeliculaService){
    this.formInsertar = this.formBuilder.group({
      title: ['', Validators.required],
      release_date: ['', Validators.required],
      overview: ['', Validators.required],
      cover_url: ['', Validators.required],
    });
  }

  /**
   * La función newId() devuelve el valor de la propiedad id del objeto devuelto por el método cogerId() del servicio
   * servicioPeliculaInsertar, más uno.
   * @returns Valor del id de la última película en la base de datos más uno.
   */
  newId(){
    return this.servicioPeliculaInsertar.cogerId() + 1;
  }

  /**
   * La función enviarPelicula() toma los valores del formulario y los asigna a las propiedades del objeto que será enviado al servidor.
   */
  enviarPelicula(){
    this.insertarPelicula.id = this.newId();
    this.insertarPelicula.title = this.formInsertar.value.title;
    this.insertarPelicula.release_date = this.formInsertar.value.release_date;
    this.insertarPelicula.overview = this.formInsertar.value.overview;
    this.insertarPelicula.cover_url = this.formInsertar.value.cover_url;
    this.servicioPeliculaInsertar.agregarPeliculas(this.insertarPelicula);
    this.formInsertar.reset();
    alert("Película añadida con éxito");
  }
}