import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pelicula } from 'src/app/model/pelicula';
import { PeliculaService } from 'src/app/services/pelicula.service';

@Component({
  selector: 'app-detalle-pelicula-marvel',
  templateUrl: './detalle-pelicula-marvel.component.html',
})
export class DetallePeliculaMarvelComponent implements OnInit {
  /**
   * El constructor es una función que se llama cuando se crea una nueva instancia de la clase.
   * @param {ActivatedRoute} route - ActivatedRoute
   * @param {PeliculaService} servicePeli - PeliculaServicio
   */
  constructor(private route: ActivatedRoute, private servicePeli: PeliculaService) {}

  ngOnInit(): void {}
}
