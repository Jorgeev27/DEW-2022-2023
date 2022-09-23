/* 

14. ¿Cuántos segundos han pasado desde que naciste? ¿y minutos? 
¿y horas? ¿y días? Implementar una función que dada una fecha cualquiera 
en formato “yyyy-mm-dd”, devuelva cuánto tiempo ha pasado desde esa 
fecha. La función aceptará un segundo parámetro para indicar en qué 
unidad se quiere obtener el 
resultado: ‘d’ → días, ‘h’ → horas, ‘m’ → minutos y ‘s’ → segundos. 
Si no es ninguna de estas unidades, se mostrará un error.

*/

let fechaNacimiento = prompt("Introduce tu fecha de nacimiento: formato yyyy-mm-dd");
fechaEnSegMinHD(fechaNacimiento);

function fechaEnSegMinHD(fechaSegMinHD){
    let fechaActual = new Date();
    fecha =  fechaActual.getFullYear() + "/" + (fechaActual.getMonth() + 1) + fechaActual.getDate();
    let fechaSegundos = parseInt(fechaActual.getTime());
    let fechaMinutos = parseInt(fechaSegundos / 60);
    let fechaHoras = parseInt(fechaMinutos / 60);
    let fechaDias = parseInt(fechaHoras / 24);
    fechaSegMinHD = fechaSegundos, fechaMinutos, fechaHoras, fechaDias;

    document.write("Pasaron " + fechaSegundos + " segundos desde tu fecha de nacimiento <br/>");
    document.write("Pasaron " + fechaMinutos + " minutos desde tu fecha de nacimiento <br/>");
    document.write("Pasaron " + fechaHoras + " horas desde tu fecha de nacimiento <br/>");
    document.write("Pasaron " + fechaDias + " dias desde tu fecha de nacimiento <br/>");
}
