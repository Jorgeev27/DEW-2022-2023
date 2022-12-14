/* 

4. Con la siguiente tabla: 

UNO
DOS
TRES

Realiza:
    - Función para colocar el elemento 4
    - Colocar en cada celda un enlace que al pincharlo el tr pinchado descienda un nivel. Ojo con la última celda.
    - Consigue que esta tabla tenga fondo de color diferente según la fila sea par o impar, aunque se muevan las filas.
    - Consigue también que el color del fondo cambie cuando se pone el ratón encima.
   
*/

/**
 * Función que añade el elemento 4 a la tabla.
 */

 function elemento4(){
    if(!document.getElementById("cuatro")){ // Si no está el id "cuatro"
        let tr = document.createElement("tr"); // Crea un elemento "tr"
        let td = document.createElement("td"); // Crea un elemento "td"
        let tabla = document.getElementById("tabla"); // Seleccionamos el elemento id "tabla"
        td.innerHTML = "4"; // Le ponemos texto y/o numero. En este caso, lo puse con numero
        td.id = "3"; // Le pasamos el id "cuatro" que tiene que crear
        tr.appendChild(td); // Añadimos el td
        tabla.append(tr); // Añadimos el tr
    }
}

/**
 * Función que cuando se puse en la celda de algún número descienda.
 */

function descender(numero){
    let celda;
    let td = document.getElementsByTagName("td"); // Cogemos todos los elementos "td"
    if(numero < td.length -1){
        celda = td[numero + 1];
        td[numero + 1] = td[numero];
        td[numero] = celda;
    }
}

/**
 * Función que contiene 2 soluciones:
 * Solución 1: Cada celda tiene un color distinto; dependiendo si la celda sea par o impar.
 *             Es decir, las celdas pares en este caso, tienen el color amarillo y las celdas impares de color naranja.
 * Solución 2: Cuando el ratón pasa por encima de las celdas pares e impares, tienen un color distinto al predeterminado.
 *             Es decir, las celdas pares si pasa el ratón, tendrán color rojo y las celdas impares de color azul.
 *             Una vez que el ratón haya pasado por las celdas, éstas vuelven a sus colores orginales (amarillo pares y naranja impares).
 */

function coloresParImparYRaton(){
    let td = document.getElementsByTagName("td"); // Cogemos todos los elementos "td"
    for (let i = 0; td.length; i++){ //Recorrer con for
        if(i % 2 == 0){ // Si el elemento td % 2 == 0
            td[i].style.backgroundColor = "orange"; // Color naranja
            td[i].addEventListener("mouseover", function(event){
                event.target.style.backgroundColor = "blue"; // Evento para que cuando pase el ratón sea de color azul
            });
            td[i].addEventListener("mouseout", function(event){
                event.target.style.backgroundColor = "orange"; // Evento para que cuando deje de pasar el ratón, vuelva a su color original
            });
        }else{
            td[i].style.backgroundColor = "yellow"; // Color amarillo
            td[i].addEventListener("mouseover", function(event){
                event.target.style.backgroundColor = "red"; // Evento para que cuando pase el ratón sea de color rojo
            });
            td[i].addEventListener("mouseout", function(event){
                event.target.style.backgroundColor = "yellow"; // Evento para que cuando deje de pasar el ratón, vuelva a su color original
            });
        }
    }
}