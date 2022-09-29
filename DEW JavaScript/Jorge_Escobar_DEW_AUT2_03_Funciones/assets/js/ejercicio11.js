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

/**
 * APARTADO A:
 */
let gradosARadianes = prompt("Dime los grados:");
deg2rad(gradosARadianes);

function deg2rad(gradosARadianes){
    let radianes = gradosARadianes * 180 / Math.PI;
    return radianes;
}
document.write("Los radianes son: " + radianes.toFixed(2));




let radianesAGrados= prompt("Dime los radianes:");
rad2deg(radianesAGrados);

function rad2deg(radianesAGrados){
    let grados = radianesAGrados * Math.PI / 180;
    return grados;
}
document.write("Los grados son: " + grados.toFixed(2));



/**
 * APARTADO B:
 */

/*
let anguloSeno = prompt("Dime un angulo:");
sinDeg(anguloSeno);

function sinDeg(anguloSeno){
    let radianesAngulo = deg2rad(anguloSeno);
    let seno = Math.sin(radianesAngulo);
    return seno;
}
document.write("El seno de este angulo es: " + anguloSeno.toFixed(2));




let anguloCoseno = prompt("Dime un angulo:");
cosDeg(anguloCoseno);

function cosDeg(anguloCoseno){
    let radianesAngulo = deg2rad(anguloCoseno);
    let coseno = Math.cos(radianesAngulo);
    return coseno;
}
document.write("El coseno de este angulo es: " +anguloCoseno.toFixed(2));
*/



/**
 * APARTADO C:
 */

/*
let senoCoseno = prompt("Dime un angulo:");
sinDegAlt(senoCoseno);

function sinDegAlt(senoCoseno){
    let seno = Math.sqrt(1- Math.pow(cosDeg(anguloCoseno), 2));
    return seno;
}
document.write("El seno del coseno del angulo es: " + senoCoseno);




let cosenoSeno = prompt("Dime un angulo:");
sinDegAlt(cosenoSeno);

function sinDegAlt(cosenoSeno){
    let coseno = Math.sqrt(1- Math.pow(sinDeg(anguloSeno), 2));
    return coseno;
}
document.write("El coseno del seno del angulo es: " + caches);
*/