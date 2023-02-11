/* Importación de los módulos Pipe y PipeTransform de la biblioteca principal de Angular. */
import { Pipe, PipeTransform } from '@angular/core';

/* Un decorador que nos permite definir el nombre de la pipe. */
@Pipe({
    name: 'caracterEspecialPeliculaMarvel'
})

/* La clase CaracterEspecialPeliculaPipe implementa el método de transformación. */
export class CaracterEspecialPeliculaPipe implements PipeTransform {
    /**
     * Toma una cadena, verifica si contiene dos puntos y, si los contiene, reemplaza los dos puntos
     * con un espacio y un paréntesis izquierdo, y luego agrega un paréntesis derecho al final de la cadena.
     * @param {string} value - Valor a transformar.
     * @returns Valor de la variable cadena.
     */
    transform(value: string) {
        let cadena: string ;
        if(value.includes(":")){
            cadena=value.replace(":"," (");
            cadena=cadena.concat(")");
            return cadena;
        }
        return value;
    }
}