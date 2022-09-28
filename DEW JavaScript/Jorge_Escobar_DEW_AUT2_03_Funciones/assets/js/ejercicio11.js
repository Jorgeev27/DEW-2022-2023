/* 

11. Cuando hablamos de ángulos, normalmente utilizamos 
los grados sexagesimales (se suelen representar como “deg”, 
una circunferencia completa son 360º deg). Sin embargo, 
en trigonometría es más común utilizar los radianes 
(“rad”, una circunferencia completa son 2π rad).

De esta forma, 360º equivalen a 2π. Las funciones trigonométricas 
de javascript, como la mayoría de lenguajes, trabajan en 
radianes, sin embargo en muchas ocasiones nosotros vamos 
a querer trabajaren grados. Por ello, se pide:

a) Implementar una función llamada deg2rad(x) que transforme 
de grados a radianes, y su inversa rad2deg(x)

b) Implementar una función sinDeg(x)que devuelva el seno del 
ángulo x y otra función cosDeg(x) que devuelva el coseno del 
ángulo x (en ambos casos x está en grados).

c) El seno y el coseno están relacionados por la siguiente 
ecuación: sin2x + cos2x = 1.

Utilizar esta relación para implementar una función sinDegAlt(x) 
que obtenga el seno de un ángulo x (en grados) usando para ello 
la función cosDeg(x) anteriormente implementada.

Implementar también la función inversa al apartado anterior: 
cosDegAlt(x) usando para ello sinDeg(x)

*/


//let gradosARadianes = prompt("Dime los grados: ");
let radianesAGrados= prompt("Dime los radianes: ");
let radianes = 0;
let grados = 0;
deg2rad(gradosARadianes);
rad2deg(radianesAGrados);
/*function deg2rad(gradosARadianes){
    radianes = gradosARadianes * (Math.PI / 180);
    return radianes;
}
document.write("Los radianes son: " + radianes.toFixed(2));
*/


function rad2deg(radianesAGrados){
    grados = (radianesAGrados * 180) / Math.PI;
    return grados;
}
document.write("Los grados son: " + grados.toFixed(2));