/* 

12. Programa que pide una frase y devuelve el número 
de cada una de las vocales que contiene. 
(nº de a’s, de e’s, etc.)

*/

let frase = prompt("Dame una frase");
vocalesFrase(frase);

function vocalesFrase(frase){
    let vocales = Array("AaEeIiOoUu");
    let contadorVocales = frase.match(/[vocales]/gi).length;
    document.write("Hay " + contadorVocales + " vocales");
}
