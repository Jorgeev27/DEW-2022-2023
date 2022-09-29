/* 

10. Como hemos visto, javascript, como muchos otros lenguajes, 
utilizan el “UNIX EPOCH” que cuenta el tiempo a partir de la 
medianoche del 1 de enero de 1970. Sin embargo, hay otros 
tipos de fecha que tienen otro origen del tiempo. Por ejemplo, 
la fecha juliana empieza a contabilizar el tiempo desde las 12:00 
(mediodía) del 1 de enero de 4713 a.C., e indica el número de días 
(y fracciones) que han transcurrido desde ese momento. 
La fecha juliana se suele utilizar para calcular el tiempo 
que ha transcurrido desde eventos que sucedieron en la antigüedad 
y es aún ampliamente usada para fenómenos astronómicos e históricos 
lejanos. En la wikipedia (https://es.wikipedia.org/wiki/Fecha_juliana) 
se puede encontrar la relación entre fecha juliana y tiempo Unix 
(contado a partir desde 1/1/1970), siendo esta:

fecha_juliana = tiempo_unix + 2440587.5

Implementar una función que dada una fecha en texto (por ejemplo “2018-09-20”), 
devuelva la fecha juliana equivalente.

Para realizar la suma, ten en cuenta que la fecha juliana almacena días, 
mientras que el tiempo_unix en javascript contiene milisegundos, por lo 
que hay que transformarlo en días. Por cierto, ¿de dónde crees que ha 
salido el valor 2440587.5?

*/

let fecha = prompt("Dime una fecha en formato yyyy-mm-dd");
fechaJuliana(fecha);

function fechaJuliana(fecha){
    let fechaUsuario = new Date(fecha); // / definicion de fecha recogida en parametros
    fechaUsuario = fechaUsuario.getTime(); // milisegundos desde 1970
    fechaUsuario = fechaUsuario / 1000; // milisegundos a segundos
    fechaUsuario = fechaUsuario / 3600; // segundos a horas
    fechaUsuario = fechaUsuario / 24; // horas a dias
    let fecha_juliana = fechaUsuario + 2440587.5; // valor de los dias más 2440587.5 y tienes la fecha juliana
    return fecha_juliana;
}
document.write("La fecha juliana es: " + fechaJuliana(fecha));
