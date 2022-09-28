/* 

7. Muestra la fecha y hora actuales en 
formato: “DD/MM/YYYY hh:mm:ss TimeZone”.

*/

let fecha = new Date();
fechaActual();

setTimeout(
    function(){
        location.reload();
    }, 
    1000);

function fechaActual(){
    document.write("Hoy es " + fecha.getDate() + "/" + fecha.getMonth() + "/" + fecha.getFullYear() + "<br/>");
    document.write("Y son las " + fecha.toTimeString());
}