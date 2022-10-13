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

let ventana;

/**
 * Función que abre la ventana del navegador
 */

function abrir(){
  ventana = window.open("https://www.google.es","","width=400, height=400");
}

/**
 * Función que cierra la ventana del navegador
 */

function cerrar(){
  if(ventana){
    ventana.close();
    alert("Ventana cerrada");
  }else{
    alert("ERROR!! No hay ventana que cerrar");
  }
}

/**
 * Función que amplia la ventana del navegador
 */

function ampliar(){
  if(ventana){
    ventana.location.href="about:blank";
    ventana.resizeBy(30,30);
  }else{
    alert("ERROR!! No hay ventana que cerrar");
  }
}

/**
 * Función que reduce la ventana del navegador
 */
function reducir(){
  if(ventana){
    ventana.location.href="about:blank";
    ventana.resizeBy(-30, -30);
  }else{
    alert("ERROR!! No hay ventana que cerrar");
  }
  if(ventana >= window.screen){
    alert("ERROR");
  }
}

/**
 * Función que mueve la ventana del navegador
 */
function mover() {
  if (ventana){ // Si la ventana está abierta
    ventana.location.href="about:blank"; // La ponemos en about:blank
    x = document.getElementById("x").value; // Cogemos todos los id que se llamen "X"
    y = document.getElementById("y").value; // Cogemos todos los id que se llamen "Y"
    if (isNaN(parseInt(x)) || isNaN(parseInt(y))) { // Si no son numeros, tanto las X como Y
      alert("Numeros no válidos") // Alert de no validos
    }else{
      ventana.focus(); // Establece el foco en la ventana
      ventana.moveTo(parseInt(x), parseInt(y)); // Y mueve las ventanas a la dirección que le asignamos
    }
  }else{
    alert("ERROR!! No hay ventana que cerrar"); // Alert de no hay ventana que cerrar
  }
}