/* 

8. Construye una fecha a partir del texto “02/04/2015”. 
Muestra la fecha con console.log, ¿qué obtienes? 
Prueba ahora con “2015-04-02”.¿Cómo podrías crear 
una fecha con el texto “April 02, 2015”?

*/

let fecha = new Date();
fecha1(fecha);
fecha2(fecha);
fecha3(fecha);

function fecha1(fecha){
    console.log(fecha.getDate() + "/" + (fecha.getMonth() + 1) + "/" + fecha.getFullYear());
}

function fecha2(fecha){
    console.log(fecha.getFullYear() + "-" + (fecha.getMonth() + 1) + "-" + fecha.getDate());
}

function fecha3(fecha){
    let meses = Array("Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre");
    let fecha2 = new Date();
    console.log(meses[fecha2.getMonth()] + " " + fecha2.getDate() + ", " + fecha2.getFullYear());
}