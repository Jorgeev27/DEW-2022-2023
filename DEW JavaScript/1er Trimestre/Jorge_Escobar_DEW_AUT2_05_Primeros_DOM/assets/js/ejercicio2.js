/* 

2. En esta ocasión queremos ver inicialmente solo la mitad del texto 
   (tu decides que parte) y que cuando clicamos el botón se muestre 
   todo el texto y se oculte el botón.
   Este comportamiento lo debemos hacer mediante atributos CSS 
   
   Pistas: 
  - atributo display
  - inline container
   
*/

/**
 * Función que muestra el texto a la mitad y si pulsamos el botón lo veremos completo
 */

function muestra() {
    document.getElementById("adicional").style.display = "inline"; // Cambiamos a inline para ver el texto completo
    document.getElementsByTagName("button")[0].style.display = "none"; // Cambiamos a none para que la mitad del texto este oculto
}