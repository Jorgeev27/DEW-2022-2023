/**
 * Abre la página Ahorcado1vsMachine.html y un mensaje de alerta de que se ha entrado al modo de juego 1 vs CPU.
 */
function ahorcadoJugador(){
    alert("Has entrado en el Ahorcado 1 vs CPU");
    window.location="./ahorcado1vsMachine.html";
}

/**
 * Abre la página Ahorcado1vs1.html y un mensaje de alerta de que se ha entrado al modo de juego 1 vs CPU.
 */
function ahorcadoDosJugadores(){
    alert("Has entrado en el Ahorcado 1 vs 1");
    window.location="./ahorcado1vs1.html";
}

/**
 * Función con un mensaje de alerta que te lleva al menú del juego, para elegir 1 jugador o 1 vs 1.
 */
function menu() {
    alert("De vuelta a los menús del juego");
    window.location.href = './juegos.html';
}

/**
 * Alerta al usuario que ha cerrado la sesión y luego lo redirige a la página de inicio de sesión.
 */
function index(){
    alert("Has cerrado sesión");
    window.location = "../login.html";
}

/* Declarar las variables que se utilizarán en el código. Algunos inicializados y otros sin inicializar. */
let url = '../json/usuarios.json';
let url2 = '../json/peliculasSeries.json';
let users = [];
let peliculasSeries = [];
let nuevoRanking;
let rankingOrdenado;
let ranking = document.getElementById("ranking");
let modoJuego = document.getElementById("modoJuego");
let tablaRanking = document.getElementById("tablaRanking");
let numero = 1;
let usuario;
let cookieUsuario;
let cookieFecha = new Date();
let mensaje = document.getElementById("bienvenida");
let partidasTotales = document.getElementById("partidasTotales");
let divPeliculaSerie = document.getElementById("peliculaSerie");
let imagenPeliculaSerie = document.getElementById("imagenPeliculaSerie");
let divInformacion = document.getElementById("informacion");

/**
 * Crea un nuevo objeto XMLHttpRequest, establece la propiedad onreadystatechange en una función que se
 * llamará cuando cambie el readyState de la solicitud, y luego llama a los métodos open() y send()
 * para iniciar la solicitud.
 */
function obtenerDatos(){
    let request = new XMLHttpRequest();
    request.onreadystatechange = function () {
        if (request.readyState == 4 && request.status == 200) {
            let respuesta = JSON.parse(request.responseText);
            for (let i = 0; i < respuesta.length; i++) {
                users.push(respuesta[i]);
            }
        }
    }
    request.open('GET', url, true);
    request.send();
}

/**
 * Crea un nuevo objeto XMLHttpRequest, establece la propiedad onreadystatechange en una función que se
 * llamará cuando cambie el readyState de la solicitud, y luego llama a los métodos open() y send()
 * para iniciar la solicitud.
 */
function peliculasSeriesJson(){
    let request = new XMLHttpRequest();
    request.onreadystatechange = function () {
        if (request.readyState == 4 && request.status == 200) {
            let respuesta = JSON.parse(request.responseText);
            for (let i = 0; i < respuesta.length; i++) {
                peliculasSeries.push(respuesta[i]);
            }
        }
    }
    request.open('GET', url2, true);
    request.send();
}

/**
 * Obtiene las claves del almacenamiento local, verifica si contienen la palabra "Ganadas" (que es la
 * clave para la cantidad de juegos ganados) y luego ordena el mapa por la cantidad de juegos ganados.
 */
function obtenerRanking() {
    keys = Object.keys(localStorage);
    let ranking = new Map();
    for (let i = 0; i < keys.length; i++) {
        if (keys[i].includes("Ganadas")) {
            ranking.set(keys[i], localStorage.getItem(keys[i]));
        }
    }
    rankingOrdenado = new Map([...ranking.entries()].sort((a, b) => b[1] - a[1]));
}

/**
 * Crea una tabla con la clasificación clasificatoria de los jugadores.
 */
