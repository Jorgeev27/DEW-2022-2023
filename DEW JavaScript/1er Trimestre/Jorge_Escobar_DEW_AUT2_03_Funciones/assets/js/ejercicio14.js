/* 

14. Programa que lee una frase y averigua si es “palíndroma”. 
Una frase es palíndroma si se lee igual de izquierda a derecha 
que de derecha a izquierda (sin considerar los espacios en blanco). 
Ejemplo: “le saco sus ocas el”, “dabale arroz a la zorra el abad”.

*/

let frase = prompt("Dime una frase");
palindroma(frase);


function palindroma(frase){
    frase = frase.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
    const fraseReversa = frase.split("").reverse().join("");
    if(fraseReversa === frase){
        return true;
    }else{
        return false;
    }

    /**
     * La expresión regular es todas las A-Z, tanto mayúsculas como minúsculas, y desde el 0 al 9. El modificador "/g" es una comparación global.
     * frase.toLowerCase(): devuelve la frase en minúsculas
     * frase.split(""): separa la frase en un array aparte.
     * frase.reverse(): revierte la frase para saber si son iguales.
     * frase.join(""): vuelve a convertir la frase en un string.
     */
    
}
document.write("Tu frase es: " + frase + " y el resultado del palindroma es: " + palindroma(frase));