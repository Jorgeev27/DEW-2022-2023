/*

2. PIEDRAS, PAPEL, TIJERA (CON CLASES)

Vamos a crear un juego básico de Piedra, Papel y Tijera, donde se 
realizaran tiradas entre dos jugadores y gana la partida el que gane 3 tiradas:

Primero vamos a hacer que el juego sea random, es decir que la tirada de cada jugador 
sea aleatoria (por la máquina) para comprobar que todo es correcto y se escriben los resultados correctos.

Crearemos un objeto juego, que tenga como características las opciones 
(en este caso: Piedra, papel y tijera), los nombre de los jugadores, y los puntos que tiene cada jugador.

Y tendremos las siguientes funciones:

- preguntarNombre() - Preguntaremos el nombre del jugador/A

- numeroRandom() - Escogeremos una opción (p, p, t) random

- tiradaJugador() - mostraremos el valor de una tirada de un jugador

- imprimirResultados(jugador1, jugador2) – Devuelve que jugador ha ganado

- evaluaTirada(tiradajugador1, tiradajugador2) – Devuelve cual de los dos jugadores ha ganado 
la tirada (piedra gana tijera, tijeras gana papel y papel gana piedra) y le da un punto al jugador ganador.

- juego() - Primero pedimos los nombres de los jugadores, y jugamos al mejor de 3.

*/

let piedraPTLS = document.getElementById("piedraPTLS");

class Juego{
    /**
     * Clase Juego
     * @param {*} numeroJugadores número de jugadores en la partida
     * @param {*} jugador1 jugador 1
     * @param {*} jugador2 jugador 2
     * @param {*} opcionesJuego opciones del juego
     * @param {*} puntuacionJugador1 puntuación del jugador 1
     * @param {*} puntuacionJugador2 puntuación del jugador 2
     * @param {*} tiradaJugador1 tirada del jugador 1
     * @param {*} tiradaJugador2 tirada del jugador 2
     */
    constructor(numeroJugadores, jugador1, jugador2){
        this.numeroJugadores = numeroJugadores;
        this.jugador1 = jugador1;
        this.jugador2 = jugador2;
        this.opcionesJuego = ["Piedra", "Papel", "Tijera", "Lagarto", "Spock"];
        this.puntuacionJugador1 = null;
        this.puntuacionJugador2 = null;
        this.tiradaJugador1 = null;
        this.tiradaJugador2 = null;
    }


    /**
    * Función que le pregunta al usuario la cantidad de jugadores y luego sus nombres.
    * @param numeroJugadores - Número de jugadores
    * @returns el numero de jugadores
    */
    preguntarNombre(numeroJugadores){
        this.numeroJugadores = prompt("Inserte numero de jugadores");
        if(isNaN(numeroJugadores)){ //Si no se ha insertado un carácter no especificado
            this.numeroJugadores = parseInt(prompt("ERROR!!! Inserta numero de jugadores correspondientes: 1 o 2")); //ERROR!! Solo numero: 1 o 2
        }else if(numeroJugadores == 1){ //Si es 1
            this.jugador1 = prompt("Escribe tu nombre");
            this.jugador2 = "CPU"; //Jugador 2 será CPU
        }else if(numeroJugadores == 2){ //Si son 2
            this.jugador1 = prompt("Escribe tu nombre jugador 1");
            this.jugador2 = prompt("Escribe tu nombre jugador 2");
        }
        return numeroJugadores;
    }


    /**
     * Función que genera un número aleatorio entre 0 y la longitud de las opciones del juego.
     * @returns un número aleatorio de las opciones del juego.
     */
    numeroRandom(){
        let tiradaJugadores = parseInt(Math.floor(Math.random() * this.opcionesJuego.length));
        tiradaJugadores = this.opcionesJuego[tiradaJugadores];
        return tiradaJugadores;
    }

    /**
     * Función que genera lo que ha sacado el jugador 1 y jugador 2
     * @returns el valor de las tiradas del jugador 1 y jugador 2
     */
    tiradaJugador(){
        piedraPTLS.innerHTML = "El jugador 1: " + this.jugador1 + " ha sacado: " + this.tiradaJugador1;
        piedraPTLS.innerHTML = "El jugador 2: " + this.jugador2 + " ha sacado: " + this.tiradaJugador2;
        return this.tiradaJugador1, this.tiradaJugador2;
    }