function qualifyingClassification() {
    let menuJuegos = document.getElementById("menuJuegos");
    modoJuego.setAttribute("class", "d-none");
    ranking.setAttribute("class", "row justify-content-center mt-4");
    tablaRanking.innerHTML = "<table border='1'></table>";
    tablaRanking.innerHTML += "<thead class='text-dark'<tr><th>Qualifying Classification</th></tr></thead>";
    for (const [key, value] of rankingOrdenado) {
        let tr = document.createElement("tr");
        let td = document.createElement("td");
        let td2 = document.createElement("td");
        let td3 = document.createElement("td");
        td.textContent = numero;
        td2.textContent = key.replace("Ganadas", "");
        td3.textContent = value;
        tr.appendChild(td);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tablaRanking.appendChild(tr);
        numero++;
    }
    menuJuegos.removeAttribute("class");
    menuJuegos.setAttribute("class", "btn btn-danger");
}

/**
 * Oculta el menu de los modos de juego.
 */
function menuJuegos(){
    let menuJuegos = document.getElementById("menuJuegos");
    ranking.removeAttribute("class");
    ranking.setAttribute("class", "d-none");
    modoJuego.removeAttribute("class");
    modoJuego.setAttribute("class", "row d-flex justify-content-around mt-5");
    menuJuegos.removeAttribute("class");
    menuJuegos.setAttribute("class", "d-none");
}


/**
 * Comprueba si el usuario y la contraseña son correctos, y si lo son, crea una cookie con el nombre del usuario y redirige a la página de juegos.
 */
function login() {
    let user = document.getElementById("user").value;
    let login = false;
    let password = document.getElementById("password").value;
    for (let i = 0; i < users.length; i++) {
        if (users[i].Usuario == user && users[i].Password == password) {
            crearCookieUsuario(user);
            login = true;
            alert("Nombre de usuario y contraseña correctos. Bienvenido " + user);
            window.location = "../html/juegos.html";
        }
    }
    if (login == false) {
        alert("Nombre de usuario y/o contraseña incorrectos. Por favor, introdúcelos correctamente");
        window.location.reload();
    }
}

/* Declarando una variable llamada usuario2 y no se le asigna un valor predeterminado. */
let user2;


/**
 * Solicita un nombre del 2º jugador y se lo asigna a la variable user2.
 */
function jugador2() {
    user2 = prompt("2º Jugador");
}

/**
 * Lee la cookie llamada "Usuario" y devuelve el valor de la cookie
 * @returns el valor de la variable de usuario.
 */
function leerCookieUsuario() {
    let listaCookies = document.cookie.split(";");
    for (i in listaCookies) {
        busca = listaCookies[i].search("Usuario");
        if (busca > -1) {
            cookieUsuario = listaCookies[i];
        }
        let igual = cookieUsuario.indexOf("=");
        usuario = cookieUsuario.substring(igual + 1);
        return usuario;
    }
}

/**
 * Lee la cookie y luego escribe el valor en el elemento HTML con la identificación de "mensaje"
 */
function bienvenida() {
    mensaje.innerHTML = leerCookieUsuario();
}


/**
 * Crea una nueva fecha, le agrega un año y luego crea una cookie con el nombre "Usuario" y el valor del parámetro "usuario" que caduca en un año.
 * @param usuario - El valor de la cookie.
 */
function crearCookieUsuario(usuario) {
    cookieFecha.setFullYear(cookieFecha.getFullYear() + 1);
    document.cookie = `Usuario = ${usuario} ;expires=${cookieFecha.toUTCString()};SameSite=Lax`;
}

/**
 * Comprueba si el usuario ha jugado antes. Si no, crea un nuevo registro para el usuario.
 */
function buscaEstadisticas() {
    if (!localStorage.getItem(leerCookieUsuario() + "Jugadas"
        || !localStorage.getItem(leerCookieUsuario() + "Ganadas"))) {
        crearEstadisticas();
    }
}

