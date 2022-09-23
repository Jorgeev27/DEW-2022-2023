/* 

9. Diseñar el código para que con un valor recibido 'x'  
muestre los siguientes mensajes:

a) ‘Este es muy fácil... ¡prueba otro!’, si x es 0.

b) ‘El número es par’, si x es 2, 4 ó 6.

c) ‘El número es impar’, si x es 1, 3 ó 5.

d) ‘¡¡Sólo sé contar de 0 a 6!!’, para los demás casos.

*/

let num = parseInt(prompt("Dame un numero"));
let resultado = num % 2;
switch (num) {
    case 0:
        alert("Este es muy facil, prueba otro");
        break;
    case 2:
    case 4:
    case 6:
        resultado;
        alert("El numero es par");
        break;
    case 1:
    case 3:
    case 5:
        resultado;
        alert("El numero es impar");
        break;
    default:
        alert("Solo se contar de 0 a 6");
  }
