/* 

9. Implementar una función hdec2hms(x) que transforme 
una hora en formato decimal a su equivalente en 
formato hh:mm:ss (en texto). 
Por ejemplo, 8.25 = “8:15:00” y 10.12 = “10:07:12”. 
Implementar también la función inversa hms2hdec(h,m,s).

*/

let decAHora = prompt("Dime una hora en formato decimal para pasarlo a formato hh:mm:ss");
decimalAHora(decAHora);

function decimalAHora(decAHora){
    if(decAHora < 0 || decAHora > 24){
        prompt("ERROR!! Indica un numero entre 1 y 24");
    }else{
        alert("Tu numero es: " + decAHora);
    }
}


// numero *60 /100
// numero *100/60