/**
 * Crea una nueva entrada en el almacenamiento local para las estadísticas del usuario.
 */
function crearEstadisticas() {
    localStorage.setItem(leerCookieUsuario() + "Jugadas", 0);
    localStorage.setItem(leerCookieUsuario() + "Ganadas", 0);
    mostrarEstadisticas();
}

/**
 * Elimina las estadísticas del usuario.
 */
function borrarStats() {
    alert("Se han borrado las stats de tus partidas");
    localStorage.removeItem(leerCookieUsuario() + "Jugadas");
    localStorage.removeItem(leerCookieUsuario() + "Ganadas");
    crearEstadisticas();
}

/**
 * Lee el número de reproducciones del almacenamiento local, lo incrementa en uno y luego lo vuelve a escribir en el almacenamiento local.
 */
function sumarJugada() {
    let jugadas = parseInt(localStorage.getItem(leerCookieUsuario() + "Jugadas"));
    jugadas++;
    localStorage.setItem(leerCookieUsuario() + "Jugadas", jugadas);
    mostrarEstadisticas();
}

/**
 * Obtiene la cantidad de juegos ganados por el usuario del almacenamiento local, lo incrementa en uno y luego lo almacena nuevamente en el almacenamiento local.
 */
function sumarGanada() {
    let ganadas = parseInt(localStorage.getItem(leerCookieUsuario() + "Ganadas"));
    ganadas++;
    localStorage.setItem(leerCookieUsuario() + "Ganadas", ganadas);
    mostrarEstadisticas();
}


/**
 * Lee los valores del almacenamiento local y los muestra en el HTML
 */
function mostrarEstadisticas() {
    let valorJugadas = localStorage.getItem(leerCookieUsuario() + "Jugadas");
    let valorGanadas = localStorage.getItem(leerCookieUsuario() + "Ganadas");
    if (valorJugadas == null || valorGanadas == null) {
        valorJugadas = 0;
        valorGanadas = 0;
    }
    partidasTotales.innerHTML = "";
    partidasTotales.innerHTML += "<table>";
    partidasTotales.innerHTML += "<tr>";
    partidasTotales.innerHTML += "<th scope='row'><b>Total: </b></th>";
    partidasTotales.innerHTML += "<td>" + valorGanadas + " victorias" + "</td>";
    partidasTotales.innerHTML += "</tr>";
    partidasTotales.innerHTML += "</table>";
    partidasTotales.innerHTML += "<table>";
    partidasTotales.innerHTML += "<tr>";
    partidasTotales.innerHTML += "<th scope='row'><b>Total jugados: </b></th>";
    partidasTotales.innerHTML += "<td>" + valorJugadas + " partidas" + "</td>";
    partidasTotales.innerHTML += "</tr>";
    partidasTotales.innerHTML += "</table>";
}


/**
 * Crea una tabla para cada propiedad del objeto y la muestra en el HTML.
 */
