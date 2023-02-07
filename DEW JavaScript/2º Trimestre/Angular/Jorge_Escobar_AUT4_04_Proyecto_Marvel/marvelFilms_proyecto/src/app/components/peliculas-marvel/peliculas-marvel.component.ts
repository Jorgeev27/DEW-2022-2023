import { Component, OnInit } from '@angular/core';
import { PeliculaService } from 'src/app/services/pelicula.service';
import { Pelicula } from 'src/app/model/pelicula';

@Component({
  selector: 'app-peliculas-marvel',
  templateUrl: './peliculas-marvel.component.html',
})
export class PeliculasMarvelComponent implements OnInit {
  pelis: Pelicula[] = [];
  constructor(private peliSer:PeliculaService){}
  
  ngOnInit() {
    this.pelis = this.peliSer.movie;
  }
}