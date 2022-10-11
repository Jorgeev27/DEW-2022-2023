/* 

2. 3 div [Chromium vs Mozilla]

 
Cree la siguiente página, han de utilizarse al menos 3 div, uno para cada bloque: pantalla, ventana y despedida. 
La información que se muestra en el bloque pantalla se ha obtenido con JavaScript al cargar 
la página con objeto screen y el bloque ventana con objeto windows.

Crea otro fichero CSS, cuando el navegador que abra esta misma página sea Mozilla Firefox, 
se cargará este último CSS y no el anterior y se verá tal que:
   
*/

window.onload = function(){
    //Modo Pantalla
    document.getElementById("alturaDis").innerHTML = window.screen.availHeight; // Altura Disponible
    document.getElementById("anchoDis").innerHTML = window.screen.availWidth; // Anchura Disponible
    document.getElementById("alturaTot").innerHTML = window.screen.height; // Altura Total
    document.getElementById("anchoTot").innerHTML = window.screen.width; // Anchura Total
    document.getElementById("proColor").innerHTML = window.screen.colorDepth; // Profundidad de color
    document.getElementById("resolucion").innerHTML = window.screen.colorDepth; // Resolución (bits por pixel)

        //Modo Ventana
        document.getElementById("alturaExt").innerHTML = window.outerHeight; // Altura Exterior
        document.getElementById("anchoExt").innerHTML = window.outerWidth; //Anchura Exterior
        document.getElementById("coorX").innerHTML = window.screenX; // Coordenada X
        document.getElementById("coorY").innerHTML = window.screenY; //Coordenada Y
        document.getElementById("contadorPagina").innerHTML = "Ha visitado esta pagina: " + window.history.length + " paginas"; // Contador de páginas

        if(window.navigator.userAgent.indexOf("Mozilla") > -1){ // Si es el navegador Mozilla, le asignamos la hoja de estilo correpondiente
            let head = document.getElementsByName('HEAD')[0]; // Creamos el link al css y se lo añadimos al head
            let link = document.createElement('link');
            link.rel = 'stylesheet';
            link.type = 'text/css';
            link.href = '../css/firefox.css';
            head.appendChild(link);
        }if(window.navigator.userAgent.indexOf("Chrome") > -1){ // Si es el navegador Chrome, le asignamos la hoja de estilo correpondiente
            let head = document.getElementsByName('HEAD')[0]; // Creamos el link al css y se lo añadimos al head
            let link = document.createElement('link');
            link.rel = 'stylesheet';
            link.type = 'text/css';
            link.href = '../css/chrome.css';
            head.appendChild(link);
        }
}