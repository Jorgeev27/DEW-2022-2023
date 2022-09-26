/* 

14. ¿Cuántos segundos han pasado desde que naciste? ¿y minutos? 
¿y horas? ¿y días? Implementar una función que dada una fecha cualquiera 
en formato “yyyy-mm-dd”, devuelva cuánto tiempo ha pasado desde esa 
fecha. La función aceptará un segundo parámetro para indicar en qué 
unidad se quiere obtener el 
resultado: ‘d’ → días, ‘h’ → horas, ‘m’ → minutos y ‘s’ → segundos. 
Si no es ninguna de estas unidades, se mostrará un error.

*/

let fecha = prompt("Dime tu fecha de nacimiento: formato YYYY-MM-DD");
let formatoFecha = prompt("Formato de fecha en; d: dias, h: horas, m: minutos, s: segundos");
calculoFecha(fecha, formatoFecha);

function calculoFecha(fecha, formatoFecha){
    let date = new Date(fecha); // definicion de fecha actual recogida en parametros
    dateUnix = date.getTime()/1000; // tiempo de la fecha de nacimiento en segundos
    nowUnix = Date.now()/1000; // tiempo actual en segundos
    diferenciaTiempo = nowUnix - dateUnix; // tiempo actual - tiempo de la fecha de nacimiento en segundos
     
    if(formatoFecha == "d"){
        let dias = parseInt(diferenciaTiempo/24/3600); // segundos a dias
        document.write("Pasaron " + dias + " dias desde tu fecha de nacimiento");
    }else if(formatoFecha == "h"){
        let horas = parseInt(diferenciaTiempo/3600); // segundos a horas
        document.write("Pasaron " + horas + " horas desde tu fecha de nacimiento");
    }else if(formatoFecha == "m"){
        let minutos = parseInt(diferenciaTiempo/60); // segundos a minutos
        document.write("Pasaron " + minutos + " minutos desde tu fecha de nacimiento");
    }else if(formatoFecha == "s"){
        let segundos = parseInt(diferenciaTiempo); // segundos
        document.write("Pasaron " + segundos + " segundos desde tu fecha de nacimiento");
    }else{
        alert("ERROR al introducir la fecha de nacimiento");
    }
}
