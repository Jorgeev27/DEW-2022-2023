/* 

12. Programa que pide una frase y devuelve el número 
de cada una de las vocales que contiene. 
(nº de a’s, de e’s, etc.)

*/

let frase = prompt("Dame una frase");
let vocalesFrasesA = 0;
let vocalesFrasesE = 0;
let vocalesFrasesI = 0;
let vocalesFrasesO = 0;
let vocalesFrasesU = 0;

vocalesFrase(frase);


function vocalesFrase(frase){
    let vocales = Array("a", "A", "e", "E","i", "I","o", "O","u", "U");
    for(let i  = 0; i < frase.length; i++){
        if(frase.charAt(i).includes("a")){
            vocalesFrasesA++;
        }else if(frase.charAt(i).includes("A")){
            vocalesFrasesA++;
        }else if(frase.charAt(i).includes("e")){
            vocalesFrasesE++;
        }else if(frase.charAt(i).includes("E")){
            vocalesFrasesE++;
        }else if(frase.charAt(i).includes("i")){
            vocalesFrasesI++;
        }else if(frase.charAt(i).includes("I")){
            vocalesFrasesI++;
        }else if(frase.charAt(i).includes("o")){
            vocalesFrasesO++;
        }else if(frase.charAt(i).includes("O")){
            vocalesFrasesO++;
        }else if(frase.charAt(i).includes("u")){
            vocalesFrasesU++;
        }else if(frase.charAt(i).includes("U")){
            vocalesFrasesU++;
        }
    }
    vocales = document.write("Total de vocales: " + (vocalesFrasesA + vocalesFrasesE + vocalesFrasesI + vocalesFrasesO + vocalesFrasesU) + " vocales <br/>");
    document.write("Hay " + vocalesFrasesA + " vocales de A en la frase <br/>");
    document.write("Hay " + vocalesFrasesE + " vocales de E en la frase <br/>");
    document.write("Hay " + vocalesFrasesI + " vocales de I en la frase <br/>");
    document.write("Hay " + vocalesFrasesO + " vocales de O en la frase <br/>");
    document.write("Hay " + vocalesFrasesU + " vocales de U en la frase <br/>");
}