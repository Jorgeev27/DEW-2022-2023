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

/**
 * EL PROGRAMA SE EJECUTA PERO EL PROBLEMA ES QUE ME SUMA LOS PUNTOS A MI SOLAMENTE.
 * ESTUVE TOCANDO COSAS DEL CODIGO Y NO HA SIDO POSIBLE ENCONTRAR EL ERROR.
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
     * Genera un número aleatorio entre 0 y 4, luego devuelve la cadena correspondiente de la matriz
     * @returns un número aleatorio entre 0 y 4.
     */
    numeroRandom(){
        let eleccionMaquina = parseInt(Math.floor(Math.random() * this.opcionesJuego.length));
        eleccionMaquina = this.opcionesJuego[eleccionMaquina];
        return eleccionMaquina;
    }


    /**
     * La función tiradaJugador() le pide al usuario que elija entre cinco opciones y devuelve la
     * elección del usuario
     * @returns eleccionJugador.
     */
    tiradaJugador(){
        let eleccionJugador = prompt("Dime una eleccion: Piedra, Papel, Tijera, Lagarto, Spock");
        return eleccionJugador;
    }


    /**
     * Evalúa la elección del jugador y la compara con la elección de la computadora, y dependiendo del
     * resultado, agregará un punto al jugador o a la computadora.
     * @param eleccionJugador - La elección del jugador.
     */
    evaluaTirada(eleccionJugador){
        switch(eleccionJugador){
            case "Piedra":
                if(this.numeroRandom(2)){
                    this.puntuacionJugador1++;
                    partida.innerHTML = "PUNTO para " + nombreJ1 + "!!!!";
                    break;
                }else if(this.numeroRandom(3)){
                    this.puntuacionJugador1++;
                    partida.innerHTML = "PUNTO para " + nombreJ1 + "!!!!";
                    break;
                }else if(this.numeroRandom(0)){
                    partida.innerHTML = "Misma opción = EMPATE!!!";
                    break;
                }else if(this.numeroRandom(1) || this.numeroRandom(4)){
                    this.puntuacionJugador2++;
                    partida.innerHTML = "PUNTO para " + this.jugador2 + "!!!!";
                    break;
                }
            case "Papel":
                if(this.numeroRandom(0)){
                    this.puntuacionJugador1++;
                    partida.innerHTML = "PUNTO para " + nombreJ1 + "!!!!";
                    break;
                }else if(this.numeroRandom(4)){
                    this.puntuacionJugador1++;
                    partida.innerHTML = "PUNTO para " + nombreJ1 + "!!!!";
                    break;
                }else if(this.numeroRandom(1)){
                    partida.innerHTML = "Misma opción = EMPATE!!!";
                    break;
                }else if(this.numeroRandom(2) || this.numeroRandom(3)){
                    this.puntuacionJugador2++;
                    partida.innerHTML = "PUNTO para " + this.jugador2 + "!!!!";
                    break;
                }
            case "Tijera":
                if(this.numeroRandom(1)){
                    this.puntuacionJugador1++;
                    partida.innerHTML = "PUNTO para " + nombreJ1 + "!!!!";
                    break;
                }else if(this.numeroRandom(3)){
                    this.puntuacionJugador1++;
                    partida.innerHTML = "PUNTO para " + nombreJ1 + "!!!!"
                    break;
                }else if(this.numeroRandom(2)){
                    partida.innerHTML = "Misma opción = EMPATE!!!";
                    break;
                }else if(this.numeroRandom(0) || this.numeroRandom(4)){
                    this.puntuacionJugador2++;
                    partida.innerHTML = "PUNTO para " + this.jugador2 + "!!!!";
                    break;
                }
            case "Lagarto":
                if(this.numeroRandom(4)){
                    this.puntuacionJugador1++;
                    partida.innerHTML = "PUNTO para " + nombreJ1 + "!!!!";
                    break;
                }else if(this.numeroRandom(1)){
                    this.puntuacionJugador1++;
                    partida.innerHTML = "PUNTO para " + nombreJ1 + "!!!!";
                    break;
                }else if(this.numeroRandom(3)){
                    partida.innerHTML = "Misma opción = EMPATE!!!";
                    break;
                }else if(this.numeroRandom(0) || this.numeroRandom(2)){
                    this.puntuacionJugador2++;
                    partida.innerHTML = "PUNTO para " + this.jugador2 + "!!!!";
                    break;
                }
            case "Spock":
                if(this.numeroRandom(2)){
                    this.puntuacionJugador1++;
                    partida.innerHTML = "PUNTO para " + nombreJ1 + "!!!!";
                    break;
                }else if(this.numeroRandom(0)){
                    this.puntuacionJugador1++;
                    partida.innerHTML = "PUNTO para " + nombreJ1 + "!!!!";
                    break;
                }else if(this.numeroRandom(4)){
                    partida.innerHTML = "Misma opción = EMPATE!!!";
                    break;
                }else if(this.numeroRandom(1) || this.numeroRandom(3)){
                    this.puntuacionJugador2++;
                    partida.innerHTML = "PUNTO para " + this.jugador2 + "!!!!";
                    break;
                }
            }
        }


        /**
         * Esta función imprime el resultado del juego.
         */
        imprimirResultado(){
            let rondas = 1;
            do{
                let eleccionJugador = this.tiradaJugador();
                let eleccionMaquina = this.numeroRandom();
                partida.innerHTML += "<br/> Ronda " + rondas + ":";
                partida.innerHTML += "<br/> El jugador 1:  " + nombreJ1 + " ha sacado " + eleccionJugador;
                partida.innerHTML += "<br/> El jugador 2:  " + this.jugador2 + " ha sacado " + eleccionMaquina;
                partida.innerHTML += "<br/> " + this.evaluaTirada(eleccionJugador);
                partida.innerHTML += "<br/> PUNTO para " + nombreJ1 || eleccionMaquina;
                partida.innerHTML += "<br/> Puntuación: <br/> " + nombreJ1 + " " + this.puntuacionJugador1 + " - " +  this.puntuacionJugador2 + " " + this.jugador2 +"<br/>";
                rondas++;
            }while(this.puntuacionJugador1 != 2 && this.puntuacionJugador2 !=2)
        }
}


/**
 * La función partidaJuego() crea un nuevo juego, pregunta el nombre del jugador, genera un número
 * aleatorio, evalúa la suposición del jugador e imprime el resultado
 */
function partidaJuego(){
    const juego = new Juego();
    juego.preguntarNombre();
    juego.numeroRandom();
    juego.evaluaTirada();
    juego.imprimirResultado();
}