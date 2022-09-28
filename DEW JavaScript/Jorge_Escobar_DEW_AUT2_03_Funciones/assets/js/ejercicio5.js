/* 

5. La letra del NIF se calcula dividiendo la parte 
numérica (8 primeras cifras) por 23. A partir del 
resto de esta división se asigna una letra según 
su posición en la siguiente 
cadena: `'TRWAGMYFPDXBNJZSQVHLCKE'`.

Por ejemplo, el DNI 64253469 da como resto 2 al 
dividir por 23 (tercera posición, ya que empieza por 0), 
por lo que le corresponde la letra `W`.

Implementar una función que calcule la letra a 
partir del número del NIF.

*/

let dni = parseInt(prompt("Dime tu DNI para saber la letra"));

function letraDNI(dni){
    if(dni < 0 || dni > 99999999){
        prompt("Introduce de nuevo el numero de DNI. Rango de 0 a 99999999");
    }else{
        let letrasDNI = "TRWAGMYFPDXBNJZSQVHLCKE";
        let resultadoLetra = dni % 23;
        let letra = letrasDNI.substring(resultadoLetra, resultadoLetra + 1);
        alert("Tu DNI es: " + dni + letra);
    }
}
letraDNI(dni);