/* Importación del componente y la entrada del núcleo angular y la serie del simulacro de la serie
simulada. */
import { Component, Input } from '@angular/core';
import { SERIES } from 'src/app/mock/mock-series.mock';

/* Un decorador que nos permite definir los metadatos del componente. */
@Component({
  selector: 'app-series-marvel',
  templateUrl: './series-marvel.component.html',
})

/* Exportando la clase `SeriesMarvelComponent` para que pueda usarse en otros archivos. */
export class SeriesMarvelComponent{
  /* Asignar el valor de la constante `SERIES` a la variable `series`. */
  series = SERIES;
}