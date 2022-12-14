/* 

4. Programa que pide una frase y devuelve cuantas veces 
aparece de cada una de las 4 primeras letras del 
abcedario (nº de a’s, de b’s, etc.). Prueba con: 
“Cuenta la leyenda que los dioses castigaron a algunos 
hombres convirtiéndolos en águilas.“
   
*/


let frase = prompt("Dime una frase");
let fraseA = 0;
let fraseB = 0;
let fraseC = 0;
let fraseD = 0;

/**
 * Función que de dice cuántas letras hay en las 4 primeras letras del abecedario
 * 
 */

function fraseAbecedario(frase){
    let abcedario = Array("a", "á", "A", "Á", "b", "B", "c", "C", "d", "D"); // Array de las 4 primeras letras del abecedario
    for(let i = 0; i < frase.length; i++){ // Recorremos la frase
        if(frase.charAt(i).includes("a")){ // Si tiene el carácter a, á, A o Á
            fraseA++; // Se añade al contador de A
        }else if(frase.charAt(i).includes("á")){
            fraseA++;
        }else if(frase.charAt(i).includes("A")){
            fraseA++;
        }else if(frase.charAt(i).includes("Á")){
            fraseA++;
        }else if(frase.charAt(i).includes("b")){ // Si tiene el carácter b o B
            fraseB++; // Se añade al contador de B
        }else if(frase.charAt(i).includes("B")){
            fraseB++;
        }else if(frase.charAt(i).includes("c")){ // Si tiene el carácter c o C
            fraseC++; // Se añade al contador de C
        }else if(frase.charAt(i).includes("C")){
            fraseC++;
        }else if(frase.charAt(i).includes("d")){ // Si tiene el carácter d o D
            fraseD++; // Se añade al contador de D
        }else if(frase.charAt(i).includes("D")){
            fraseD++;
        }
    }
    abcedario = document.write("Total de letras: " + (fraseA + fraseB + fraseC + fraseD) + "<br/>"); // Total de cuántas letras hay de a, á, A, Á, b, B, c, C, d, D
    document.write("Hay " + fraseA + " letras de A en la frase <br/>"); // Total de letras de A
    document.write("Hay " + fraseB + " letras de B en la frase <br/>"); // Total de letras de B
    document.write("Hay " + fraseC + " letras de C en la frase <br/>"); // Total de letras de C
    document.write("Hay " + fraseD + " letras de D en la frase <br/>"); // Total de letras de D
}

fraseAbecedario(frase);