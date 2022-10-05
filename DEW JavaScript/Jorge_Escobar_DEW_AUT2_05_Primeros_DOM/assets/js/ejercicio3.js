/* 

3. Completar el código JavaScript proporcionado para que se añadan nuevos elementos 
a la lista cada vez que se pulsa sobre el botón. Utilizar las funciones DOM para 
crear nuevos nodos y añadirlos a la lista existente. Al igual que sucede en el ejercicio anterior, 
la acción de pinchar sobre un botón forma parte de los "Eventos" de JavaScript. 
En este ejercicio, sólo se debe saber que al pinchar sobre el botón, se ejecuta la función llamada anade().
   
*/



function anade() {
    let elementoNuevo = document.createElement("li"); // Creamos elemento "li"
    elementoNuevo.innerHTML = "Nuevo Elemento"; // Asignamos texto
    let listaElementos = document.getElementById("lista"); // Seleccionamos el id "lista"
    listaElementos.appendChild(elementoNuevo); //Añadimos el elemento creado a la "lista"
}