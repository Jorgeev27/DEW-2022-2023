/* 

11. Realiza un script que permita añadir tantos números a un select 
como el usuario le pase. Mayores o iguales a 1.

*/

/**
 * Crea un elemento de selección con la cantidad de opciones especificadas por el usuario
 */
function anadirSelect(){
    /* Obtener el valor de la entrada y la selección. */
    let selectRealiazdos = document.getElementById("selectRealizados");
    let numSelect = document.getElementById("numSelect").value;

    /* Creando un elemento de selección con la cantidad de opciones que el
    usuario ha seleccionado. */
    if(numSelect <= 0){
        alert("Numeros mayores o iguales a 1");
    }else if(numSelect >= 1){
        for(let i = 1; i <= numSelect; i++){
            let opcionSelect = document.createElement("option");
            opcionSelect.value = i;
            opcionSelect.innerHTML += i;
            selectRealiazdos.appendChild(opcionSelect);
        }
    }
}