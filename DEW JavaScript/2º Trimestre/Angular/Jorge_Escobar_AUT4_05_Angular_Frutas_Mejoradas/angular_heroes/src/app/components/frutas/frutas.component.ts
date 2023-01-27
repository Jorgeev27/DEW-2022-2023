import { Component, OnInit } from '@angular/core';
import { FRUTAS } from 'src/app/mock/mock-frutas';
import { Fruta } from 'src/app/modelo/fruta';
import { frutaServicio } from 'src/app/servicios/frutaServicio';

@Component({
  selector: 'app-frutas',
  templateUrl: './frutas.component.html',
  styleUrls: ['./frutas.component.css']
})
export default class FrutasComponent implements OnInit {
  frutas = FRUTAS;
  frutaSeleccionada: Fruta | undefined;
  mostrarFruta: boolean = false;



  fruta: Fruta[] = [];
  /**
   * La función toma un parámetro de tipo Fruta, y establece el valor de la propiedad frutaSeleccionada al valor del parámetro.
   * @param {Fruta} fruta - Fruta que se ha seleccionado.
   */
  onSelect(fruta: Fruta){
    this.frutaSeleccionada = fruta;
  }

  ngOnInit(): void {
    
  }

  constructor(private frutaService:frutaServicio){

  }

  getFrutas(): void{
    this.fruta = this.frutaService.getFrutas();
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

  eliminarFruta(id: number){
    this.fruta = this.frutaService.eliminarFruta(id);
  }
}
