import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pelicula } from 'src/app/model/pelicula';
import { PeliculaService } from 'src/app/services/pelicula.service';

@Component({
  selector: 'app-detalle-pelicula-marvel',
  templateUrl: './detalle-pelicula-marvel.component.html',
})
export class DetallePeliculaMarvelComponent implements OnInit {

  peli: Pelicula ={id: 0, title: "", cover_url: "", release_date: "", overview: ""};

  id: number = 0;
  title: string = "";
  cover_url: string = "";
  release_date: string = "";
  overview: string = "";
  editar:boolean=false;

  /**
   * El constructor es una función que se llama cuando se crea una nueva instancia de la clase.
   * @param {ActivatedRoute} route - ActivatedRoute
   * @param {PeliculaService} servicePeli - PeliculaServicio
   */
  constructor(private route: ActivatedRoute, private servicePeli: PeliculaService) {}

  ngOnInit(): void {
    this.obtenerPelicula();
  }

  obtenerPelicula(){
    let peliId = Number(this.route.snapshot.paramMap.get('id'));
    this.peli = this.servicePeli.buscarPelicula(peliId);
    this.id = this.peli.id;
    this.title = this.peli.title;
    this.cover_url = this.peli.cover_url;
    this.release_date = this.peli.release_date;
    this.overview = this.peli.overview;
  }

  editarPelicula(){
    if(this.editar === true){
      this.editar = false;
    }else if(this.editar === false){
      this.editar = true;
    }
  }
}