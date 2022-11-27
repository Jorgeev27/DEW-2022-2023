/**
 * Lleva al usuario a la página del menú.
 */
 function menu(){
    window.location = "../html/menu.html";
}

/* Llamar a la función play() cuando se carga la página. */
onload = () => {
    play();
}

/**
 * La clase Partida() crea un nuevo juego. Tiene un constructor que toma una palabra
 * como parámetro y crea un nuevo juego con esa palabra. También tiene un método que verifica si la
 * letra que ha ingresado el usuario está en la palabra.
 * Funciones dentro de la clase: CrearTablero() y ComprobarLetra().
 */
class Partida {
    /**
     * Definimos las propiedades de la clase Partida.
     */
    letraUsuario;
    tablero;
    fallos;
    ganador;
    tableroResuelto;
    /**
      * Constructor que se llama cuando se crea un nuevo objeto.
      * @param letraUsuario - La letra del usuario que introduce.
      * @param tablero - El tablero de la palabra.
      * @param fallos - Los fallos que tiene el usuario si introduce mal la letra de la palabra.
      * @param ganador - El ganador de la partida.
      * @param tableroResuelto - El resultado de la palabra en el tablero.
      */
    constructor(letraUsuario) {
        this.letraUsuario = letraUsuario;
        this.tablero = this.crearTablero();
        this.fallos = 0;
        this.ganador = false;
        this.tableroResuelto = this.letraUsuario.split('');
    }
    /**
     * La función CrearTablero() hace crear el tablero.
     * @returns la palabra en el tablero.
     */
    crearTablero(){
        let huecos = ""; //variable del tablero
        this.tableroResuelto = this.letraUsuario.split('');
        for(let i = 0; i < this.tableroResuelto.length; i++){
            if(this.tableroResuelto[i] != ' '){ //si la letra no es un espacio añadimos un guión
                huecos += "_";
            }else{ //y si hay un espacio añadimos el mismo
                huecos += " ";
            }
        }
        let tableroPalabra = huecos.split(''); //convertimos huecos en un array
        return tableroPalabra;
    }
    comprobarLetra (letra){
        let acierto = false; //establecemos los aciertos a falso
        for (let i = 0; i < this.tablero.length; i++) {
            if (this.tableroResuelto[i] == letra) { //si la letra se encuentra en el tablero resuelto 
                this.tablero[i] = letra; //la añadimos al tablero vacio
                acierto = true; // y establecemos los aciertos a true
            }
        }
        if(!acierto){
            this.fallos++; //cuando los aciertos esten en false se incrementan los fallos
        }
        let correctos = 0;
        for(let i = 0; i < this.tablero.length; i++){
            if(this.tablero[i] == this.tableroResuelto[i]){ // si la letras en ambos coinciden
                correctos++; //se incrementan los aciertos
            };
            if(correctos == this.tablero.length && this.fallos < 6){ //si el número de letras correctas es igual a la longitud del tabero y los fallos son inferiores a 6
                this.ganador = true; //el usuario gana 
            };
        }
        switch (this.fallos) { //canvas , cuando los fallos se incrementen se va rellenando el muñeco del canvas
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
        if(this.fallos == 6){ //si los fallos son igual a 6 
            this.ganador = false; // el usuario pierde la partida
        }
    }
}

let listaPartidas = new Map(); //creamos un map para almacenar las partidas
let jugador; // nombre del usuario
let partida1;
let historial = []; //array de las partidas
let tituloPeli; //variable para guardar el titulo de la pelicula

/**
 * La función Escribir() comprueba la letra que ha presionado el usuario y si está en la palabra.
 * @param letra - La letra que el usuario ha presionado.
 * @param id - el id del elemento que desea cambiar.
 */
function escribir(letra, id) {
    if(partida1.ganador == true || partida1.fallos == 6){ // paramos la partida por si el usuario sigue presionando teclas 
        alert("OOOOOHH!!!!!!!!! Has perdido :(");
    }else{
        document.getElementById(id).style.backgroundColor = "#FF0040"; // cada vez que pulsemos una tecla esta pasa a color rojo
        partida1.comprobarLetra(letra); // comprobamos si la tecla está en la palabra 
        document.getElementById("tablero").innerHTML = partida1.tablero.join(''); //pintamos el nuevo tablero
        if(partida1.ganador == true) { //  mostraremos la ficha de la pelicula
            alert("HAS CONSEGUIDO ADIVINAR LA PALABRA: HAS GANADOO :) !!!!!!!");
            window.redirect = "../FichaPelicula/ficha.html";
            //document.getElementById("fichaTecnica").innerHTML = "<iframe width='1500' height='500' frameborder='0' scrolling='no'  marginheight='0' marginwidth='0' src='Producto1vs1.html'> </iframe>"
        }
    }
}

/*
function ocultarCampos(objeto, display){
    objeto.style.display=display;
}
*/

/**
 * La función Stats() devuelve una cadena con el número de victorias y el número total de juegos
 * jugados por el jugador.
 * @returns las partidas ganadas de las partidas totales jugadas.
 */
function stats(){ //creamos la función para las estadisticas 
    let nombre = jugador; //en la variable nombre guardamos el nombre del jugador
    let victorias = 0; // creamos la variable victorias y la establecemos a cero
    let derrotas = 0; // creamos la variable derrotas y la establecemos a cero
    let partidasTotales = 0; //así como de partidas totales
    for(let i = 0; i < listaPartidas.get(nombre.toUpperCase()).length; i++){ //recorremos la lista partidas buscando el usuario
        if(listaPartidas.get(nombre.toUpperCase())[i].ganador == true){ // si ha ganado la partida , 
            victorias++; //incrementamos las victorias
        }else{
            derrotas++; // de lo contrario se incrementan las derrotas
        }
    }
    partidasTotales = victorias + derrotas // para saber el total de partidas sumamos ambas
    return "Partidas ganadas " + victorias + " de " + partidasTotales; // devolvemos un string con las partidas ganadas sobre las totales
}

/**
 * La función Saludar() guarda las estadísticas en LocalStorage.
 */
function saludar() { //funcion para crear localStorage
    localStorage.clear(); //limpiamos el localStorage
    alert("El navegador soporta webStorage"); //avisamos al usuario de que el navegador soporta webStorage
    if(localStorage.getItem("usuario") != null){ //si el usuario es igual a nulo 
        let nombre = prompt("Como te llamas"); // preguntamos como se llama 
        if(localStorage){
            document.getElementById("saludo").innerHTML = "Bienvenido " + localStorage.getItem("usuario") //saludamos al usuario
        }
    }else{
        let nombre = prompt("Como te llamas");
        //añadir al usuario
        localStorage.setItem("usuario", nombre);
        //mostrar un item
        let estadisticas = stats(); //guardamos la funcion anterior en estadisticas
        localStorage.setItem("UltimosResultados", estadisticas); // y la guardamos en el localStorage como Ultimos resultados 
        document.getElementById("saludo").innerHTML = "Bienvenido " + localStorage.getItem("usuario"); // saludamos al usuario
        document.getElementById("lastStats").innerHTML = "Ultimo Ranking: " + localStorage.getItem("UltimosResultados"); //mostramos sus ultimos resultados
    }
}


/**
 * La función Play() le pregunta al usuario el nombre del jugador y el título de la película, crea un
 * nuevo juego y lo agrega al historial del jugador.
 * Funciones dentro de la función: ElegirPeliMachine() y Ranking().
 */
function play(){
    /* Borra el almacenamiento de la sesión. */
    sessionStorage.clear();

    /**
     * La función ElegirPeliMachine() permitirá al usuario jugar contra la máquina. Creamos una variable
     * llamada resultado donde almacenaremos el título de la película. Buscamos el archivo json y luego
     * leemos el objeto
     */
    function elegirPeliMachine(){ //creamos la funcion que permitirá jugar al usuario contra la máquina
        let resultado; //creamos la variable resultado donde guardaremos el titulo de la pelicula
        fetch("../json/peliculasSeries.json")
            .then(respuesta => respuesta.json())
            //.then(datos => pintarDatos(datos, peliculas));
            .then(datos => { 
                return leerObj(datos) 
            })
            .catch(error => console.log("Solicitud fallida", error));
    }

    /* Llamando a la función elegirPeliMachine() */
    elegirPeliMachine();
    jugador = prompt("nombre").toUpperCase();
    tituloPeli = document.cookie.toUpperCase(); // ahora en vez de pedir al usuario la palabra , cogemos esta de las cookies
    partida1 = new Partida(tituloPeli);

    /**
     * La función Ranking() toma un jugador y un juego como parámetros, y si el jugador ya está en el mapa, agrega el juego
     * al historial del jugador, de lo contrario, crea un nuevo historial para el jugador y le agrega
     * el juego.
     * @param jugador - Nombre del jugador
     * @param partida1 - es un objeto que contiene la información del juego.
     */
    function Ranking(jugador,partida1){
        if(listaPartidas.has(jugador)){ //si el map contiene el jugador 
            for(var [key, value] of listaPartidas) { //recorremos el map 
                if(key == jugador){ // si la clave coincide con el jugador
                    value.push(partida1); //añadimos la partida al historial (array de partidas) al jugador
                }
            }
        }else{
            historial = [partida1]; // guardamos la partida en un historial (array de partidas)
            listaPartidas.set(jugador, historial); //y la añadimos al map
        }
    }

    /* Llamando a la función Ranking y pasando los parámetros jugador y partida1. */
    Ranking(jugador, partida1);

    document.getElementById("tablero").innerHTML = partida1.tablero.join(''); // mostramos el tablero al usuario
    let cadena = "1234567890QWERTYUIOPASDFGHJKLÑZXCVBNM"; //creamos una cadena de todas las letras 
    for(let i = 0; i < cadena.length; i++){ //la recorremos
        document.getElementById(cadena.charAt(i)).style.backgroundColor = "#000000"; // y pintamos las letras de negro , esto es para que cuando empiece la partida no se queden las letras marcadas de la anterior.
    }
    //Borramos canvas
    context.fill();
    // dibujamos y rellenamos un rectángulo
    context.fillStyle = "#FFFFFF";
    context.fillRect(260, 98, 150, 179);
    // rellenamos texto
}


/**
 * La función LeerObj() toma un objeto como argumento, crea una matriz, inserta las propiedades del objeto en la matriz,
 * genera un número aleatorio y luego establece la cookie en el valor de la propiedad en el índice
 * aleatorio.
 * @param objeto - el objeto que contiene los datos
 * @returns La posición de la película en la matriz.
 */
function leerObj(objeto){
    let array = [];
    for(const propiedad in objeto){
        array.push(propiedad)
    }
    const posicion = randomTitulos(array);
    document.cookie =  objeto[posicion]["titulo"];
    sessionStorage.setItem("numPeli", posicion); // guardamos ese número en la 
    return posicion;
}

/**
 * La función RandomTitulos() devuelve un elemento aleatorio de la lista de las películas/series.
 * @param lista - La lista de títulos de películas/series para elegir.
 * @returns título de película/serie aleatorio de la lista.
 */
function randomTitulos(lista){
    const titulo = lista[Math.floor(Math.random() * lista.length)];
    return titulo;
}