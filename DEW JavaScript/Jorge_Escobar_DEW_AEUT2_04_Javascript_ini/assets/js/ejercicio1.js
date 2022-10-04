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



let claseIP = prompt("Dime una clase");

/**
 * Función para devolver, según la clase de IP, dicha dirección IP correspondiente
 * 
 */
function direccionIPClase(claseIP){
    
    switch(claseIP){
        case 'a':
            document.write("El numero de la IP es: " + Math.floor(Math.random() * 127) + ":" + Math.floor(Math.random() * 255 + 1) + ":" + Math.floor(Math.random() * 255 + 1) + ":" + Math.floor(Math.random() * 255 + 1));
            break;
        case 'b':
            document.write("El numero de la IP es: " + Math.floor((Math.random() * (192-127)) + 127) + ":" + Math.floor(Math.random() * 255 + 1) + ":" + Math.floor(Math.random() * 255 + 1) + ":" + Math.floor(Math.random() * 255 + 1));
            break;
        case 'c':
            document.write("El numero de la IP es: " + Math.floor((Math.random() * (224-192)) + 192) + ":" + Math.floor(Math.random() * 255 + 1) + ":" + Math.floor(Math.random() * 255 + 1) + ":" + Math.floor(Math.random() * 255 + 1));
            break;
        case 'd':
            document.write("El numero de la IP es: " + Math.floor((Math.random() * (240-224)) + 224) + ":" + Math.floor(Math.random() * 255 + 1) + ":" + Math.floor(Math.random() * 255 + 1) + ":" + Math.floor(Math.random() * 255 + 1));
            break;
        case 'e':
            document.write("El numero de la IP es: " + Math.floor((Math.random() * (255-240)) + 240) + ":" + Math.floor(Math.random() * 255 + 1) + ":" + Math.floor(Math.random() * 255 + 1) + ":" + Math.floor(Math.random() * 255 + 1));
            break;
    }
}

direccionIPClase(claseIP);