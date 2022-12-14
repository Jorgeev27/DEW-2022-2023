/* 

13. Escribir un programa que proporcione el desglose en el número 
mínimo de billetes y monedas de una cantidad entera cualquiera 
de euros dada. Recuerda que los billetes y monedas de uso legal 
disponibles hasta 1 euro son de: 500, 200, 100, 50, 20, 10, 5, 2 y 1 euros. 
Para ello deben solicitar al usuario un número entero 
(comprobar que lo es) y desglosar la cantidad en el número 
mínimo de billetes y monedas.

*/

let dinero=prompt("Introduce tu dinero");
let monedas=Array(500, 200, 100, 50, 20, 10, 5, 2, 1);
let cambioMonedas=Array(0, 0, 0, 0, 0, 0, 0, 0, 0);

for(i = 0; i < monedas.length; i++){
    if(dinero >= monedas[i]){
        cambioMonedas[i] = parseInt(dinero/monedas[i]);
        dinero = (dinero - (cambioMonedas[i] * monedas[i]));
    }
}

for(i = 0; i < monedas.length; i++){
    if(cambioMonedas[i] > 0){
        if(monedas[i] >= 5){
            document.write("Tienes en desglose: " + cambioMonedas[i] + " billetes de: " + monedas[i] + " euros <br/>");
        }else{
            document.write(cambioMonedas[i] + " monedas de: " + monedas[i] + " euros <br/>");
        }
    }
}