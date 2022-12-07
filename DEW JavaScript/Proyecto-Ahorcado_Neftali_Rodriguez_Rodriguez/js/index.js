/**
 * Se obtiene la lista de usuarios del archivo JSON usuarios.json
 * mediante AJAX y se guarda en el array "listaUsuarios"
 */
 listaUsuarios = [];
 function obtenerDatos() {
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
 
 listaPeliculas = [];
 function obtenerPeliculas() {
     let url = '../json/peliculas.json';
     let solicitud = new XMLHttpRequest();
     solicitud.onreadystatechange = function () {
         if (solicitud.readyState == 4 && solicitud.status == 200) {
             let respuesta = JSON.parse(solicitud.responseText);
             for (let i = 0; i < respuesta.length; i++) {
                 listaPeliculas.push(respuesta[i]);
             }
         }
     }
     solicitud.open('GET', url, true);
     solicitud.send();
 }
 let nuevoRanking;
 let rankingOrdenado;
 /**
  * Busca en el localStorage las entradas que contengan "Ganadas" en el nombre.
  * Las guarda en el map "ranking" y las ordena segun el valor de manera descendente.
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
  * Primero, oculta el div "modoJuego" donde se muestran los modos de juego.
  * Esteblece la clase "row justify-content-center mt-4" al div ranking para que se muestre.
  * Por cada resultado en el map "rankingOrdenado" se crea un tr y 3 td.
  * Los td contendran el numero en la tabla, el nombre del jugador,
  * y el numero de partidas ganadas ordenado de manera descendente.
  * Por ultimo se añade cada tr a la tabla.
  */
 function escribirRanking() {
     document.getElementById("modoJuego").setAttribute("class", "d-none");
     document.getElementById("ranking").setAttribute("class", "row justify-content-center mt-4");
     let tabla = document.getElementById("tablaRanking");
     let numero = 1;
     //Se limpia la tabla para que no se añadan resultados repetidos.
     tabla.innerHTML = "<table class='table w-25'></table>";
     tabla.innerHTML += "<thead class='bg-dark text-light'<tr><th colspan='3'>Ranking</th></tr></thead>";
     for (const [key, value] of rankingOrdenado) {
         let fila = document.createElement("tr");
         let posicion = document.createElement("td");
         let clave = document.createElement("td");
         let valor = document.createElement("td");
         posicion.textContent = "#" + numero;
         //Se elimina "Ganadas" de la clave para que solo queden los nombres de los jugadores.
         clave.textContent = key.replace("Ganadas", "");
         valor.textContent = value;
         fila.appendChild(posicion);
         fila.appendChild(clave);
         fila.appendChild(valor);
         tabla.appendChild(fila);
         numero++;
     }
     let volver = document.getElementById("botonVolver");
     volver.removeAttribute("class");
     volver.setAttribute("class", "btn btn-success");
 }
 
 /**
  * Funcion que oculta el ranking y vuelve a mostrar los modos de juego.
  */
 function volver() {
     let ranking = document.getElementById("ranking");
     modoJuego = document.getElementById("modoJuego");
     ranking.removeAttribute("class");
     ranking.setAttribute("class", "d-none");
     modoJuego.removeAttribute("class");
     modoJuego.setAttribute("class", "row d-flex justify-content-around mt-5");
     let volver = document.getElementById("botonVolver");
     volver.removeAttribute("class");
     volver.setAttribute("class", "d-none");
 }
 
 
 
 let user;
 /**
  * Funcion que recoge los datos del login del usuario.
  * Si el usuario y la contraseña no coinciden se muestra una alerta al usuario.
  * Si coinciden se redirige al usuario a la pagina del juego.
  */
 function login() {
     user = document.getElementById("user").value;
     let login = false;
     let password = document.getElementById("password").value;
     for (let i = 0; i < listaUsuarios.length; i++) {
         if (listaUsuarios[i].Usuario == user && listaUsuarios[i].Password == password) {
             crearCookieUsuario(user);
             login = true;
             window.location = "../html/juegos.html";
         }
     }
     if (login == false) {
         alert("Login Incorrecto");
     }
 }
 let user2;
 /**
  * Funcion que pregunta el nombre del jugador 2 y lo guarda en "user2".
  */
 function jugador2() {
     user2 = prompt("Nombre del segundo Jugador");
 }
 
 /**
  * Lee el valor de la Cookie "Usuario" y lo retorna
  */
 function leerCookieUsuario() {
     let usuario;
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
  * Funcion que da la bienvenida al usuario al loguearse
  */
 function bienvenida() {
     let mensaje = document.getElementById("bienvenida");
     mensaje.innerHTML = "<h2>Bienvenido " + leerCookieUsuario() + "</h2>";
 }
 /**
  * Funcion que cierra la sesion del usuario y devuelve a la pantalla del login
  */
 function logout() {
     window.location.href = '../index.html';
 }
 
 /**
  * Crea la Cookie del usuario 
  * @param {*} usuario nombre del usuario.
  */
 function crearCookieUsuario(usuario) {
     //Se crea una nueva fecha
     let caducidad = new Date();
     //Se le suma un año
     caducidad.setFullYear(caducidad.getFullYear() + 1);
     //Se le añade a la cookie el parametro "expires" con la fecha actual + 1 año.
     //Tambien se añade el parametro "SameSite=Strict" para indicar que es una cookie de nuestro sitio.
     document.cookie = `Usuario = ${usuario} ;expires=${caducidad.toUTCString()};SameSite=Lax`;
 }
 
 /**
  * Comprueba que el usuario tenga estadisticas previas.
  * Si no las tiene llama a la funcion "CreaEstadisticas"
  */
 function buscaEstadisticas() {
     if (!localStorage.getItem(leerCookieUsuario() + "Jugadas"
         || !localStorage.getItem(leerCookieUsuario() + "Ganadas"))) {
         crearEstadisticas();
     }
 }
 
 /**
  * Crea dos LocalStorage para el usuario donde se guardaran el numero
  * de partidas jugadas y el numero de partidas ganadas.
  */
 function crearEstadisticas() {
     localStorage.setItem(leerCookieUsuario() + "Jugadas", 0);
     localStorage.setItem(leerCookieUsuario() + "Ganadas", 0);
     mostrarEstadisticas();
 }
 
 /**
  * Borra el localStorage de las estadisticas del usuario.
  * Luego llama a crearEstadisticas para establecerlas a 0.
  */
 function borrarEstadisticas() {
     localStorage.removeItem(leerCookieUsuario() + "Jugadas");
     localStorage.removeItem(leerCookieUsuario() + "Ganadas");
     crearEstadisticas();
 }
 
 /**
  * Incrementa el localStorage donde se guarda el numero
  * de partidas jugadas del usuario.
  */
 function sumarJugada() {
     let jugadas = parseInt(localStorage.getItem(leerCookieUsuario() + "Jugadas"));
     jugadas++;
     localStorage.setItem(leerCookieUsuario() + "Jugadas", jugadas);
     mostrarEstadisticas();
 }
 
 /**
  * Incrementa el localStorage donde se guarda el numero
  * de partidas ganadas del usuario.
  */
 function sumarGanada() {
     let ganadas = parseInt(localStorage.getItem(leerCookieUsuario() + "Ganadas"));
     ganadas++;
     localStorage.setItem(leerCookieUsuario() + "Ganadas", ganadas);
     mostrarEstadisticas();
 }
 
 /**
  * Lee el localStorage buscando las partidas ganadas y jugadas del jugador.
  * Si no existe registro de localStorage de dicho usuario establece ambas a 0.
  * Si el numero de partidas jugadas es mayor a 0 calcula el porcentaje de victorias.
  * Luego muestra el contenido de ambos en el div "anteriores".
  */
 function mostrarEstadisticas() {
     let valorJugadas = localStorage.getItem(leerCookieUsuario() + "Jugadas");
     let valorGanadas = localStorage.getItem(leerCookieUsuario() + "Ganadas");
     if (valorJugadas == null || valorGanadas == null) {
         valorJugadas = 0;
         valorGanadas = 0;
     }
     document.getElementById("anteriores").innerHTML = "";
     document.getElementById("anteriores").innerHTML += "Partidas anteriores jugadas = " + valorJugadas + '<br>';
     document.getElementById("anteriores").innerHTML += "Partidas anteriores ganadas = " + valorGanadas + '<br>';
     if (valorJugadas > 0) {
         let porcentaje = parseInt((valorGanadas / valorJugadas) * 100);
         document.getElementById("anteriores").innerHTML += "Porcentaje de victorias = " + porcentaje + "%";
     }
 }
 
 
 /**
  * Funcion que muestra el titulo, la sinopsis y el poster de la pelicula
  * en el div "pelicula"
  */
 let divPelicula = document.getElementById("pelicula");
 let divPoster = document.getElementById("poster");
 let divInformacion = document.getElementById("informacion");
 function mostrarPelicula() {
     divInformacion.style.display = "none";
     divPelicula.innerHTML += "<h1><b>" + pelicula.Titulo + "</b></h1>";
     divPelicula.innerHTML += "<h3><b>Director: </b>" + pelicula.Director + "</h3>";
     divPelicula.innerHTML += "<h3><b>Genero: </b>" + pelicula.Genero + "</h3>";
     divPelicula.innerHTML += pelicula.Sinopsis + "<br>";
     divPoster.innerHTML = '<img src="' + pelicula.Poster + '" alt="' + pelicula.Titulo + '" width="400" height="600" ></img>';
 }
 
 /**
  * Creacion de la clase partida.
  */
 class Partida {
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
         this.tableroResuelto = this.palabra.split(
             '');
 
     }
 
     /* Función que creará un tablero para el juego. */
     crearTablero = function () {
         var huecos = "";
         this.tableroResuelto = this.palabra.split('');
         for (let i = 0; i < this.tableroResuelto.length; i++) {
             if (this.tableroResuelto[i] != ' ') {
                 huecos += "_"
             } else {
                 huecos += " ";
             }
         }
         var tableroPalabra = huecos.split('');
         return tableroPalabra;
     }
 
     /**
      * Funcion que comprueba si la letra está en la palabra.
      * Si no esta, incrementa en 1 los fallos y dibuja el canvas.
      * Comprueba si los fallos son menores a 6 para seguir con la partida o darla por perdida.
      * Si esta, se incrementan los aciertos.
      */
     comprobarLetra = function (letra) {
         var acierto = false;
         for (let i = 0; i < this.tablero.length; i++) {
             if (this.tableroResuelto[i] == letra) {
                 this.tablero[i] = letra;
                 acierto = true;
             }
         }
         if (!acierto) {
             this.fallos++;
         }
 
         var correctos = 0;
 
         for (let i = 0; i < this.tablero.length; i++) {
             if (this.tablero[i] == this.tableroResuelto[i]) {
                 correctos++;
 
             };
             if (correctos == this.tablero.length && this.fallos <
                 6) {
                 this.win = true;
 
             };
         }
         switch (this
             .fallos) {
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
 
         };
         if (this.fallos == 6) {
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
  * Se limpia divPelicula y divPoster por si se hubiera jugado una partida previa.
  * Se muestran "canvas" y "juego" por si se hubiera jugado una partida previa.
  * Se saca un numero aleatorio para buscar luego en el array de peliculas.
  * Se suma 1 al contador de partidas jugadas.
  * Se iguala la variable "jugador" al contenido de la Cookie "Usuario".
  * Se elige una pelicula usando el numero aleatorio de la lista.
  * Se convierte el titulo de la pelicula a mayusculas y se guarda en "tituloPeli".
  * Se crea la nueva partida pasando por parametro "tituloPeli".
  * Se escribe en divPelicula y divPoster la informacion de la pelicula, que de momento permanecera oculto.
  * 
  */
 function play() {
     divPelicula.innerHTML = "";
     divPoster.innerHTML = "";
     document.getElementById("canvas").style.display = "block";
     document.getElementById("juego").style.display = "block";
     let numeroRandom = Math.floor(Math.random() * listaPeliculas.length);
     sumarJugada();
     jugador = leerCookieUsuario();
     pelicula = listaPeliculas[numeroRandom];
     tituloPeli = pelicula.Titulo.toUpperCase();
     partida1 = new Partida(tituloPeli);
     mostrarPelicula();
 
     //Se guarda la partida en el historial del jugador
     function Ranked(jugador, partida1) {
         if (listaPartidas.has(jugador)) {
             for (var [key, value] of listaPartidas) {
                 if (key == jugador) {
                     value.push(partida1);
                 }
             }
         } else {
             historial = [partida1];
             listaPartidas.set(jugador, historial);
         }
 
     }
     //Se dibuja el tablero y se establece el color de fondo de las teclas.
     Ranked(jugador, partida1);
     document.getElementById("tablero").innerHTML = partida1.tablero.join('');
     let cadena = "QWERTYUIOPASDFGHJKLÑZXCVBNM";
     for (let i = 0; i < cadena.length; i++) {
         document.getElementById(cadena.charAt(i)).style.backgroundColor =
             "#000000";
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
 function play2() {
     divInformacion.innerHTML = "";
     document.getElementById("canvas").style.display = "block";
     document.getElementById("juego").style.display = "block";
     sumarJugada();
     jugador = leerCookieUsuario();
     var tituloPeli = prompt(user2 + " escribe el titulo de la pelicula").toUpperCase();
     partida1 = new Partida(tituloPeli);
 
     function Ranked(jugador, partida1) {
 
         if (listaPartidas.has(jugador)) {
             for (var [key, value] of listaPartidas) {
                 if (key == jugador) {
                     value.push(partida1);
                 }
             }
         } else {
             historial = [partida1];
             listaPartidas.set(jugador, historial);
         }
 
     }
     Ranked(jugador, partida1);
     document.getElementById("tablero").innerHTML = partida1.tablero.join(' ');
     let cadena = "QWERTYUIOPASDFGHJKLÑZXCVBNM";
     for (let i = 0; i < cadena.length; i++) {
         document.getElementById(cadena.charAt(i)).style.backgroundColor =
             "#000000";
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
 function escribir(letra, id) {
     if (partida1.win == true || partida1.fallos ==
         6) {
         alert("Partida Finalizada");
         if (user2) {
             document.getElementById("canvas").style.display = "none";
             document.getElementById("juego").style.display = "none";
             divInformacion.innerHTML = "<h1>" + user2 + " gana la partida!</h1>";
             divInformacion.innerHTML = `<h3>La pelicula era ${partida1.palabra}</h3>`
             divInformacion.style.display = "flex";
         }
 
     } else {
         document.getElementById(id).style.backgroundColor =
             "#FF0040";
         partida1.comprobarLetra(letra);
         document.getElementById("tablero").innerHTML = partida1.tablero.join('');
         if (partida1.win == true) {
             sumarGanada();
           
             document.getElementById("canvas").style.display = "none";
             document.getElementById("juego").style.display = "none";
             divInformacion.style.display = "flex";
             if (user2) {
                 divInformacion.innerHTML = "<h1>" + leerCookieUsuario() + " gana la partida!</h1>";
             }
         }
     }
 }
 
 
 
 
 