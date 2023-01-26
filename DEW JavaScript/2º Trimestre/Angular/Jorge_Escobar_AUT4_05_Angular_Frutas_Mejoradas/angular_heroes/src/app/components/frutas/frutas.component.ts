import { Component } from '@angular/core';
import { FRUTAS } from 'src/app/mock/mock-frutas';
import { Fruta } from 'src/app/modelo/fruta';

@Component({
  selector: 'app-frutas',
  templateUrl: './frutas.component.html',
  styleUrls: ['./frutas.component.css']
})
export class FrutasComponent {
  /* Asignando el valor de la constante FRUTAS a la variable frutas. */
  frutas = FRUTAS;

  /* Declarar una variable de tipo Fruta y también está declarando que puede ser indefinida. */
  frutaSeleccionada: Fruta | undefined;

  /* Declarar una variable de tipo booleano y también declarar que puede ser indefinida. */
  mostrarFruta: boolean = false;

  /**
   * La función toma un parámetro de tipo Fruta, y establece el valor de la propiedad frutaSeleccionada al valor del parámetro
   * @param {Fruta} fruta - Fruta seleccionada
   */
  onSelect(fruta: Fruta){
    this.frutaSeleccionada = fruta;
  }

  /**
   * Si el valor de la variable mostrarFruta es falso, se muestran todas las frutas. Y si el valor de la
   * variable mostrarFruta es verdadero, se muestra el detalle de la fruta que se ha seleccionado.
   */
  mostrarDetalles(){
    if(this.mostrarFruta === false){
      this.mostrarFruta = true;
    }else if(this.mostrarFruta === true){
      this.mostrarFruta = false;
    }
  }
}
