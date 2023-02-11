/* Importación de los módulos Pipe y PipeTransform de la biblioteca principal de Angular. */
import { Pipe, PipeTransform } from "@angular/core";

/* Un decorador que se utiliza para definir el nombre de la tubería. */
@Pipe({
    name: 'fasePelicula'
})

/* La clase FaseUniversoPeliculaPipe implementa el método de transformación. */
export class FaseUniversoPeliculaPipe implements PipeTransform{

    /**
     * Toma una cadena, la divide en un array, convierte el primer elemento de la matriz en un número
     * entero y luego lo compara con una serie de números para determinar a qué fase del Universo
     * Cinematográfico de Marvel pertenece la película.
     * @param {string} fecha - Fecha en la que se estrena la película para colocarla en su correspondiente fase.
     * @returns Fase de la película.
     */
    transform(fecha: string) {
        let fechasPelicula = fecha.split("/");
        let fechaDePelicula = parseInt(fechasPelicula[0]);
        let fasePelicula: string = "0";
        if(fechaDePelicula <= 2012){
            fasePelicula = "1";
        }else if(fechaDePelicula >= 2013 && fechaDePelicula <= 2015){
            fasePelicula = "2";
        }else if(fechaDePelicula >= 2016 && fechaDePelicula <= 2019){
            fasePelicula = "3";
        }else if(fechaDePelicula >= 2020 && fechaDePelicula <= 2022){
            fasePelicula = "4";
        }else{
            fasePelicula = "ERROR!! Fase de película desconocida";
        }
        return fasePelicula;
    }
}