function mostrarPelicula() {
    divInformacion.style.display = "none";
    //Tabla para el título de la película/serie
    divPeliculaSerie.innerHTML += "<table>";
    divPeliculaSerie.innerHTML += "<tr>";
    divPeliculaSerie.innerHTML += "<th scope='row'><h1><b>Título: </h1></b></th>";
    divPeliculaSerie.innerHTML += "<td>" + pelicula.Titulo + "</td>";
    divPeliculaSerie.innerHTML += "</tr>";
    divPeliculaSerie.innerHTML += "</table>";

    //Tabla para el director de la película/serie
    divPeliculaSerie.innerHTML += "<table>";
    divPeliculaSerie.innerHTML += "<tr>";
    divPeliculaSerie.innerHTML += "<th scope='row'><h1><b>Director: </h1></b></th>";
    divPeliculaSerie.innerHTML += "<td>" + pelicula.Director + "</td>";
    divPeliculaSerie.innerHTML += "</tr>";
    divPeliculaSerie.innerHTML += "</table>";

    //Tabla para la clasificación (género) de la película/serie
    divPeliculaSerie.innerHTML += "<table>";
    divPeliculaSerie.innerHTML += "<tr>";
    divPeliculaSerie.innerHTML += "<th scope='row'><h1><b>Clasificación (género): </h1></b></th>";
    divPeliculaSerie.innerHTML += "<td>" + pelicula.Clasificacion + "</td>";
    divPeliculaSerie.innerHTML += "</tr>";
    divPeliculaSerie.innerHTML += "</table>";

    //Tabla para el año de estreno de la película/serie
    divPeliculaSerie.innerHTML += "<table>";
    divPeliculaSerie.innerHTML += "<tr>";
    divPeliculaSerie.innerHTML += "<th scope='row'><h1><b>Año de estreno: </h1></b></th>";
    divPeliculaSerie.innerHTML += "<td>" + pelicula.Anio + "</td>";
    divPeliculaSerie.innerHTML += "</tr>";
    divPeliculaSerie.innerHTML += "</table>";

    //Tabla para los actores de la película/serie
    divPeliculaSerie.innerHTML += "<table>";
    divPeliculaSerie.innerHTML += "<tr>";
    divPeliculaSerie.innerHTML += "<th scope='row'><h1><b>Actores: </h1></b></th>";
    divPeliculaSerie.innerHTML += "<td>" + pelicula.Actores + "</td>";
    divPeliculaSerie.innerHTML += "</tr>";
    divPeliculaSerie.innerHTML += "</table>";

    //Tabla para la sinopsis de la película/serie
    divPeliculaSerie.innerHTML += "<table>";
    divPeliculaSerie.innerHTML += "<tr>";
    divPeliculaSerie.innerHTML += "<th scope='row'><h1><b>Sinopsis: </h1></b></th>";
    divPeliculaSerie.innerHTML += "<td>" + pelicula.Sinopsis + "</td>";
    divPeliculaSerie.innerHTML += "</tr>";
    divPeliculaSerie.innerHTML += "</table>";

    //Imagen de la película/Serie
    imagenPeliculaSerie.innerHTML = "<h1><b>Imagen: </b></h1>" +'<img src="' + pelicula.Imagen + '" alt="' + pelicula.Titulo + '" width="400" height="400"></img>';
}

class Partida{
    /* Creación de las propiedades de la clase Partida. */
    palabra;
    tablero;
    fallos;
    win;
    tableroResuelto;
    
    /**
     * La función constructora toma una palabra como argumento y crea un tablero con el mismo número de
     * guiones bajos que letras en la palabra. También crea una variable para realizar un seguimiento
     * del número de conjeturas incorrectas y una variable para realizar un seguimiento de si el
     * jugador ha ganado o no.
     * @param palabra - La palabra a adivinar.
     */
    constructor(palabra) {
        this.palabra = palabra;
        this.tablero = this.crearTablero();
        this.fallos = 0;
        this.win = false;
        this.tableroResuelto = this.palabra.split('');
    }
    
    //GETTER Y SETTER DE LA PALABRA
    get getPalabra(){
        return this.palabra;
    }

    set setPalabra(palabra){
        this.palabra = palabra;
    }

    //GETTER Y SETTER DEL TABLERO
    get getTablero(){
        return this.tablero;
    }

    set setTalero(tablero){
        this.tablero = crearTablero(tablero);
    }

    //GETTER Y SETTER DE LOS FALLOS
    get getFallos(){
        return this.fallos;
    }

    set setFallos(fallos){
        this.fallos = fallos;
    }

    //GETTER Y SETTER DEL GANADOR
    get getWin(){
        return this.win;
    }

    set setWin(win){
        this.win = win;
    }

    //GETTER Y SETTER DEL TABLERO RESUELTO
    get getTableroResuelto(){
        return this.tableroResuelto;
    }

    set setTableroResuelto(tableroResuelto){
        this.tableroResuelto = this.palabra.split(tableroResuelto);
    }

