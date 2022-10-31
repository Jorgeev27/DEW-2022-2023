/* 

7. Dado el siguiente fichero html, desarrollar la función calcularLinks() en javascript. 
La función debe calcular la cantidad de links (etiquetas <a>) 
dentro del div contenedor con id=”container”. Imprimir el resultado en el div con id=”resultado”.

¡NO SE PERMITE MODIFICAR EL HTML!

*/

/* Obtener los elementos (resultado y container) por su id. */
let resultado = document.getElementById("resultado");
let container = document.getElementById("container");

/**
 * Cuenta el número de enlaces en el contenedor div y muestra el resultado en el div del mismo (resultado)
 */
function contarLinks(){
    let enlacesLinks = container.getElementsByTagName("a").length;
    resultado.innerHTML += "El número de enlaces es: " + enlacesLinks + "<br/>";
}