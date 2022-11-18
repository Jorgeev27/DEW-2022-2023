/* Obtiene los elementos del archivo HTML. */
let intentosJugadores = document.getElementById("intentosJugadores");
let ahorcado = document.getElementById("ahorcado");
let formLetraUsuario = document.getElementById("formLetraUsuario");
let letraUsuario = document.getElementById("letraUsuario");
let enviarLetra = document.getElementById("enviarLetra");


class Juego{
    /* Declarando las variables. */
    peliculasSeries;
    jugadores;
    vidas;

    /**
     * Una función constructora de la clase Juego.
     * @param peliculasSeries - Se trata de una matriz de objetos que contienen la información de las
     * películas y series que se utilizarán en el juego.
     * @param jugadores - número de jugadores en la partida
     * @param vidas - número de vidas
     */
    constructor(peliculasSeries, jugadores, vidas){
        this.peliculasSeries = peliculasSeries;
        this.jugadores = jugadores;
        this.vidas = vidas;
    }


    //GETTER Y SETTER DE PELICULASSERIES
    get getPeliculasSeries(){
        return this.peliculasSeries;
    }

    set setPeliculasSeries(peliculasSeries){
        this.peliculasSeries = peliculasSeries;
    }

    //GETTER Y SETTER DE JUGADORES
    get getJugadores(){
        return this.jugadores;
    }

    set setJugadores(jugadores){
        this.jugadores = jugadores;
    }

    //GETTER Y SETTER DE VIDAS
    get getVidas(){
        return this.vidas;
    }

    set setVidas(vidas){
        this.vidas = vidas;
    }
}