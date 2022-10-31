/* 

1. Tenemos dos listas de asistentes a dos cursos: html y css. 
Queremos obtener una lista de los asistentes a ambos cursos.
Por ejemplo:

- html = ["Kevin", "Pablo", "Viti", "Tomás"]
- css = ["Pablo", "Guillermo", "Viti"] 

El resultado debería ser: ['Pablo', 'Viti'].

*/

/* Creando dos arrays (HTML y CSS) */

let html = ["Kevin", "Pablo", "Viti", "Tomás"];
let css = ["Pablo", "Guillermo", "Viti"];


/* Compara los dos arrays y lleva las coincidencias 
de los nombres al nuevo array: coincidenciaNombres(). */

let coincidenciaNombres = Array();
for(let i = 0; i < html.length; i++){
    for(let j = 0; j < css.length; j++){
        if(html[i] === css[j]){
            coincidenciaNombres.push(html[i]);
        }
    }
}

/* Está imprimiendo los arrays en el navegador, 
y también, el resultado de qué nombres coinciden. */

html = document.write("Array HTML: " + html + "<br/>");
css = document.write("Array CSS: " + css + "<br/>");
coincidenciaNombres = document.write("El resultado de las dos listas de asistentes (HTML y CSS) son: " + coincidenciaNombres);