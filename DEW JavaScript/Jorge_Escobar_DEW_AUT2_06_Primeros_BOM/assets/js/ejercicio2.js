/* 

2. 3 div [Chromium vs Mozilla]

Cree la siguiente página, han de utilizarse al menos 3 div, uno para cada bloque: pantalla, ventana y despedida. 
La información que se muestra en el bloque pantalla se ha obtenido con JavaScript al cargar 
la página con objeto screen y el bloque ventana con objeto windows.

Crea otro fichero CSS, cuando el navegador que abra esta misma página sea Mozilla Firefox, 
se cargará este último CSS y no el anterior y se verá tal que:

*/

if(window.navigator.userAgent.valueOf("Chrome") > -1){ // Si el navegador es Chrome
    document.write("<link rel='stylesheet' href='../css/chrome.css' type='text/css'>"); // Link de Chrome
}else{
    document.write("<link rel='stylesheet' href='../css/firefox.css' type='text/css'>"); // Link de Firefox
}

onload = () => {
    // MODO PANTALLA

    let alturaDis = document.getElementById("alturaDis").innerHTML = document.body.scrollHeight; // Altura Disponible
    let anchoDis = document.getElementById("anchoDis").innerHTML = document.body.scrollWidth; // Ancho Disponible
    let alturaTot = document.getElementById("alturaTot").innerHTML = window.screen.height; // Altura Total
    let anchoTot = document.getElementById("anchoTot").innerHTML = window.screen.width; //Ancho Total
    let proColor = document.getElementById("proColor").innerHTML = screen.colorDepth; // Profundidad de Color
    let resolucion = document.getElementById("resolucion").innerHTML = screen.pixelDepth; // Resolución (pixel por bits)

    // MODO VENTANA

    let alturaExt = document.getElementById("alturaExt").innerHTML = window.outerHeight; // Altura Exterior
    let anchoExt = document.getElementById("anchoExt").innerHTML = window.outerWidth; // Ancho Exterior
    let coorX = document.getElementById("coorX").innerHTML = window.screenX; // Coordenada X
    let coorY = document.getElementById("coorY").innerHTML = window.screenY; // Coordenada Y
    let contadorPagina = document.getElementById("contadorPagina").innerHTML = "Has visitado: " + window.history.length + " páginas"; // Contador de páginas
}