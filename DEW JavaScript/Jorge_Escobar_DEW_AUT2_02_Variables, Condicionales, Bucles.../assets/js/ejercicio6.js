/* 

6. En este reto deberás sumar el valor de 5 números naturales. 
Para ello, deberás solicitar al usuario que introduzca un 
número entero, calcular y sumar los 5 números siguientes e 
imprimir el resultado por la consola, y volver a repetir 
este proceso 4 veces más.
*/

for(i = 0; i < 5; i++){
    let num = parseInt(prompt("Introduce un numero"));
    let numMas5 = alert("Estos son los 5 numeros siguientes al numero introducido: " + "("+ num + ") " + 
    parseInt(num +1) + "-" + parseInt(num +2) + "-" + parseInt(num +3) + "-" + parseInt(num +4) + "-" + parseInt(num +5));
    console.log(numMas5);
}