    /**
     * Función que muestra la puntuación del jugador 1 y jugador 2
     * @param puntuacionJugador1 - La puntuación del jugador 1
     * @param puntuacionJugador2 - La puntuación del jugador 2
     */
    imprimirResultados(puntuacionJugador1, puntuacionJugador2){
        if(puntuacionJugador1 > puntuacionJugador2){
            piedraPTLS.innerHTML = "El jugador: " + this.jugador1 + " ha hecho " + puntuacionJugador1 + " puntos y ha ganado la partida!!!!!";
        }else if(puntuacionJugador2 > puntuacionJugador1){
            piedraPTLS.innerHTML = "El jugador: " + this.jugador2 + " ha hecho " + puntuacionJugador2 + " puntos y ha ganado la partida!!!!!";
        }else if (puntuacionJugador1 == puntuacionJugador2){
            piedraPTLS.innerHTML = "Habéis quedado empate con: " + puntuacionJugador1 + " y " + puntuacionJugador2 + " puntos";
        }
        return puntuacionJugador1, puntuacionJugador2;
    }

    /**
     * Función que devuelve cuál de los 2 jugadores ha ganado la ronda y se le suma 1 punto de ésta al ganador
     * @param {*} tiradaJugador1 tirada del jugador 1
     * @param {*} tiradaJugador2 tirada del jugador 2
     * @returns la tirada del jugador 1 y 2
     */
    evaluaTirada(tiradaJugador1, tiradaJugador2){
        switch(this.tiradaJugador1){ //Switch de la opción de tiradas del jugador 1
            case "Piedra": //Caso Piedra
                if(this.tiradaJugador2 == "Tijera"){
                    this.puntuacionJugador1++;
                    piedraPTLS.innerHTML = "PUNTO para el jugador 1!!!!";
                    piedraPTLS.innerHTML = this.jugador1 + " " + this.puntuacionJugador1 + " - " + this.puntuacionJugador2 + " " + this.jugador2;
                    break;
                }else if(this.tiradaJugador2 == "Lagarto"){
                    this.puntuacionJugador1++;
                    piedraPTLS.innerHTML = "PUNTO para el jugador 1!!!!";
                    piedraPTLS.innerHTML = this.jugador1 + " " + this.puntuacionJugador1 + " - " + this.puntuacionJugador2 + " " + this.jugador2;
                    break;
                }else if(this.tiradaJugador2 == "Piedra"){
                    piedraPTLS.innerHTML = "Misma opción = EMPATE!!!";
                    piedraPTLS.innerHTML = this.jugador1 + " " + this.puntuacionJugador1 + " - " + this.puntuacionJugador2 + " " + this.jugador2;
                    break;
                }else if(this.tiradaJugador2 == "Papel" || this.tiradaJugador2 == "Spock"){
                    this.puntuacionJugador2++;
                    piedraPTLS.innerHTML = "PUNTO para el jugador 2!!!!";
                    piedraPTLS.innerHTML = this.jugador1 + " " + this.puntuacionJugador1 + " - " + this.puntuacionJugador2 + " " + this.jugador2;
                    break;
                }
            case "Papel": //Caso Papel
                if(this.tiradaJugador2 == "Piedra"){
                    this.puntuacionJugador1++;
                    piedraPTLS.innerHTML = "PUNTO para el jugador 1!!!!";
                    piedraPTLS.innerHTML = this.jugador1 + " " + this.puntuacionJugador1 + " - " + this.puntuacionJugador2 + " " + this.jugador2;
                    break;
                }else if(this.tiradaJugador2 == "Spock"){
                    this.puntuacionJugador1++;
                    piedraPTLS.innerHTML = "PUNTO para el jugador 1!!!!";
                    piedraPTLS.innerHTML = this.jugador1 + " " + this.puntuacionJugador1 + " - " + this.puntuacionJugador2 + " " + this.jugador2;
                    break;
                }else if(this.tiradaJugador2 == "Papel"){
                    piedraPTLS.innerHTML = "Misma opción = EMPATE!!!";
                    piedraPTLS.innerHTML = this.jugador1 + " " + this.puntuacionJugador1 + " - " + this.puntuacionJugador2 + " " + this.jugador2;
                    break;
                }else if(this.tiradaJugador2 == "Tijera" || this.tiradaJugador2 == "Lagarto"){
                    this.puntuacionJugador2++;
                    piedraPTLS.innerHTML = "PUNTO para el jugador 2!!!!";
                    piedraPTLS.innerHTML = this.jugador1 + " " + this.puntuacionJugador1 + " - " + this.puntuacionJugador2 + " " + this.jugador2;
                    break;
                }
            case "Tijera": //Caso Tijera
                if(this.tiradaJugador2 == "Papel"){
                    this.puntuacionJugador1++;
                    piedraPTLS.innerHTML = "PUNTO para el jugador 1!!!!";
                    piedraPTLS.innerHTML = this.jugador1 + " " + this.puntuacionJugador1 + " - " + this.puntuacionJugador2 + " " + this.jugador2;
                    break;
                }else if(this.tiradaJugador2 == "Lagarto"){
                    this.puntuacionJugador1++;
                    piedraPTLS.innerHTML = "PUNTO para el jugador 1!!!!";
                    piedraPTLS.innerHTML = this.jugador1 + " " + this.puntuacionJugador1 + " - " + this.puntuacionJugador2 + " " + this.jugador2;
                    break;
                }else if(this.tiradaJugador2 == "Tijera"){
                    piedraPTLS.innerHTML = "Misma opción = EMPATE!!!";
                    piedraPTLS.innerHTML = this.jugador1 + " " + this.puntuacionJugador1 + " - " + this.puntuacionJugador2 + " " + this.jugador2;
                    break;
                }else if(this.tiradaJugador2 == "Piedra" || this.tiradaJugador2 == "Spock"){
                    this.puntuacionJugador2++;
                    piedraPTLS.innerHTML = "PUNTO para el jugador 2!!!!";
                    piedraPTLS.innerHTML = this.jugador1 + " " + this.puntuacionJugador1 + " - " + this.puntuacionJugador2 + " " + this.jugador2;
                    break;
                }
            case "Lagarto": //Caso Lagarto
                if(this.tiradaJugador2 == "Spock"){
                    this.puntuacionJugador1++;
                    piedraPTLS.innerHTML = "PUNTO para el jugador 1!!!!";
                    piedraPTLS.innerHTML = this.jugador1 + " " + this.puntuacionJugador1 + " - " + this.puntuacionJugador2 + " " + this.jugador2;
                    break;
                }else if(this.tiradaJugador2 == "Papel"){
                    this.puntuacionJugador1++;
                    piedraPTLS.innerHTML = "PUNTO para el jugador 1!!!!";
                    piedraPTLS.innerHTML = this.jugador1 + " " + this.puntuacionJugador1 + " - " + this.puntuacionJugador2 + " " + this.jugador2;
                    break;
                }else if(this.tiradaJugador2 == "Lagarto"){
                    piedraPTLS.innerHTML = "Misma opción = EMPATE!!!";
                    piedraPTLS.innerHTML = this.jugador1 + " " + this.puntuacionJugador1 + " - " + this.puntuacionJugador2 + " " + this.jugador2;
                    break;
                }else if(this.tiradaJugador2 == "Piedra" || this.tiradaJugador2 == "Tijera"){
                    this.puntuacionJugador2++;
                    piedraPTLS.innerHTML = "PUNTO para el jugador 2!!!!";
                    piedraPTLS.innerHTML = this.jugador1 + " " + this.puntuacionJugador1 + " - " + this.puntuacionJugador2 + " " + this.jugador2;
                    break;
                }
            case "Spock": //Caso Spock
                if(this.tiradaJugador2 == "Tijera"){
                    this.puntuacionJugador1++;
                    piedraPTLS.innerHTML = "PUNTO para el jugador 1!!!!";
                    piedraPTLS.innerHTML = this.jugador1 + " " + this.puntuacionJugador1 + " - " + this.puntuacionJugador2 + " " + this.jugador2;
                    break;
                }else if(this.tiradaJugador2 == "Piedra"){
                    this.puntuacionJugador1++;
                    piedraPTLS.innerHTML = "PUNTO para el jugador 1!!!!";
                    piedraPTLS.innerHTML = this.jugador1 + " " + this.puntuacionJugador1 + " - " + this.puntuacionJugador2 + " " + this.jugador2;
                    break;
                }else if(this.tiradaJugador2 == "Spock"){
                    piedraPTLS.innerHTML = "Misma opción = EMPATE!!!";
                    piedraPTLS.innerHTML = this.jugador1 + " " + this.puntuacionJugador1 + " - " + this.puntuacionJugador2 + " " + this.jugador2;
                    break;
                }else if(this.tiradaJugador2 == "Papel" || this.tiradaJugador2 == "Lagarto"){
                    this.puntuacionJugador2++;
                    piedraPTLS.innerHTML = "PUNTO para el jugador 2!!!!";
                    piedraPTLS.innerHTML = this.jugador1 + " " + this.puntuacionJugador1 + " - " + this.puntuacionJugador2 + " " + this.jugador2;
                    break;
                }
                return tiradaJugador1, tiradaJugador2;
        }
    }
}

/**
 * Función que inicia el juego
 */
function iniciarPartida(){
    
}