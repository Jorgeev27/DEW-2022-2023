/* 

13. Haz un programa que dado un número del 1 al 99, 
lo muestre escrito en letras. Por ejemplo, 
dado el 35 debería mostrarse treinta y cinco.

*/

let numero = prompt("Dime un numero del 1 al 99");
numeroALetras(numero);

function numeroALetras(numero){
    if(numero < 1 || numero > 100){
        prompt("Error al introducir el numero. Rango de 1 a 99");
    }else{
        console.log(numero);
    }
}