/* 

9. Recoger los parámetros del formulario mediante lo anteriormente 
explicado y realizar lo siguiente: 
(Nota: No usar document.getElementById() ni editar el HTML) 

- Mostrar nombre,apellido,dni y correo dentro del campo con id="datos" de los usuarios 
- Intercambia los valores del nombre de los formularios entre Usuario 1 y Usuario 2. 
Haz lo mismo con el DNI entre Usuario 2 y Usuario 3. 
Muestra el resultado final dentro del campo con id="cambio" 

(Opcional) Mostrar los movimientos bancarios en id="movimientos" y realizar dichos movimientos. 
También deben de estar reflejados en los campos de los usuarios estos cambios: 
- Añadir 200€ a Usuario 2 
- Usuario 3 realiza una transferencia de 450€ a Usuario 1
- Usuario 1 retiró 500€

Tienes toda la información sobre qué funciones usar en el HTML

*/

/* Creando una variable para cada formulario. */
let usuario1 = document.forms.usr1;
let usuario2 = document.forms.usr2;
let usuario3 = document.forms.usr3;

/**
 * Toma los valores del formulario y los imprime en el área de texto
 */
function apartado1(){

    /* Crear una variable que almacene el valor del área de texto. */
    let datosUsuario = document.forms.respuestas.datos;

    /* Tomando los valores del formulario e imprimiéndolos en el área de texto. */
    datosUsuario.innerHTML += "Usuario 1 - Nombre: " + usuario1.nombre.value + ". Apellido: " + usuario1.usr1Apellido.value + 
    ". DNI: " + usuario1.usr1dni.value + ". Email: " + usuario1.usr1mail.value + "\n";
    datosUsuario.innerHTML += "Usuario 2 - Nombre: " + usuario2.usr2nombre.value + ". Apellido: " + usuario2.usr2Apellido.value + 
    ". DNI: " + usuario2.usr2dni.value + ". Email: " + usuario2.usr2mail.value + "\n";
    datosUsuario.innerHTML += "Usuario 3 - Nombre: " + usuario3.usr3nombre.value + ". Apellido: " + usuario3.usr3Apellido.value + 
    ". DNI: " + usuario3.usr3dni.value + " Email: " + usuario3.usr3mail.value + "\n";
}

/**
 * Toma los valores de las entradas del formulario y los imprime en el área de texto
 */
function apartado2(){

    /* Crear una variable que almacene el valor del área de texto. */
    let cambios = document.forms.respuestas.cambio;
    
    /* Tomando los valores de las entradas e imprimiéndolos en el área de texto. */
    cambios.innerHTML += "Usuario 1 - Nombre: " + usuario2.usr2nombre.value + ". Apellido: " + usuario1.usr1Apellido.value + 
    ". DNI: " + usuario1.usr1dni.value + ". Email: " + usuario1.usr1mail.value + "\n";
    cambios.innerHTML += "Usuario 2 - Nombre: " + usuario1.nombre.value + ". Apellido: " + usuario2.usr2Apellido.value + 
    ". DNI: " + usuario3.usr3dni.value + ". Email: " + usuario2.usr2mail.value + "\n";
    cambios.innerHTML += "Usuario 3 - Nombre: " + usuario3.usr3nombre.value + ". Apellido: " + usuario3.usr3Apellido.value + 
    ". DNI: " + usuario2.usr2dni.value + " Email: " + usuario3.usr3mail.value + "\n";
}

/**
 * Toma los valores de las entradas del formulario y los agrega al área de texto.
 */
function apartado3(){

    /* Crear una variable que almacene el valor del área de texto. */
    let movimientosBancarios = document.forms.respuestas.movimientos;

    /* Añadir 200€ al saldo del usuario2. */
    let usuario2Ingreso = 200;
    let saldoUsuario2 = usuario2.usr2saldo.value;
    usuario2.usr2saldo.value = parseInt(usuario2.usr2saldo.value) + usuario2Ingreso;

    /* Hace una transferencia de 450€ del usuario3 al usuario1. */
    let usuario3Transfer = 450;
    let saldoUsuario3 = usuario3.usr3saldo.value;
    usuario3.usr3saldo.value = parseInt(usuario3.usr3saldo.value) - usuario3Transfer;
    usuario1.usr1saldo.value = parseInt(usuario1.usr1saldo.value) + usuario3Transfer;

    /* Retira 500€ del saldo usuario1. */
    let usuario1Ret = 500;
    let saldoUsuario1 = usuario1.usr1saldo.value;
    usuario1.usr1saldo.value = parseInt(usuario1.usr1saldo.value) - usuario1Ret;

    /* Agregar el texto al área de texto. */
    movimientosBancarios.innerHTML += "Saldo actual de " + usuario2.usr2nombre.value + ": " + saldoUsuario2 + "€ \n";
    movimientosBancarios.innerHTML += usuario2.usr2nombre.value + " ingresa " + usuario2Ingreso + "€ \n";
    movimientosBancarios.innerHTML += "Saldo total de " + usuario2.usr2nombre.value + ": " + usuario2.usr2saldo.value + "€ \n\n";
    movimientosBancarios.innerHTML += "Saldo actual de: " + usuario3.usr3nombre.value + ": " + saldoUsuario3 + "€ \n";
    movimientosBancarios.innerHTML += usuario3.usr3nombre.value + " hace una transferencia de " + usuario3Transfer + "€ a " + usuario1.nombre.value + "\n";
    movimientosBancarios.innerHTML += "Saldo total de: " + usuario3.usr3nombre.value + ": " + usuario3.usr3saldo.value + "€ \n";
    movimientosBancarios.innerHTML += "Saldo total de: " + usuario1.nombre.value + ": " + usuario1.usr1saldo.value + "€ \n\n";
    movimientosBancarios.innerHTML += "Saldo actual de: " + usuario1.nombre.value + ": " + saldoUsuario1 + "€ \n";
    movimientosBancarios.innerHTML+= usuario1.nombre.value + " retira de su cuenta : " + usuario1Ret + "€ \n";
    movimientosBancarios.innerHTML+= "Saldo total de: " + usuario1.nombre.value + ": "+usuario1.usr1saldo.value + "€ \n";
}