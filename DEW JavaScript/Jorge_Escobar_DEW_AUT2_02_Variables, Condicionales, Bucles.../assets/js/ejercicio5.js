/* 

5. En este reto deberás sumar números e imprimirlos por la consola. 
Para ello, deberás solicitar al usuario que introduzca 2 
números e imprimir el resultado por la consola. 
Este proceso deberás repetirlo 5 veces.

*/

for(i = 0; i <5; i++){
    var num1 = prompt("Primer numero");
    var num2 = prompt("Segundo numero");
    var resultado = 0;
    resultado =  parseInt(num1) + parseInt(num2);
    console.log(num1 + "+" + num2 + "=" + resultado);
}
