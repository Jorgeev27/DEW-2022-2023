/* 

2. Realiza un programa para escribir todos los números impares 
entre dos números A y B introducidos por teclado. Antes habrá 
que comprobar cuál de los dos números A y B es mayor.
   
*/

let numero1 = parseInt(prompt("Dame el primer numero")); // Primer número.
let numero2 = parseInt(prompt("Dame el segundo numero")); // Segundo número.
let numeroMayor = 0; // Número mayor a 0.
let numeroMenor = 0; // Número menor a 0.

/**
 * Función que nos dirá cuál es el número más mayor y los impares entre los números introducidos.
 * @param {*} numero1 
 * @param {*} numero2 
 */
function numerosImpares(numero1, numero2){
    if(numero1 > numero2){ //Si el número 1 es mayor que el número 2.
        numeroMayor = numero1;
        numeroMenor = numero2;
        document.write("El numero " + numeroMayor + " es mayor que " + numeroMenor + "<br/>");
    }else{ // Si el número 2 es mayor que el número 1.
        numeroMayor = numero2;
        numeroMenor = numero1;
        document.write("El numero " + numeroMayor + " es mayor que " + numeroMenor + "<br/>");
    }

    for(i = numeroMenor; i < numeroMayor; i++){ // Lo recorremos con el for desde el número menor al número mayor y obtenemos los impares de entre los números introducidos.
        if (i % 2 == 1){
            document.write(i + "|"); // Los mostramos
        }
    }

}

numerosImpares(numero1, numero2);