/**
 * Abre la página Ahorcado1vsMaquina.html.
 */
function ahorcadoJugador(){
    alert("Has entrado en el Ahorcado 1 vs CPU");
    window.location="./ahorcado.html";
}

/**
 * Abre la página Ahorcado1vs1.html.
 */
function ahorcadoDosJugadores(){
    alert("Has entrado en el Ahorcado 1 vs 1");
    window.location="./ahorcado2.html";
}

/**
 * Función que te lleva al menú del juego, para elegir 1 jugador o 1 vs 1
 */
function menu() {
    window.location.href = './juegos.html';
}

/**
 * Alerta al usuario que ha cerrado la sesión y luego lo redirige a la página de inicio de sesión
 */
function index(){
    alert("Has cerrado sesión");
    window.location = "../login.html";
}






/*----------------------VARIABLEEEEEES------------------------*/

//OBTENER DATOS (PERO NO ESTABA DENTRO DE FUNCIÓN)
listaUsuarios = [];

//PELICULASSERIESJSON (PERO NO ESTABA DENTRO DE FUNCIÓN)
let peliculasSeries = [];

//OBTENERRANKING (PERO NO ESTABA DENTRO DE FUNCIÓN)
let nuevoRanking;
let rankingOrdenado;

//ESCRIBIRRANKING
let modoJuego = document.getElementById("modoJuego");
let tablaRanking = document.getElementById("tablaRanking");
let numero = 1;

//LEERCOOKIEUSUARIO
let usuario;

//BIENVENIDA
let mensaje = document.getElementById("bienvenida");

//MOSTRARESTADISTICAS
let partidasTotales = document.getElementById("partidasTotales");

//MOSTRARPELICULA
let divPeliculaSerie = document.getElementById("peliculaSerie");
let divPoster = document.getElementById("poster");
let divInformacion = document.getElementById("informacion");




/**
 * Crea un nuevo objeto XMLHttpRequest, establece su propiedad onreadystatechange en una función que se
 * llamará cada vez que cambie la propiedad readyState y luego llama a los métodos open() y send() para
 * iniciar la solicitud.
 */
function obtenerDatos(){
    let url = '../json/usuarios.json';
    let solicitud = new XMLHttpRequest();
    solicitud.onreadystatechange = function () {
        if (solicitud.readyState == 4 && solicitud.status == 200) {
            let respuesta = JSON.parse(solicitud.responseText);
            for (let i = 0; i < respuesta.length; i++) {
                listaUsuarios.push(respuesta[i]);
            }
        }
    }
    solicitud.open('GET', url, true);
    solicitud.send();
}

/**
 * Obtiene el archivo JSON, lo analiza y lo inserta en un array de películas y series.
 */
