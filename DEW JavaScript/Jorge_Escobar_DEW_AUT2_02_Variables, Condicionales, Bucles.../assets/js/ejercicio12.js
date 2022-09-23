/* 

12. En el ejercicio anterior, añadir un argumento opcional booleano 
de forma que si está a `False` (valor por defecto) devuelve sólo 
el resultado numérico (p.ej: `24`), mientras que si se indica `True` 
le añade la unidad `ºC` (p.ej `24ºC`).

*/

let unidadTemperatura = false;
let unidadGrados = "ºC";

let temperatura = parseFloat(prompt("Introduce la temperatura"));
let farenheitACelsius = (temperatura - 32) * 5/9;
let unidad = prompt("¿Quieres la unidad?");
let respuesta1 = "si";
let respuesta2 = "no";


    if (unidad == respuesta1){
        unidadTemperatura = true;
        alert("La temperatura es: " + farenheitACelsius + unidadGrados);
    }else{
        alert("La temperatura es: " + farenheitACelsius + " grados Celsius");
    }
