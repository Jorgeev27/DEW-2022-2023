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

function a(){
    let gradosARadianes = parseInt(prompt("Introduce los grados para pasarlo a Radianes"));
    alert("Los Radianes son: " + deg2rad(gradosARadianes).toFixed(3));
}

function deg2rad(gradosARadianes){
    let radianes = gradosARadianes * Math.PI / 180;
    return radianes;
}

function b(){
    let radianesAGrados = parseInt(prompt("Introduce los radianes para pasarlo a Grados"));
    alert("Los Grados son: " + rad2deg(radianesAGrados).toFixed(3));
}

function rad2deg(radianesAGrados){
    let grados = radianesAGrados * 180 / Math.PI;
    return grados;
}

/**
 * APARTADO B
 */

function c(){
    let anguloGradoSeno = parseInt(prompt("Introduce un angulo para averiguar el seno de dicho angulo"));
    alert("El Seno del Angulo es: " + sinDeg(anguloGradoSeno).toFixed(3));
}

function sinDeg(anguloGradoSeno){
    let anguloEnRadianes = deg2rad(anguloGradoSeno);
    let seno = Math.sin(anguloEnRadianes);
    return seno;
}

function d(){
    let anguloGradoCoseno = parseInt(prompt("Introduce un angulo para averiguar el coseno de dicho angulo"));
    alert("El Coseno del Angulo es: " + cosDeg(anguloGradoCoseno).toFixed(3));
}

function cosDeg(anguloGradoCoseno){
    let anguloEnRadianes = deg2rad(anguloGradoCoseno);
    let coseno = Math.cos(anguloEnRadianes);
    return coseno;
}

/**
 * APARTADO C
 */

function e(){
    let anguloGradoCosenoSeno = parseInt(prompt("Introduce el coseno para averiguar el seno del angulo"));
    alert("El Coseno del Seno del Angulo es: " + sinDegAlt(anguloGradoCosenoSeno).toFixed(3));
}

function sinDegAlt(anguloGradoCosenoSeno){
    let seno = Math.sqrt(1 - Math.pow(cosDeg(anguloGradoCosenoSeno), 2));
    return seno;
}

function f(){
    let anguloGradoSenoCoseno = parseInt(prompt("Introduce el seno para averigurar el coseno del angulo"));
    alert("El Seno del Coseno del Angulo es: " + cosDegAlt(anguloGradoSenoCoseno).toFixed(3));
}

function cosDegAlt(anguloGradoSenoCoseno){
    let coseno = Math.sqrt(1 - Math.pow(sinDeg(anguloGradoSenoCoseno), 2));
    return coseno;
}