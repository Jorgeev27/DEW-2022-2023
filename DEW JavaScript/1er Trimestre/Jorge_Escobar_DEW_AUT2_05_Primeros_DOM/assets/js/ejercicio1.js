/* 

1.  En la página web proporcionada (ejercicio1.html) puedes ver un texto con unos enlaces.
    Mediante la navegación de los elementos del DOM debes averiguar:
    - Numero de enlaces de la pagina
    - Direccion del penultimo enlace
    - Numero de enlaces que apuntan a http://prueba
    - Numero de enlaces del tercer párrafo

    Todas las respuestas debes añadirlas en la sección "información"
   
*/

/**
 * Función que muestra el número de enlaces que hay en la página
 */

function numeroEnlacesPagina(){
    let infomacion = document.getElementById("informacion"); // Se selecciona el elemento id "informacion"
    infomacion.innerHTML += "El numero de enlaces de la pagina es: " + document.getElementsByTagName("a").length + "<br/>"; // Se le añade a la informacion
}

/**
 * Función que muestra la dirección del penúltimo enlace
 */

function direccionPenultimoEnlace(){
    let enlaces = document.getElementsByTagName("a"); // Cogemos todos los elementos "a"
    let penultimoEnlace = enlaces[enlaces.length -2]; // Enlace -2 para así coger el penultimo del array
    let informacion = document.getElementById("informacion"); // Se selecciona el elemento id "informacion"
    informacion.innerHTML += "La direccion del penultimo enlace: " + penultimoEnlace.href + "<br/>"; // Se le añade a la informacion
}

/**
 * Función que muestra el número de enlaces que hay de http://prueba/
 */

function numeroEnlacesPrueba(){
    let enlaces = document.getElementsByTagName("a"); // Cogemos todos los elementos "a"
    let direccionEnlaces = "http://prueba/"; // Ponemos la direccion "prueba" que queremos coger
    let conteoEnlaces = 0; // Conteo de enlaces
    for (i = 0; i < enlaces.length; i++){ // Lo recorremos con for
        if(enlaces[i].href == direccionEnlaces){ // Si coincide la direccion con la que nos pone
            conteoEnlaces++; // Se lo añadimos al conteo
        }
    }
    let informacion = document.getElementById("informacion"); // Se selecciona el elemento id "informacion"
    informacion.innerHTML = "El numero de enlaces que hay a http://prueba/ es: " + conteoEnlaces + "<br/>"; // Se le añade a la informacion
}

/**
 * Función que muestra el número de enlaces que hay en el tercer párrafo
 */

function numeroEnlacesTercerParrafo(){
    let tercerParrafo = document.getElementsByTagName("p")[2]; // Cogemos el indice 2 del array "p"
    let enlacesTercerParrafo = tercerParrafo.getElementsByTagName("a").length; // Seleccionamos los "a" y contamos cuantos hay en el elemento
    let informacion = document.getElementById("informacion"); // Se selecciona el elemento id "informacion"
    informacion.innerHTML = "El numero de enlaces del tercer parrafo es: " + enlacesTercerParrafo + "<br/>"; // Se le añade a la informacion
}