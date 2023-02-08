import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: "caracterEspecialPipe"
})

export class CaracterEspecialPipe implements PipeTransform{
    transform(valorCaracter: string) {
        let cadena: string;
        if(valorCaracter.includes(":")){
            cadena = valorCaracter.replace(":", "(");
            cadena = cadena.concat(")");
            return cadena;
        }
        return valorCaracter;
    }
}