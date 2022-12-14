/* 

2. Escribe un programa que pida una nota 
y muestre en una ventana emergente la siguiente información:

a. Si la nota está entre 0 y 5 el mensaje indicará: Suspenso

b. Si la nota está entre 5 y 7 el mensaje indicará: Aprobado

c. Si la nota está entre 7 y 9 el mensaje indicará: Notable

d. Si la nota está entre 9 y 10 el mensaje indicará: Sobresaliente

e. Si no se introduce un número real: ERROR! – Indique un 
    número del rango 0 a 10
    
f. Si es un número que no está comprendido entre 0 y 10: ERROR! 
    Indique unnúmero del rango 0 a 10

*/

let nota = prompt("Dame tu nota de clase");
function notaClase(nota){
    if(nota < 0){
        alert("ERROR!! Indica un numero entre 0 y 10");
    }else if(nota < 5){
        alert("Suspenso");
    }else if(nota <= 7){
        alert("Aprobado");
    }else if(nota <= 9){
        alert("Notable");
    }else if(nota == 10){
        alert("Sobresaliente");
    }else if(nota > 10){
        alert("ERROR!! Indica un numero entre 0 y 10");
    }
}
notaClase(nota);