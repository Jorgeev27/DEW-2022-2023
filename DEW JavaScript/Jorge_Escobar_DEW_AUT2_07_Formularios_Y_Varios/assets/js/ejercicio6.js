/* 

6. Dado el fichero "libreria.js" con la función imprimirInformación() (que está siendo exportado ya) y 
el fichero "index.js" con un array asociativo "personas" comentado, el alumnado deberá realizar lo siguiente:

Declarar el array asociativo como una constante "personas" mediante el uso de "USE STRICT".
La importación de imprimirInformación() que se encuentra en libreria.js a index.js e 
imprimir la información de las personas para que de la siguiente salida 
el programa al ejecutar su respectivo html:

- Usuario 01: su nombre es Antonio Hernández.
- Usuario 02: su nombre es Marta Pérez.
- Usuario 03: su nombre es Alejandro Matos.
- Usuario 04: su nombre es Macarena Cabrera.
- Usuario 05: su nombre es Lucía García.

Podrás descargar los ficheros mencionados desde el siguiente enlace: 
https://drive.google.com/drive/folders/1P5bR3EJLzInI4NAwzTC5YSsUkrTKVccf?usp=sharing

{ nombre: "Antonio", apellido: "Hernández" },
{ nombre: "Marta", apellido: "Pérez" },
{ nombre: "Alejandro", apellido: "Matos" },
{ nombre: "Macarena", apellido: "Cabrera" },
{ nombre: "Lucía", apellido: "García" }

*/

/* Importando la función imprimirInformación desde el archivo ejercicio6Libreria.js */
"use strict";
import { imprimirInformacion } from "./ejercicio6Libreria.js";

/* Creación de una matriz de objetos. */
let personas = [
    {nombre: ["Antonio"], apellido: ["Hernández"]},
    {nombre: ["Marta"], apellido: ["Pérez"]},
    {nombre: ["Alejandro"], apellido: ["Matos"]},
    {nombre: ["Macarena"], apellido: ["Cabrera"]},
    {nombre: ["Lucía"], apellido: ["García"]}
];

/* Iterando sobre la matriz de objetos e imprimiendo la información de cada objeto. */
personas.forEach(e =>{
    console.log(imprimirInformacion(e));
})