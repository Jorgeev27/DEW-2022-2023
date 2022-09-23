/* 

11. Para convertir grados Farenheit (`F`) a Celsius (`C`) se usa la 
siguiente expresión: `C = (F − 32) * 5/9`. Implementar una función 
que realice esta conversión (comprueba que 32ºF son 0ºC 
y que 75.2ºF son 24ºC).

*/

let temperatura = parseFloat(prompt("Introduce la temperatura"));
let farenheitACelsius = (temperatura - 32) * 5/9;
alert("La temperatura es: " + farenheitACelsius + " grados Celsius");
