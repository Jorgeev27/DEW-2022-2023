/* Importación de los módulos Pipe y PipeTransform de la biblioteca principal de Angular. */
import { Pipe, PipeTransform } from "@angular/core";

/* Un decorador que nos permite definir el nombre de la pipe. */
@Pipe({
    name: 'caracterEspecialPelicula'
})

/* La clase CaracterEspecialPeliculaPipe implementa el método de transformación. */
export class CaracterEspecialPeliculaPipe implements PipeTransform{
    /**
     * Toma una cadena y un valor como parámetros, y devuelve una cadena
     * @param {string} gender - El valor de la propiedad de género del elemento actual en el bucle.
     * @param {any} value - El valor que se pasa a la canalización.
     * @returns El valor de la variable cadena.
     */
    transform(gender:string, value: any) {
        let cadena: string;
        if(gender == "male"){
            cadena = value.style.backgroundColor = "blue";
            return cadena;
        }else if(gender == "female"){
            cadena = value.style.backgroundColor = "red";
            return cadena;
        }
        return value;
    }
}