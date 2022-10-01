/* 

9. Implementar una función hdec2hms(x) que transforme 
una hora en formato decimal a su equivalente en 
formato hh:mm:ss (en texto). 
Por ejemplo, 8.25 = “8:15:00” y 10.12 = “10:07:12”. 
Implementar también la función inversa hms2hdec(h,m,s).

*/

function a(){
    let hora = parseFloat(prompt("Hora formato decimal"));
    alert("La hora es: " + hdec2hms(hora));
}

function hdec2hms(hora){
    let horas;
    let minutos;
    let segundos;
    let minutosSegundos = hora - Math.floor(hora); //saca min y seg del numero
    horas = Math.floor(hora); // hora entera del numero
    segundos = minutosSegundos * 3600; // segundos del numero entero
    minutos = Math.floor(segundos / 60); // minutos del numero entero
    segundos %= 60; // segundos

    let decimalHora = horas + ":" + minutos + ":" + segundos.toFixed(0);
    return decimalHora;
}

function b(){
    let hora = prompt("Introduce hora. Formato hh:mm:ss");
    alert("El formato decimal es: " + hms2hdec(hora));
}

function hms2hdec(hora){
    let horas;
    let minutos;
    let segundos;
    const tiempoArray = hora.split(":");

    horas = parseInt(tiempoArray[0]);
    minutos = parseInt(tiempoArray[1]);
    segundos = parseInt(tiempoArray[2]);

    let horaDecimal = horas + (minutos / 60) + (segundos / 3600);
    return horaDecimal;
}