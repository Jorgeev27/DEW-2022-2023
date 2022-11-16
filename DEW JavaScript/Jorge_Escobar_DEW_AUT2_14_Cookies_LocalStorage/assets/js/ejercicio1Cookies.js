/* Agregar detectores de eventos a los botones. */
document.getElementById("verCookies").addEventListener("click", verCookies);
document.getElementById("crearCookies").addEventListener("click", crearModificarCookies);
document.getElementById("modificarCookies").addEventListener("click", crearModificarCookies);
document.getElementById("leerCookies").addEventListener("click", leerCookies);
document.getElementById("borrarCookies").addEventListener("click", borrarCookies);


/**
 * Muestra un cuadro de mensaje con las cookies actuales.
 */
function verCookies(){
    alert("Cookies actuales: \n" + document.cookie);
}

/**
 * Le pide al usuario un nombre, un valor y una fecha de caducidad, y luego crea una cookie con esa
 * información.
 */
function crearModificarCookies(){
    var nombre = prompt("Dime tu nombre");
    var valor = prompt("Dime tu valor");
    var expiracion = parseInt(prompt("Dime el número de días de expiración"));
    setCookie(nombre, valor, expiracion);
    verCookies();
}

/**
 * Solicita al usuario un nombre de cookie, luego usa la función getCookie para recuperar el valor de
 * la cookie y finalmente muestra el valor en un cuadro de alerta.
 */
function leerCookies(){
    var nombre = prompt("Dime el nombre de la cookie a leer");
    var resultado = getCookie(nombre);
    alert(resultado);
}

/**
 * Le pide al usuario el nombre de una cookie y luego la elimina.
 */
function borrarCookies(){
    var nombre = prompt("Dime el nombre de la cookie a borrar");
    deleteCookie(nombre);
}

/**
 * Si desea eliminar una cookie, simplemente configúrela para que caduque en el pasado.
 * @param nombre - El nombre de la cookie.
 */
function deleteCookie(nombre){
    setCookie(nombre,"", 0);
}

/**
 * Crea una cookie con el nombre y el valor pasados como parámetros, y establece la fecha de caducidad
 * en la cantidad de días pasados como parámetro.
 * @param nombre - El nombre de la cookie.
 * @param valor - El valor de la cookie.
 * @param expiracion - El número de días hasta que caduque la cookie.
 */
function setCookie(nombre, valor, expiracion){
    var date = new Date();
    date.setTime(date.getTime() + expiracion * 24 * 3600 * 1000);
    var expiracion = "expires=" + date.toUTCString();
    document.cookie = nombre + "=" + valor + ";" + expiracion + ";path=/";
}

/**
 * Toma una cadena como argumento y devuelve el valor de la cookie con ese nombre.
 * @param nombre - El nombre de la cookie que desea recuperar.
 * @returns El valor de la cookie.
 */
function getCookie(nombre){
    var nom = nombre + "=";
    var array = document.cookie.split(";");
    for(var i = 0; i < array.length; i++){
        var c = array[i];
        while(c.charAt(0) == " "){
            c = c.substring(1);
        }
        if(c.indexOf(nombre) == 0){
            return c.substring(nombre.length, c.length);
        }
    }
}