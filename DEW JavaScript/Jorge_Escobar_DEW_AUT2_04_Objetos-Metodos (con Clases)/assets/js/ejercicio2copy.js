/*

2. PIEDRAS, PAPEL, TIJERA (CON CLASES)

Vamos a crear un juego básico de Piedra, Papel y Tijera, donde se 
realizaran tiradas entre dos jugadores y gana la partida el que gane 3 tiradas:

Primero vamos a hacer que el juego sea random, es decir que la tirada de cada jugador 
sea aleatoria (por la máquina) para comprobar que todo es correcto y se escriben los partidas correctos.

Crearemos un objeto juego, que tenga como características las opciones 
(en este caso: Piedra, papel y tijera), los nombre de los jugadores, y los puntos que tiene cada jugador.

Y tendremos las siguientes funciones:

- preguntarNombre() - Preguntaremos el nombre del jugador/A

- numeroRandom() - Escogeremos una opción (p, p, t) random

- tiradaJugador() - mostraremos el valor de una tirada de un jugador

- imprimirpartidas(jugador1, jugador2) – Devuelve que jugador ha ganado

- evaluaTirada(tiradajugador1, tiradajugador2) – Devuelve cual de los dos jugadores ha ganado 
la tirada (piedra gana tijera, tijeras gana papel y papel gana piedra) y le da un punto al jugador ganador.

- juego() - Primero pedimos los nombres de los jugadores, y jugamos al mejor de 3.

*/

let partida = document.getElementById("partida");
let nombreJ1 = prompt("Escribe tu nombre");

class Juego{
    /**
     * Clase Juego
     * @param {*} jugador1 jugador 1
     * @param {*} jugador2 jugador 2
     * @param {*} opcionesJuego opciones del juego
     * @param {*} puntuacionJugador1 puntuación del jugador 1
     * @param {*} puntuacionJugador2 puntuación del jugador 2
     */
    constructor(jugador1, jugador2 = "CPU"){
        this.jugador1 = jugador1;
        this.jugador2 = jugador2;
        this.opcionesJuego = ["Piedra", "Papel", "Tijera", "Lagarto", "Spock"];
        this.puntuacionJugador1 = 0;
        this.puntuacionJugador2 = 0;
    }


    /**
     * Devuelve el nombre del jugador 1 y el nombre del jugador 2.
     * @returns El nombre del jugador 1 y el nombre del jugador 2.
     */
    preguntarNombre(){
        return partida.innerHTML = nombreJ1 + " vs " + this.jugador2;
    }
    
    /**
     * Genera un número aleatorio entre 0 y la longitud de la matriz, luego devuelve el valor de la
     * matriz en ese índice
     * @returns un número aleatorio entre 0 y 4.
     */
    numeroRandom(){
        let eleccionMaquina = parseInt(Math.floor(Math.random() * this.opcionesJuego.length));
        eleccionMaquina = this.opcionesJuego[eleccionMaquina];
        return eleccionMaquina;
    }
    
    /**
     * La función tiradaJugador() le pide al usuario que elija entre cinco opciones, y si el usuario no
     * elige una de las cinco opciones, le pide que elija de nuevo
     * @returns Eleccion del jugador.
     */
    tiradaJugador(){
        let eleccionJugador = prompt("Dime una eleccion: Piedra, Papel, Tijera, Lagarto, Spock");
        return eleccionJugador;
    }

