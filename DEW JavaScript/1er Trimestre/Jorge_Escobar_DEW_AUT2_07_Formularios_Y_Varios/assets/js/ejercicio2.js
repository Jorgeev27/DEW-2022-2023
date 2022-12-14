/* 

2. Crear un objeto persona con varios tipos de datos y 
recorrerlo con los diferentes métodos explicados con anterioridad.

*/

/* Creando un objeto persona() con las propiedades nombre, apellido, dni, 
edad, mayorDeEdad, contacto. */
let persona = {
    nombre: "María",
    apellido: "Pérez",
    dni: "12345678Z",
    edad: 17,
    mayorDeEdad: null,
    contacto: [659483268, "mariaperez@correo.es"]
}

/**
 * Devuelve verdadero si el valor del parámetro edad es mayor a 18.
 * @param edad El valor que se pasará a la función.
 * @return verdadero
 */

function esMayor(edad){
    return edad > 18;
}

/* Llamando a la función esMayor() y pasando el valor de persona.edad como parámetro. */
persona.mayorDeEdad = esMayor(persona.edad);

/* Está imprimiendo las propiedades del objeto en consola. */
for(let clave in persona){
    clave = console.log("Nombre: " + persona.nombre + " " + persona.apellido + 
    ". DNI: " + persona.dni + ". Edad: " + persona.edad + " años" + 
    ". Teléfono de contacto: " + persona.contacto[0] + ". Email de contacto: " + persona.contacto[1] + 
    ". ¿Mayor de edad?: " + persona.mayorDeEdad);
}