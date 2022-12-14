/* Obtener los elementos del archivo HTML. */
let saludar = document.getElementById("saludar");
let contadores  = document.getElementById("contadores");

/* Declarando dos variables, una para el contador y otra para el localStorage. */
let contador = 0;
let locaLStorage = window.localStorage;


/* Está llamando a la función `iniciarSesion()` cuando se carga la página. */
onload = () => {
    iniciarSesion();
}


/**
 * Si no hay nada en localStorage, pídale al usuario su nombre y guárdelo en localStorage. Si hay algo
 * en localStorage, saluda al usuario por su nombre
 */
function iniciarSesion(){
    if(locaLStorage.length === 0){
        let nombre = prompt("Dime tu nombre");
        if(nombre !== null){
            locaLStorage.setItem('nombre', nombre);
            saludar.innerHTML += "Bienvenido " + locaLStorage.getItem("nombre") + "!";
        }
    }else{
        if(locaLStorage.getItem('nombre') !== null && locaLStorage.getItem('nombre') !== "" && saludar.value === undefined){
            saludar.innerHTML += "Otra vez por aquí " + locaLStorage.getItem('nombre') + ", ¿Cómo le va?";
        }
    }
}

/**
 * Cuando se hace clic en el botón, el contador aumenta en uno y el nuevo valor se agrega a la lista de
 * contadores.
 */
function aumentarContador(){
    contador++;
    contadores.innerHTML += contador + "\n";
}

/**
 * Disminuye el valor de la variable contador en uno, y luego agrega el nuevo valor de contador al
 * final del texto en el elemento con el id contadores.
 */
function disminuirContador(){
    if(contador > 0){
        contador--;
        contadores.innerHTML += contador + "\n";
    }
}

/**
 * Borra el almacenamiento local.
 */
function cerrarSesion(){
    alert("Adios " + locaLStorage.getItem('nombre'));
    locaLStorage.clear();
}