    /**
     * Esta función crea un tablero con el mismo número de espacios que la palabra a adivinar.
     * @returns el tableroPalabra variable.
     */
    crearTablero(){
        let huecos = "";
        this.tableroResuelto = this.palabra.split('');
        for(let i = 0; i < this.tableroResuelto.length; i++){
            if(this.tableroResuelto[i] != ' '){
                huecos += "_";
            }else{
                huecos += " ";
            }
        }
        let tableroPalabra = huecos.split('');
        return tableroPalabra;
    }

    /**
     * Comprueba si la letra que has adivinado está en la palabra, si lo está, reemplaza el guión bajo
     * con la letra, si no lo está, agrega una parte del cuerpo al verdugo.
     * @param letra - La letra que el usuario ha ingresado.
     */
    comprobarLetra(letra){
        let acierto = false;
        for(let i = 0; i < this.tablero.length; i++){
            if(this.tableroResuelto[i] == letra){
                this.tablero[i] = letra;
                acierto = true;
            }
        }
        if(!acierto){
            this.fallos++;
        }
        let correctos = 0;
        for(let i = 0; i < this.tablero.length; i++){
            if(this.tablero[i] == this.tableroResuelto[i]){
                correctos++;
            };
            if(correctos == this.tablero.length && this.fallos < 6) {
                this.win = true;
            };
        }
        switch (this.fallos) {
            case 1: //Hace la cabeza
                context.strokeStyle = '#000000';
                context.save();
                context.translate(343.5, 117.5);
                context.scale(1, 0.8666666666666667);
                context.beginPath();
                context.arc(0, 0, 20, 0, 6.283185307179586, false);
                context.stroke();
                context.closePath();
                context.restore();
                break;
            case 2: //Hace el cuerpo
                context.strokeStyle = '#000000';
                context.beginPath();
                context.moveTo(349, 133);
                context.lineTo(349, 205);
                context.stroke();
                context.closePath();
                break;
            case 3: //Hace la pierna derecha
                context.strokeStyle = '#000000';
                context.beginPath();
                context.moveTo(348, 203);
                context.lineTo(326, 248);
                context.stroke();
                context.closePath();
                break;
            case 4: //Hace la pierna izquierda
                context.strokeStyle = '#000000';
                context.beginPath();
                context.moveTo(350, 200);
                context.lineTo(375, 247);
                context.stroke();
                context.closePath();
                break;
            case 5: //Hace el brazo izquierdo
                context.strokeStyle = '#000000';
                context.beginPath();
                context.moveTo(351, 152);
                context.lineTo(387, 192);
                context.stroke();
                context.closePath();
                break;
            case 6: //Hace el brazo derecho
                context.strokeStyle = '#000000';
                context.beginPath();
                context.moveTo(347, 154);
                context.lineTo(317, 190);
                context.stroke();
                context.closePath();
                break;
            default:
        }
        /* Comprobando si el jugador ha perdido el juego. */
        if(this.fallos == 6){
            this.win = false;
        }
    }
}
//Mapa donde se almacenan las partidas
let listaPartidas = new Map();

/* Declaración de variables */
let jugador;
let partida1;
let historial = [];
let tituloPeli;
let pelicula;

/**
 * La función que inicia el juego.
 */
