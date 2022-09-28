/* 

12. Programa que pide una frase y devuelve el número 
de cada una de las vocales que contiene. 
(nº de a’s, de e’s, etc.)

*/

let frase = prompt("Dame una frase");
vocalesFrase(frase);

function vocalesFrase(frase){
    let vocales = Array("a", "A", "e", "E", "i", "I", "o", "O", "u", "U");
        if (vocales.indexOf(frase.charAt(0) != -1)){
            contadorVocales++;
        }
    }
    alert("Hay " + contadorVocales + " vocales");