function peliculasSeriesJson(){
    let url = '../json/peliculasSeries.json';
    let solicitud = new XMLHttpRequest();
    solicitud.onreadystatechange = function () {
        if (solicitud.readyState == 4 && solicitud.status == 200) {
            let respuesta = JSON.parse(solicitud.responseText);
            for (let i = 0; i < respuesta.length; i++) {
                peliculasSeries.push(respuesta[i]);
            }
        }
    }
    solicitud.open('GET', url, true);
    solicitud.send();
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
 * Crea una tabla con el ranking de los jugadores, ordenados por el número de juegos ganados
 */
function qualifyingClassification() {
    modoJuego.setAttribute("class", "d-none");
    document.getElementById("ranking").setAttribute("class", "row justify-content-center mt-4");
    tablaRanking.innerHTML = "<table border='1'></table>";
    tablaRanking.innerHTML += "<thead class='text-dark'<tr><th>Qualifying Classification</th></tr></thead>";
    for (const [key, value] of rankingOrdenado) {
        let tr = document.createElement("tr");
        let td = document.createElement("td");
        let td2 = document.createElement("td");
        let td3 = document.createElement("td");
        td.textContent = numero;
        //Se elimina "Ganadas" de la clave para que solo queden los nombres de los jugadores.
        td2.textContent = key.replace("Ganadas", "");
        td3.textContent = value;
        tr.appendChild(td);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tablaRanking.appendChild(tr);
        numero++;
    }
    let menuJuegos = document.getElementById("menuJuegos");
    menuJuegos.removeAttribute("class");
    menuJuegos.setAttribute("class", "btn btn-danger");
}


/**
 * Oculta el ranking de las posiciones de los jugadores y vuelve a mostrar de nuevo los modos de juego.
 */
function menuJuegos(){
    let ranking = document.getElementById("ranking");
    ranking.removeAttribute("class");
    ranking.setAttribute("class", "d-none");
    modoJuego.removeAttribute("class");
    modoJuego.setAttribute("class", "row d-flex justify-content-around mt-5");
    let menuJuegos = document.getElementById("menuJuegos");
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
    for (let i = 0; i < listaUsuarios.length; i++) {
        if (listaUsuarios[i].Usuario == user && listaUsuarios[i].Password == password) {
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
 * Busca la cookie llamada "Usuario" y devuelve el valor de esa cookie
 * @returns el valor de la variable de usuario.
 */
function leerCookieUsuario() {
    let listaCookies = document.cookie.split(";");
    for (i in listaCookies) {
        busca = listaCookies[i].search("Usuario");
        if (busca > -1) {
            cookieUsuario = listaCookies[i]
        }
        let igual = cookieUsuario.indexOf("=");
        usuario = cookieUsuario.substring(igual + 1);
        return usuario;
    }
}

/**
 * Lee la cookie y luego escribe el valor de la cookie en el elemento HTML con la identificación de "mensaje"
 */
function bienvenida() {
    mensaje.innerHTML = "<h2>Bienvenido " + leerCookieUsuario() + "</h2>";
}


/**
 * Crea una nueva fecha, le agrega un año y luego crea una cookie con el nombre "Usuario" y el valor del parámetro "usuario" que caduca en un año.
 * @param usuario - El valor de la cookie.
 */
function crearCookieUsuario(usuario) {
    let cookieFecha = new Date();
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
    alert("Se han borrado las stats de tus partidas partidasTotales");
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
 * Lee los valores de los ítems de localStorage "Jugadas" y "Ganadas" y los muestra en el elemento HTML con el id "partidasTotales"
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
 * Muestra la información de la película o serie
 */
function mostrarPelicula() {
    divInformacion.style.display = "none";
    divPeliculaSerie.innerHTML += "<table>";
    divPeliculaSerie.innerHTML += "<tr>";
    divPeliculaSerie.innerHTML += "<th scope='row'><b>Título: </b></th>";
    divPeliculaSerie.innerHTML += "<td>" + pelicula.Titulo + "</td>";
    divPeliculaSerie.innerHTML += "</tr>";
    divPeliculaSerie.innerHTML += "</table>";

    divPeliculaSerie.innerHTML += "<table>";
    divPeliculaSerie.innerHTML += "<tr>";
    divPeliculaSerie.innerHTML += "<th scope='row'><b>Director: </b></th>";
    divPeliculaSerie.innerHTML += "<td>" + pelicula.Director + "</td>";
    divPeliculaSerie.innerHTML += "</tr>";
    divPeliculaSerie.innerHTML += "</table>";

    divPeliculaSerie.innerHTML += "<table>";
    divPeliculaSerie.innerHTML += "<tr>";
    divPeliculaSerie.innerHTML += "<th scope='row'><b>Clasificación: </b></th>";
    divPeliculaSerie.innerHTML += "<td>" + pelicula.Clasificacion + "</td>";
    divPeliculaSerie.innerHTML += "</tr>";
    divPeliculaSerie.innerHTML += "</table>";

    divPeliculaSerie.innerHTML += "<table>";
    divPeliculaSerie.innerHTML += "<tr>";
    divPeliculaSerie.innerHTML += "<th scope='row'><b>Año de estreno: </b></th>";
    divPeliculaSerie.innerHTML += "<td>" + pelicula.Anio + "</td>";
    divPeliculaSerie.innerHTML += "</tr>";
    divPeliculaSerie.innerHTML += "</table>";

    divPeliculaSerie.innerHTML += "<table>";
    divPeliculaSerie.innerHTML += "<tr>";
    divPeliculaSerie.innerHTML += "<th scope='row'><b>Acttores: </b></th>";
    divPeliculaSerie.innerHTML += "<td>" + pelicula.Actores + "</td>";
    divPeliculaSerie.innerHTML += "</tr>";
    divPeliculaSerie.innerHTML += "</table>";

    divPeliculaSerie.innerHTML += "<table>";
    divPeliculaSerie.innerHTML += "<tr>";
    divPeliculaSerie.innerHTML += "<th scope='row'><b>Sinopsis: </b></th>";
    divPeliculaSerie.innerHTML += "<td>" + pelicula.Sinopsis + "</td>";
    divPeliculaSerie.innerHTML += "</tr>";
    divPeliculaSerie.innerHTML += "</table>";

    divPoster.innerHTML = "<h3>Imagen: </h3>" +'<img src="' + pelicula.Imagen + '" alt="' + pelicula.Titulo + '" width="400" height="400"></img>';
}

class Partida{
    /**
     * Constructor de la clase partida
     * @param {*} palabra pelicula a adivinar
     */
    constructor(palabra) {
        //Nombre de la pelicula
        this.palabra = palabra;
        //Tablero vacio
        this.tablero = this.crearTablero();
        //Contador de fallos
        this.fallos = 0;
        //Boolean que comprueba si la partida se ha ganado o perdido
        this.win = false;
        //Tablero resuelto 
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
     * Esta función crea un tablero con el mismo número de espacios que la palabra a adivinar
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
     * Funcion que comprueba si la letra está en la palabra.
     * Si no esta, incrementa en 1 los fallos y dibuja el canvas.
     * Comprueba si los fallos son menores a 6 para seguir con la partida o darla por perdida.
     * Si esta, se incrementan los aciertos.
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
            case 1:
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
            case 2:
                context.strokeStyle = '#000000';
                context.beginPath();
                context.moveTo(349, 133);
                context.lineTo(349, 205);
                context.stroke();
                context.closePath();
                break;
            case 3:
                context.strokeStyle = '#000000';
                context.beginPath();
                context.moveTo(348, 203);
                context.lineTo(326, 248);
                context.stroke();
                context.closePath();
                break;
            case 4:
                context.strokeStyle = '#000000';
                context.beginPath();
                context.moveTo(350, 200);
                context.lineTo(375, 247);
                context.stroke();
                context.closePath();
                break;
            case 5:
                context.strokeStyle = '#000000';
                context.beginPath();
                context.moveTo(351, 152);
                context.lineTo(387, 192);
                context.stroke();
                context.closePath();
                break;
            case 6:
                context.strokeStyle = '#000000';
                context.beginPath();
                context.moveTo(347, 154);
                context.lineTo(317, 190);
                context.stroke();
                context.closePath();
                break;
            default:
        }
        if(this.fallos == 6){
            this.win = false;
        }
    }
}
//Map donde se almacenan las partidas
var listaPartidas = new Map();
//Nombre del usuario
var jugador;
var partida1;
var historial = [];
var tituloPeli;
let pelicula;
/**
 * Funcion que inicia la partida.
 * Se limpia divPeliculaSerie y divPoster por si se hubiera jugado una partida previa.
 * Se muestran "canvas" y "juego" por si se hubiera jugado una partida previa.
 * Se saca un numero aleatorio para buscar luego en el array de peliculas.
 * Se suma 1 al contador de partidas jugadas.
 * Se iguala la variable "jugador" al contenido de la Cookie "Usuario".
 * Se elige una pelicula usando el numero aleatorio de la lista.
 * Se convierte el titulo de la pelicula a mayusculas y se guarda en "tituloPeli".
 * Se crea la nueva partida pasando por parametro "tituloPeli".
 * Se escribe en divPeliculaSerie y divPoster la informacion de la pelicula, que de momento permanecera oculto.
 * 
 */
function play(){
    alert("Empieza el juego");
    let canvas = document.getElementById("canvas");
    let juego = document.getElementById("juego");
    divPeliculaSerie.innerHTML = "";
    divPoster.innerHTML = "";
    canvas.style.display = "block";
    juego.style.display = "block";
    let numeroRandom = Math.floor(Math.random() * peliculasSeries.length);
    sumarJugada();
    jugador = leerCookieUsuario();
    pelicula = peliculasSeries[numeroRandom];
    tituloPeli = pelicula.Titulo.toUpperCase();
    partida1 = new Partida(tituloPeli);
    mostrarPelicula();

    //Se guarda la partida en el historial del jugador
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
    //Se dibuja el tablero y se establece el color de fondo de las teclas.
    Ranked(jugador, partida1);
    document.getElementById("tablero").innerHTML = partida1.tablero.join('');
    let cadena = "1234567890QWERTYUIOPASDFGHJKLÑZXCVBNM";
    for(let i = 0; i < cadena.length; i++){
        document.getElementById(cadena.charAt(i)).style.backgroundColor = "#000000";
    }
    context.fill();
    context.fillStyle = "#FFFFFF";
    context.fillRect(260, 98, 150, 179);


}

/**
 * Funcion para jugar 2 jugadores.
 * Se muestra el div "canvas" y "juego".
 * Se suma 1 al contador de partidas jugadas del jugador.
 * Se establece el nombre del jugador al valor de leerCookieUsuario().
 * Se le pide al jugador 2 que escriba el titulo de la pelicula con la que jugara el jugador 1.
 * Se crea una nueva partida pasando por parametro "tituloPeli".
 * Se pinta el tablero y se ponen todas las letras a negro. Tambien se pinta el canvas.
 */
function play2(){
    let canvas = document.getElementById("canvas");
    let juego = document.getElementById("juego");
    divInformacion.innerHTML = "";
    canvas.style.display = "block";
    juego.style.display = "block";
    sumarJugada();
    jugador = leerCookieUsuario();
    var tituloPeli = prompt(user2 + " escribe una palabra").toUpperCase();
    partida1 = new Partida(tituloPeli);

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
    Ranked(jugador, partida1);
    document.getElementById("tablero").innerHTML = partida1.tablero.join(' ');
    let cadena = "12345667890QWERTYUIOPASDFGHJKLÑZXCVBNM";
    for (let i = 0; i < cadena.length; i++) {
        document.getElementById(cadena.charAt(i)).style.backgroundColor = "#000000";
    }
    context.fill();
    context.fillStyle = "#FFFFFF";
    context.fillRect(260, 98, 150, 179);
}

/**
 * Funcion que comprueba si la letra pulsada se encuentra en el titulo.
 * Comprueba si la partida ha terminado o no.
 * En caso de que hay terminado comprueba si ha ganado el usuario 1 o 2.
 * Si gana el jugador 2, se mostratá el titulo que no ha acertado el jugador 1 y se reproducirá un sonido de derrota.
 * Si gana el jugador 1, se mostrará un mensaje indicando que ha ganado y un sonido de victoria.
 * Si la partida no ha acabado, llama a "comprobarLetra", pinta la tecla de rojo,
 * y si estuviera la letra en la palabra, la escribe en el tablero.
 * @param {*} letra a comprobar.
 * @param {*} id de la tecla pulsada.
 */
function escribir(letra, id){
    let canvas = document.getElementById("canvas");
    let juego = document.getElementById("juego");
    if(partida1.win == true || partida1.fallos == 6){
        alert("OOOOOH!!!! No has acertado la pel");
        if(user2){
            canvas.style.display = "none";
            juego.style.display = "none";
            alert("SE ACABÓ!!!! " + user2 + " GANA LA PARTIDA!!!!");
        }
    }else{
        document.getElementById(id).style.backgroundColor ="#FF0040";
        partida1.comprobarLetra(letra);
        document.getElementById("tablero").innerHTML = partida1.tablero.join('');
        if(partida1.win == true){
            sumarGanada();
            canvas.style.display = "none";
            juego.style.display = "none";
            divInformacion.style.display = "flex";
            if(user2){
                divInformacion.innerHTML = "<h1>" + leerCookieUsuario() + " gana la partida!</h1>";
            }
        }
    }
}