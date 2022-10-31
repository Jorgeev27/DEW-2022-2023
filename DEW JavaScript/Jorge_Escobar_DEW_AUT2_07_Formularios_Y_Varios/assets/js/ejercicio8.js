/* 

8. En el siguiente formulario propuesto se encuentra una de las propiedades tratadas en el tema. 
Averigüe cuál e intente completar el programa de javascript para que muestre el siguiente mensaje.

*/

/**
 * Toma el valor del campo de entrada llamado entrada y lo escribe en el documento
 */
function saludo(){
    let nombreUsuario = document.fdatos.entrada.value;
    document.write("Hola, buen día " + nombreUsuario);
}