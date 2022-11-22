/*
let formLetraUsuario = document.getElementById("formLetraUsuario");
let letraUsuario = document.getElementById("letraUsuario");
const enviarLetra = document.querySelector("#enviarLetra");
let mostrarPeliculaSerie = document.getElementById("mostrarPeliculaSerie");

enviarLetra.addEventListener("click", fetchPeliculasSeries);
const url = '../json/peliculasSeries.json';

onload = () =>{
    
}

function fetchPeliculasSeries(){
    fetch(url)
    .then(res => res.json())
    .then(data =>{
        console.log(data);
    })
    .catch((error) =>{
        console.error(error);
    })
}

*/

class PeliculaSerie{
    /* Declarando las variables. */
    id;
    nombre;
    director;
    clasificacion;
    anio;
    actores;
    sinopsis;

    /**
     * Constructor para la clase PeliculaSerie.
     * @param id - La identificación de la película/serie.
     * @param nombre - El nombre de la película/serie.
     * @param director - El director de la película/serie.
     * @param clasificacion - La película/serie contiene: Acción, Comedia, Drama...
     * @param anio - Año de la pelicula/serie.
     * @param actores - Actores de la película/serie.
     * @param sinopsis - Una breve descripción de la película/serie.
     */
    constructor(id, nombre, director, clasificacion, anio, actores, sinopsis){
        this.id = id;
        this.nombre = nombre;
        this.director = director;
        this.clasificacion = clasificacion;
        this.anio = anio;
        this.actores = actores;
        this.sinopsis = sinopsis;
    }


    //GETTER Y SETTER DE ID.
    get getId(){
        return this.id;
    }

    set setId(id){
        this.id = id;
    }

    //GETTER Y SETTER DE NOMBRE.
    get getNombre(){
        return this.nombre;
    }

    set setNombre(nombre){
        this.nombre = nombre;
    }

    //GETTER Y SETTER DE DIRECTOR.
    get getDirector(){
        return this.director;
    }

    set setDirector(director){
        this.director = director;
    }

    //GETTER Y SETTER DE CLASIFICACIÓN.
    get getClasficacion(){
        return this.clasificacion;
    }

    set setclasificacion(clasificacion){
        this.clasificacion = clasificacion;
    }

    //GETTER Y SETTER DE ANIO.
    get getAnio(){
        return this.anio;
    }

    set setAnio(anio){
        this.anio = anio;
    }

    //GETTER Y SETTER DE ACTORES.
    get getActores(){
        return this.actores;
    }

    set setActores(actores){
        this.actores = actores;
    }

    //GETTER Y SETTER DE SINOPSIS.
    get getSinopsis(){
        return this.sinopsis;
    }

    set setSinopsis(sinopsis){
        this.sinopsis = sinopsis;
    }
}

/* Esperar a que se cargue el DOM antes de ejecutar el código. */
document.addEventListener('DOMContentLoaded', function () {

    /* Declarar variables y asignarlas a los elementos DOM. */
    const listaPalabras = ['Alien', 'StarWars Clone Wars', 'CorredorDelLaberinto', 'TheGoodDoctor', 'SesentaSegundos', 'JuegoDeTronos'];
    let palabraAdivinar = [];
    let palabraMostrar = [];
    let historialLetrasUsuario = [];
    let numIntentos = 5;
    let nodoLetra = document.querySelector('#letra');
    let nodoBoton = document.querySelector('#boton');
    let nodoResultado = document.querySelector('#resultado');
    let nodoIntentos = document.querySelector('#intentos');
    let nodoHistorial = document.querySelector('#historial');

    /**
     * Toma una palabra aleatoria de la lista de palabras, la divide en letras y luego agrega un guión
     * bajo para cada letra.
     */
    function prepararJuego () {
        let posAleatoriaListaPalabras = _.random(listaPalabras.length - 1);
        let palabraAleatoria = listaPalabras[posAleatoriaListaPalabras];
        palabraAdivinar = palabraAleatoria.split('');
        for (let letra of palabraAdivinar) {
            palabraMostrar.push('_');
        }
        dibujarJuego();
    }

    
    /**
     * La función dibujarJuego() actualiza los elementos HTML con los valores actuales de las variables
     */
    function dibujarJuego () {
        nodoResultado.textContent = palabraMostrar.join(' ');
        nodoIntentos.textContent = numIntentos;
        nodoHistorial.textContent = historialLetrasUsuario.join(' ');
    }

    
    /**
     * Comprueba si la letra que ha introducido el usuario está en la palabra a adivinar y, en caso
     * afirmativo, sustituye el guión bajo correspondiente por la letra. Si no es así, reduce el número
     * de intentos en uno y agrega la letra a la lista de letras que el usuario ya ha intentado.
     */
    function comprobarLetraUsuario () {
        let letraUsuario = nodoLetra.value;
        nodoLetra.value = '';
        nodoLetra.focus();
        for (const [posicion, letraAdivinar] of palabraAdivinar.entries()) {
            if (letraUsuario == letraAdivinar) {
                palabraMostrar[posicion] = letraAdivinar;
            }
        }
        if (!palabraAdivinar.includes(letraUsuario)) {
            numIntentos -= 1;
            historialLetrasUsuario.push(letraUsuario);
        }
        acabarJuego();
        dibujarJuego();
    }

    
    /**
     * Comprueba si la tecla presionada es la tecla Enter, y si lo es, llama a la función que verifica
     * la letra que el usuario ha ingresado.
     * @param evento - El objeto de evento.
     */
    function comprobarPulsadoEnter (evento) {
        if (evento.code == 'Enter') {
            comprobarLetraUsuario();
        }
    }

    
    /**
     * Esta función comprueba si el jugador ha ganado o perdido el juego
     */
    function acabarJuego () {
        if (!palabraMostrar.includes('_')) {
            alert('Has ganado!!!');
            location.reload(true);
        }
        if (numIntentos == 0) {
            alert('Has Perdido!!! Era: ' + palabraAdivinar.join(''));
            location.reload(true);
        }
    }

    // Al hacer clic en el boton se llama la funcion comprobarLetraUsuario
    nodoBoton.addEventListener('click', comprobarLetraUsuario);
    // Al hacer Enter con el teclado se llama a la funcion comprobarLetraUsuario
    nodoLetra.addEventListener('keyup', comprobarPulsadoEnter);
    prepararJuego(); 
});