/* 

10. Completar función “marcado” que muestre los id de 
los inputs checkbox seleccionados.

Completar función “seleccion” que seleccione en el input 
“selection” desde las posiciones “selectIni” hasta “selectFin”.

Completar función “validar” que compruebe si el valor del input es apto, 
si el valor no es apto sustituir el contenido del label con la expresión regular.

*/

/**
 * Obtiene todos los elementos con el nombre "abc", luego los recorre y verifica si están marcados. Si
 * lo están, alerta al usuario con el número de la casilla de verificación
 */
function marcado(){
    let abc = document.getElementsByName("abc");
    for(let i = 0; i < abc.length; i++){
        if(abc[i].checked){
            //Los checkbox están puestos con números
            alert("Has marcado: " + i);
        }
    }
}

/**
 * Selecciona un rango de caracteres en un área de texto
 */
function seleccion(){
    let selectIni = document.getElementById("selectIni").value;
    let selectFin = document.getElementById("selectFin").value;
    const selection = document.getElementById("selection");
    selection.focus();
    selection.setSelectionRange(selectIni, selectFin);
}

/**
 * Toma el valor de la entrada con el id "validación" y comprueba si coincide con el patrón de la
 * entrada. Si lo hace, alerta "Valido". Si no lo hace, alerta "No valido"
 */
function validar(){
    let validacion = document.getElementById("validacion").value;
    let expReg = validacion.pattern;
    if(validacion.includes(expReg)){
        alert("Valido: " + validacion);
    }else{
        alert("No valido");
    }
}