    /**
     * Evalúa la elección del jugador y la elección de la computadora y asigna un punto al ganador
     * @param eleccionJugador - La elección del jugador.
     */
    evaluaTirada(eleccionJugador){
        switch(eleccionJugador){
            case "Piedra":
                if(eleccionJugador == "Piedra" && this.numeroRandom(2)){
                    this.puntuacionJugador1++;
                    document.getElementById("partida").innerHTML = "PUNTO para " + nombreJ1 + "!!!!";
                    break;
                }else if(eleccionJugador == "Piedra" && this.numeroRandom(3)){
                    this.puntuacionJugador1++;
                    document.getElementById("partida").innerHTML = "PUNTO para " + nombreJ1 + "!!!!";
                    break;
                }else if(eleccionJugador == "Piedra" && this.numeroRandom(0)){
                    document.getElementById("partida").innerHTML = "Misma opción = EMPATE!!!";
                    break;
                }else if(eleccionJugador == "Piedra" && this.numeroRandom(1)){
                    this.puntuacionJugador2++;
                    document.getElementById("partida").innerHTML = "PUNTO para " + this.jugador2 + "!!!!";
                    break;
                }else if(eleccionJugador == "Piedra" && this.numeroRandom(4)){
                    this.puntuacionJugador2++;
                    document.getElementById("partida").innerHTML = "PUNTO para " + this.jugador2 + "!!!!";
                    break;
                }
            case "Papel":
                if(eleccionJugador == "Papel" && this.numeroRandom(0)){
                    this.puntuacionJugador1++;
                    document.getElementById("partida").innerHTML = "PUNTO para " + nombreJ1 + "!!!!";
                    break;
                }else if(eleccionJugador == "Papel" && this.numeroRandom(4)){
                    this.puntuacionJugador1++;
                    document.getElementById("partida").innerHTML = "PUNTO para " + nombreJ1 + "!!!!";
                    break;
                }else if(eleccionJugador == "Papel" && this.numeroRandom(1)){
                    document.getElementById("partida").innerHTML = "Misma opción = EMPATE!!!";
                    break;
                }else if(eleccionJugador == "Papel" && this.numeroRandom(2)){
                    this.puntuacionJugador2++;
                    document.getElementById("partida").innerHTML = "PUNTO para " + this.jugador2 + "!!!!";
                    break;
                }else if(eleccionJugador == "Papel" && this.numeroRandom(3)){
                    this.puntuacionJugador2++;
                    document.getElementById("partida").innerHTML = "PUNTO para " + this.jugador2 + "!!!!";
                    break;
                }
            case "Tijera":
                if(eleccionJugador == "Tijera" && this.numeroRandom(1)){
                    this.puntuacionJugador1++;
                    document.getElementById("partida").innerHTML = "PUNTO para " + nombreJ1 + "!!!!";
                    break;
                }else if(eleccionJugador == "Tijera" && this.numeroRandom(3)){
                    this.puntuacionJugador1++;
                    document.getElementById("partida").innerHTML = "PUNTO para " + nombreJ1 + "!!!!"
                    break;
                }else if(eleccionJugador == "Tijera" && this.numeroRandom(2)){
                    document.getElementById("partida").innerHTML = "Misma opción = EMPATE!!!";
                    break;
                }else if(eleccionJugador == "Tijera" && this.numeroRandom(0)){
                    this.puntuacionJugador2++;
                    document.getElementById("partida").innerHTML = "PUNTO para " + this.jugador2 + "!!!!";
                    break;
                }else if(eleccionJugador == "Tijera" && this.numeroRandom(4)){
                    this.puntuacionJugador2++;
                    document.getElementById("partida").innerHTML = "PUNTO para " + this.jugador2 + "!!!!";
                    break;
                }
            case "Lagarto":
                if(eleccionJugador == "Lagarto" && this.numeroRandom(4)){
                    this.puntuacionJugador1++;
                    document.getElementById("partida").innerHTML = "PUNTO para " + nombreJ1 + "!!!!";
                    break;
                }else if(eleccionJugador == "Lagarto" && this.numeroRandom(1)){
                    this.puntuacionJugador1++;
                    document.getElementById("partida").innerHTML = "PUNTO para " + nombreJ1 + "!!!!";
                    break;
                }else if(eleccionJugador == "Lagarto" && this.numeroRandom(3)){
                    document.getElementById("partida").innerHTML = "Misma opción = EMPATE!!!";
                    break;
                }else if(eleccionJugador == "Lagarto" && this.numeroRandom(0)){
                    this.puntuacionJugador2++;
                    document.getElementById("partida").innerHTML = "PUNTO para " + this.jugador2 + "!!!!";
                    break;
                }else if(eleccionJugador == "Lagarto" && this.numeroRandom(2)){
                    this.puntuacionJugador2++;
                    document.getElementById("partida").innerHTML = "PUNTO para " + this.jugador2 + "!!!!";
                    break;
                }
            case "Spock":
                if(eleccionJugador == "Spock" && this.numeroRandom(2)){
                    this.puntuacionJugador1++;
                    document.getElementById("partida").innerHTML = "PUNTO para " + nombreJ1 + "!!!!";
                    break;
                }else if(eleccionJugador == "Spock" && this.numeroRandom(0)){
                    this.puntuacionJugador1++;
                    document.getElementById("partida").innerHTML = "PUNTO para " + nombreJ1 + "!!!!";
                    break;
                }else if(eleccionJugador == "Spock" && this.numeroRandom(4)){
                    document.getElementById("partida").innerHTML = "Misma opción = EMPATE!!!";
                    break;
                }else if(eleccionJugador == "Spock" && this.numeroRandom(1)){
                    this.puntuacionJugador2++;
                    document.getElementById("partida").innerHTML = "PUNTO para " + this.jugador2 + "!!!!";
                    break;
                }else if(eleccionJugador == "Spock" && this.numeroRandom(3)){
                    this.puntuacionJugador2++;
                    document.getElementById("partida").innerHTML = "PUNTO para " + this.jugador2 + "!!!!";
                    break;
                }
            }
        }
        /**
         * Esta función imprime el resultado del juego.
         */
        imprimirResultado(){
            let rondas = 0;
            document.getElementById("partida");
            do{
                let eleccionJugador = this.tiradaJugador();
                let eleccionMaquina = this.numeroRandom();
                document.getElementById("partida").innerHTML += "<br/> Ronda " + rondas;
                document.getElementById("partida").innerHTML += "<br/> " + nombreJ1 + ": " + eleccionJugador + " <br/>" + this.jugador2 + ": " + eleccionMaquina;
                document.getElementById("partida").innerHTML += "<br/> " + this.evaluaTirada(eleccionJugador, eleccionMaquina);
                document.getElementById("partida").innerHTML += "<br/> PUNTO para " + (nombreJ1 || this.jugador2);
                document.getElementById("partida").innerHTML += "<br/> Puntuación: <br/> " + nombreJ1 + " " + this.puntuacionJugador1 + " - " +  this.puntuacionJugador2 + " " + this.jugador2 +"<br/>";
                rondas++;
            }while(this.puntuacionJugador1 != 2 && this.puntuacionJugador2 !=2)
        }
}

/**
 * La función partidaJuego() crea una nueva instancia de la clase Juego, pregunta al jugador por su
 * nombre, genera un número aleatorio, pregunta al jugador por su suposición, evalúa la suposición e
 * imprime el resultado
 */
function partidaJuego(){
    const juego = new Juego();
    juego.preguntarNombre() + "<br/>";
    juego.numeroRandom();
    juego.tiradaJugador();
    juego.evaluaTirada();
    juego.imprimirResultado();
}