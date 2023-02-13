import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Pelicula } from 'src/app/model/pelicula';
import { PeliculaService } from 'src/app/services/pelicula.service';

@Component({
  selector: 'app-crear-pelicula-marvel',
  templateUrl: './crear-pelicula-marvel.component.html',
})
export class CrearPeliculaMarvelComponent {

  public formInsertar: FormGroup;
  insertarPelicula: Pelicula = {id: 0, title: "", release_date: "", overview: "", cover_url: ""};

  constructor(private formBuilder: FormBuilder, private servicioPeliculaInsertar: PeliculaService){
    this.formInsertar = this.formBuilder.group({
      title: ['', Validators.required],
      release_date: ['', Validators.required],
      overview: ['', Validators.required],
      cover_url: ['', Validators.required],
    });
  }

  newId(){
    return this.servicioPeliculaInsertar.cogerId() + 1;
  }

  /**
   * La función enviarPelicula() toma los valores del formulario y los inserta en el objeto que se enviará al servidor.
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