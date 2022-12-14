/* 

1. Ventanas - Cree una página web donde aparezcan los siguientes botones:

- Abrir Ventana: abrirá una ventana de tamaño 400px*400px con la dirección www.google.es. 
  La nueva ventana deberá aparecer centrada en la pantalla.

- Cerrar Ventana: deberá cerrar la ventana que se acaba de crear. Si la ventana aún no se ha creado, 
  o bien el usuario la cerró, deberá mostrar un error que diga “No hay ventana que cerrar”.

- Ampliar: modificará el tamaño de la ventana aumentando tanto el ancho como en 30px. 
  Se mostrará un mensaje de error cuando no se pueda ampliar el alto o el ancho. 
  NOTA: para que funcione este y los siguientes apartados tiene que abrir una ventana en blanco, 
  para ello quite la dirección www.google.es

- Reducir: modificará el tamaño de la ventana disminuyendo tanto el ancho como en 30px. 
  Se mostrará un mensaje de error cuando no se pueda reducir el alto o el ancho.

- Mover: Ubicará la pantalla en la posición indicada en los cuadros de texto. 
  Los valores tendrán que ser enteros positivos. Antes de mover la nueva pantalla tendrá que comprobar 
  que la nueva posición de la ventana es posible teniendo en cuenta tanto la posición como su alto y ancho y el tamaño de la pantalla.

*/

let ventana; // Variable ventana
let x; // Variable coordenada X
let y; // Variable coordenada Y

/**
 * Función que abre la ventana del navegador
 */

function abrir(){
  if(ventana){ // Si la ventana está abierta
    alert("ERROR!! Ya hay una ventana abierta"); // Error de que ya está abierta
  }else{
    ventana = window.open("https://www.google.es","","width=400, height=400"); // Sino crea una ventana nueva
  }
}

/**
 * Función que cierra la ventana del navegador
 */

function cerrar(){
  if(ventana){ // Si la ventana está abierta
    ventana.close();
    alert("Ventana cerrada. No hay ventana que cerrar"); // La cierra y mensaje de que se ha cerrado
  }else{
    alert("ERROR!! No hay ventana que cerrar"); // Sino hay ninguna ventana abierta y le da al botón, mensaje de error al cerrar la ventana
  }
}

/**
 * Función que amplia la ventana del navegador
 */

function ampliar(){
  if(ventana){ // Si la ventana está abierta
    ventana.location.href="about:blank"; // Pone la ventana en blanco
    if(ventana.innerHeight + 30 > screen.height || ventana.innerWidth + 30 > screen.width){ // Si la ventana supera los límites de la pantalla
      alert("ERROR!! Esta ventana no se puede ampliar mas"); // Error de que no se puede ampliar más
    }else{
    ventana.resizeBy(30, 30); // Sino la ventana se amplia
    }
  }else{
    alert("ERROR!! No hay ventana que ampliar"); // Sino hay ninguna ventana abierta y le da al botón, mensaje de error al ampliar la ventana
  }
}

/**
 * Función que reduce la ventana del navegador
 */
function reducir(){
  if(ventana){ // Si la ventana está abierta
    ventana.location.href="about:blank"; // Pone la ventana en blanco
    if(ventana.innerHeight - 30 < 100 || ventana.innerWidth - 30 < 100){ // Si la ventana es más pequeña que 100
      alert("ERROR!! Esta ventana no se puede reducir mas"); // Error de que no se puede reducir más
    }else{
    ventana.resizeBy(-30, -30); // Sino la ventana se reduce
    }
  }else{
    alert("ERROR!! No hay ventana que reducir"); // Sino hay ninguna ventana abierta y le da al botón, mensaje de error al reducir la ventana
  }
}

/**
 * Función que mueve la ventana del navegador
 */
function mover() {
  if (ventana){ // Si la ventana está abierta
    ventana.location.href="about:blank"; // La ponemos en blanco
    x = document.getElementById("x").value; // Cogemos todos los id que se llamen "X"
    y = document.getElementById("y").value; // Cogemos todos los id que se llamen "Y"
    if (isNaN(parseInt(x)) || isNaN(parseInt(y))) { // Si no son numeros, tanto las X como Y
      alert("Numeros no válidos") // Alert de no validos
    }else{
      ventana.focus(); // Establece el foco en la ventana
      ventana.moveTo(parseInt(x), parseInt(y)); // Y mueve las ventanas a la dirección que le asignamos
    }
  }else{
    alert("ERROR!! No hay ventana que mover"); // Alert de no hay ventana que cerrar
  }
  //El problema que hay con esta función: mover(), es que si le pasas numeros y letras, la ventana se mueve. Pero si solo le pasas letras, salta el error de sólo números
}