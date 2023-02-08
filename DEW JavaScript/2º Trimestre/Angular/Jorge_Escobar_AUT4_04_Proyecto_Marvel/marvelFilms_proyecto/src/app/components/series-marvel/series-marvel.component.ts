import { Component, Input } from '@angular/core';
import { SERIES } from 'src/app/mock/mock-series.mock';

@Component({
  selector: 'app-series-marvel',
  templateUrl: './series-marvel.component.html',
})
export class SeriesMarvelComponent {
  /* Asignar el valor de la constante `SERIES` a la variable `series`. */
  series = SERIES;
}