function play(){
    alert("Empieza el juego");
    let canvas = document.getElementById("canvas");
    let juego = document.getElementById("juego");
    divPeliculaSerie.innerHTML = "";
    imagenPeliculaSerie.innerHTML = "";
    canvas.style.display = "block";
    juego.style.display = "block";
    let numeroRandom = Math.floor(Math.random() * peliculasSeries.length);

    /* Llamando a la función sumarJugada() */
    sumarJugada();

    jugador = leerCookieUsuario();
    pelicula = peliculasSeries[numeroRandom];
    tituloPeli = pelicula.Titulo.toUpperCase();
    partida1 = new Partida(tituloPeli);

    /* Llamando a la función mostrarPelicula() */
    mostrarPelicula();

    /**
     * Toma un jugador y un juego como parámetros y agrega el juego al historial del jugador.
     * @param jugador - El nombre del jugador.
     * @param partida1 - es un objeto que contiene la siguiente información:
     */
    function Ranked(jugador, partida1){
        if(listaPartidas.has(jugador)) {
            for(var [key, value] of listaPartidas){
                if(key == jugador){
                    value.push(partida1);
                }
            }
        }else{
            historial = [partida1];
            listaPartidas.set(jugador, historial);
        }
    }

    /* Llamando a la función Ranked() */
    Ranked(jugador, partida1);

    document.getElementById("tablero").innerHTML = partida1.tablero.join('');
    let cadena = "1234567890QWERTYUIOPASDFGHJKLÑZXCVBNM";
    for(let i = 0; i < cadena.length; i++){
        document.getElementById(cadena.charAt(i)).style.backgroundColor = "#0066ff";
    }
    context.fill();
    context.fillStyle = "#FFFFFF";
    context.fillRect(260, 98, 150, 179);
}

/**
 * La función que inicia el juego para 2 jugadores.
 */
function play2(){
    let canvas = document.getElementById("canvas");
    let juego = document.getElementById("juego");
    divInformacion.innerHTML = "";
    canvas.style.display = "block";
    juego.style.display = "block";

    /* Llamando a la función sumarJugada() */
    sumarJugada();

    jugador = leerCookieUsuario();
    var tituloPeli = prompt(user2 + " escribe una palabra").toUpperCase();
    partida1 = new Partida(tituloPeli);

    /**
     * Toma un jugador y un juego como parámetros y agrega el juego al historial del jugador.
     * @param jugador - El nombre del jugador.
     * @param partida1 - es un objeto que contiene la siguiente información:
     */
    function Ranked(jugador, partida1) {
        if(listaPartidas.has(jugador)){
            for(var [key, value] of listaPartidas){
                if(key == jugador){
                    value.push(partida1);
                }
            }
        }else{
            historial = [partida1];
            listaPartidas.set(jugador, historial);
        }
    }
    /* Llamando a la función Ranked() */
    Ranked(jugador, partida1);

    document.getElementById("tablero").innerHTML = partida1.tablero.join(' ');
    let cadena = "12345667890QWERTYUIOPASDFGHJKLÑZXCVBNM";
    for (let i = 0; i < cadena.length; i++) {
        document.getElementById(cadena.charAt(i)).style.backgroundColor = "#0066ff";
    }
    context.fill();
    context.fillStyle = "#FFFFFF";
    context.fillRect(260, 98, 150, 179);
}

/**
 * Cambia el color de fondo del botón en el que se ha hecho clic, comprueba si la letra está en la
 * palabra y, si lo está, la agrega al tablero. Si el jugador gana, alerta al jugador y oculta el
 * lienzo y el juego.
 * @param letra - la letra en la que el usuario ha hecho clic.
 * @param id - la identificación del botón en el que se hizo clic
 */
function escribir(letra, id){
    let canvas = document.getElementById("canvas");
    let juego = document.getElementById("juego");
    if(partida1.win == true || partida1.fallos == 6){
        alert("OOOOOH!!!! No has acertado");
        if(user2){
            canvas.style.display = "none";
            juego.style.display = "none";
            alert("SE ACABÓ!!!! " + user2 + " GANA LA PARTIDA!!!!");
        }
    }else{
        document.getElementById(id).style.backgroundColor ="#808000";
        partida1.comprobarLetra(letra);
        document.getElementById("tablero").innerHTML = partida1.tablero.join('');
        if(partida1.win == true){
            alert("HAS ACERTADOOO!!!");
            sumarGanada();
            canvas.style.display = "none";
            juego.style.display = "none";
            divInformacion.style.display = "flex";
            if(user2){
                alert("SE ACABÓ!!!! " + leerCookieUsuario() + " GANA LA PARTIDA!!!!");
            }
        }
    }
}