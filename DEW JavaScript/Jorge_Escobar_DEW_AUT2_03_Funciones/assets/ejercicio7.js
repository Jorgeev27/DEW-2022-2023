/* 

7. Muestra la fecha y hora actuales en 
formato: “DD/MM/YYYY hh:mm:ss TimeZone”.

*/

setTimeout(
    function(){
        location.reload();
    }, 
    1000);

let fecha = new Date();
document.write("Hoy es " + fecha.getDate() + "/" + fecha.getMonth() + "/" + fecha.getFullYear() + "<br/>");
document.write("Y son las " + fecha.getHours() + ":"+ fecha.getMinutes() + ":" + fecha.getSeconds());