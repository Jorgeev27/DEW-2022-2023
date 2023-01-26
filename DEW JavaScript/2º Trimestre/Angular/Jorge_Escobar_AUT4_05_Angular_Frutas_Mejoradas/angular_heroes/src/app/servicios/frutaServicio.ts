import { Injectable } from "@angular/core";
import { Fruta } from "../modelo/fruta";
import { FRUTAS } from "../mock/mock-frutas";

@Injectable({
    providedIn: 'root',
})

export class frutaServicio{
    /**
     * Función que devuelve un array de objetos Fruta.
     * @returns Array de objeto Fruta.
     */
    getFrutas(): Fruta[]{
        return FRUTAS;
    }

    /* Asignando el valor de la función `getFrutas()` a la variable `frutas`. */
    frutas = this.getFrutas();

    /**
     * Función que devuelve el valor de la variable frutas.
     * @returns Variedad de frutas.
     */
    obtenerFrutas(){
        return this.frutas;
    }
}