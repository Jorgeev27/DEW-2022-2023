/* 

8. Implementar el control de 3 variables (a, b, c) para que se muestre 
un mensaje de error cuando se produzca alguna de las siguientes 
situaciones (el mensaje de error debe indicar qué situación(es) 
no se cumplieron):

a) Al menos una de las 3 variables es negativa.

b) Las tres variables son iguales a 0.

c) Las suma de las 3 variables es mayor que 10 Y las tres variables son diferentes.

*/

var a = prompt ("Dame la variable a");
var b = prompt ("Dame la variable b");
var c = prompt ("Dame la variable c");

if(a < 0 || b < 0 || c < 0){ //Si 1 de las variables es negativa
    alert("Al menos una de las 3 variables es negativa");
}else if(a == 0 && b == 0 && c == 0){ //Si las 3 variables son iguales a 0
    alert("Las tres variables son iguales a 0");
}else if(a + b + c > 10 && (a != b) && (b != c) && (c != a)){ //Si entre las 3 variables es mayor a 10 
    //y las 3 variables son diferentes
    alert("Las suma de las 3 variables es mayor que 10 y las 3 variables son diferentes");
}