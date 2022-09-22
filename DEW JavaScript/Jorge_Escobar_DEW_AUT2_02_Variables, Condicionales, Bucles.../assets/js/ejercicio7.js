/* 

7. Hacer un juego para que el usuario averigüe la capital de un país 
previamente definida. Tiene tres intentos y debe mostrase en 
pantalla si ha acertado o no, incluyendo en este caso el 
número de intentos que le quedan.

*/

let contadorFallo = 2;
let capitalPais = "Bruselas";
let acierto = false;
let intro = alert("Te voy a decir un pais y tu me tienes que adivinar la capital");
while(contadorFallo >=0 && !acierto){
    let respuestaCapital = prompt("Capital de... Belgica");
    if(respuestaCapital == capitalPais){
        acierto = true;
        alert("Felicidades!!!! Has acertado");
    }else{
        alert("OOH, has fallado pero tienes " + contadorFallo + " intentos mas");
        contadorFallo --;
    }
}

if(acierto == true){
    alert("Aqui acaba al juego con la respuesta correcta!!!!");
}else{
    alert("Has terminado con los intentos NOOOO. La respuesta es: " + capitalPais);
}
