/* 

1. Queremos generar una aplicación para simular un servidor DHCP muy
‘basto’, queremos que el programa genere una IP válida de uno 
de los grupos de IPs que nos solicite el usuario.
El programa Pregunta al usuario que ‘clase de IP’ quiere y le 
devolverá una IP con números aleatorios de la clase solicitada. 
Debes dividir las acciones en funciones distintas (mínimo 2). 
Recordamos que podremos usar la siguiente tabla para 
determinarlo según el rango de la dirección IPv4
   
*/

let claseIP = prompt("Dime una clase de IP: a-b-c-d-e");

/**
 * Función que obtiene la clase de IP que introduce el usuario.
 * Si el usuario introduce una clase de IP diferente, salta la alerta de que hay que coger la opción válida.  
 */
function ipClase(){
    let clases = ['a', 'b', 'c', 'd', 'e'];
    if (clases.includes(claseIP)) {
        direccionIPClase(claseIP);
    } else {
        alert("Escoge una opción válida");
    }
}

/**
 * Función para devolver, según la clase de IP, dicha dirección IP correspondiente mediante un switch.
 * 
 */
function direccionIPClase(claseIP){
    
    switch(claseIP){
        case 'a':
            document.write("El numero de la IP es: " + Math.floor(Math.random() * 127) + ":" + Math.floor(Math.random() * 255 + 1) + ":" + Math.floor(Math.random() * 255 + 1) + ":" + Math.floor(Math.random() * 255 + 1));
            break;
        case 'b':
            document.write("El numero de la IP es: " + Math.floor((Math.random() * (192-127)) + 127 +1) + ":" + Math.floor(Math.random() * 255 + 1) + ":" + Math.floor(Math.random() * 255 + 1) + ":" + Math.floor(Math.random() * 255 + 1));
            break;
        case 'c':
            document.write("El numero de la IP es: " + Math.floor((Math.random() * (224-192)) + 192 +1) + ":" + Math.floor(Math.random() * 255 + 1) + ":" + Math.floor(Math.random() * 255 + 1) + ":" + Math.floor(Math.random() * 255 + 1));
            break;
        case 'd':
            document.write("El numero de la IP es: " + Math.floor((Math.random() * (240-224)) + 224 + 1) + ":" + Math.floor(Math.random() * 255 + 1) + ":" + Math.floor(Math.random() * 255 + 1) + ":" + Math.floor(Math.random() * 255 + 1));
            break;
        case 'e':
            document.write("El numero de la IP es: " + Math.floor((Math.random() * (255-240)) + 240 + 1) + ":" + Math.floor(Math.random() * 255 + 1) + ":" + Math.floor(Math.random() * 255 + 1) + ":" + Math.floor(Math.random() * 255 + 1));
            break;
    }
}

ipClase(claseIP);