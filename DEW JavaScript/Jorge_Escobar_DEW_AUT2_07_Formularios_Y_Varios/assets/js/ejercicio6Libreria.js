/* Declarando una variable llamada `contador` y asignándole el valor `0`. */
let contador = 0;

/**
 * Toma un objeto como argumento y devuelve una cadena
 * @param persona - {nombre: "Juan", apellido: "Perez"}
 * @returns una cuerda.
 */
export function imprimirInformacion(persona) {
    contador++;
    if (contador < 10) {
        return "<strong>Usuario 0" + contador + "</strong>: su nombre es " + [persona.nombre, persona.apellido].join(" ") + ".";
    }
    return "<strong>Usuario " + contador + "</strong>: su nombre es " + [persona.nombre, persona.apellido].join(" ") + ".";
}