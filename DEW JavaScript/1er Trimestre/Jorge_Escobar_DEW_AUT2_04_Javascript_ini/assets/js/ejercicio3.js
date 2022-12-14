/* 

3. Realiza un programa que pida números por teclado 
hasta que nos introduzcan un número menor que 1 o mayor que 50, 
momento en el que se invertirán los elementos dentro del array. 
Mostrar el array invertido. Se valorará el uso de 1 solo array para todo el programa.
   
*/
let numerosUnoCincuenta = 1; // Números del 1 al 50 inicializado al 1.
let numerosArray = []; // Array de los números introducidos.

/**
 * Función que hace que los números introducidos sean mostrados como los introdujo y, además, invertido.
 * @param {*} numerosUnoCincuenta 
 */
function arrayInvertido(numerosUnoCincuenta){
    while(numerosUnoCincuenta > 0 && numerosUnoCincuenta < 51){ // Mientras sean los números sean entre el rango del 1 al 50.
        numerosUnoCincuenta = parseInt(prompt("Dime numeros del 1 al 50. Si introduces un numero menor que 1 o mayor que 50, se acabó el juego"));
        if(!isNaN(numerosUnoCincuenta)){ // Si lo que el usuario ha introducido es un número.
            numerosArray.push(numerosUnoCincuenta); // Lo introduce en el array
        }else{ // Si no es así, saltará el aviso de que no es un número válido y que por alguna circunstancia, ha introducido un número y/o carácter inválido.
            alert("OOOOH. No es un numero valido :(");
            alert("Ya no puedes introducir mas numeros, ya que has introducido un caracter no valido o un numero menor que 1 o mayor que 50");
        }
    }
    document.write("Numeros introducidos: "+ numerosArray + "<br/>");
    document.write("Numeros invertidos: " + numerosArray.reverse() + "<br/>");
    // Lo mostramos el array de los números introducidos y su invertido
}

arrayInvertido(numerosUnoCincuenta);