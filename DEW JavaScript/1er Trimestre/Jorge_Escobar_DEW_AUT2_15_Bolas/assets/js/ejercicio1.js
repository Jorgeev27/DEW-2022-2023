/* Obtener el elemento canvas y la dimensión a la que queremos mostrar la bola. */
let bolaRebotando = document.getElementById("bolaRebotando");
let dimensionCanvasBola = bolaRebotando.getContext("2d");

class Bola {
    /* Declarar las variables que se utilizarán en la clase Bola. */
    coordenadaX;
    coordenadaY;
    velocidadX;
    velocidadY;
    color;
    tamanio;

    /**
     * La función constructora se usa para crear nuevos objetos.
     * @param coordenadaX - La coordenada x de la pelota.
     * @param coordenadaY - La coordenada Y de la pelota.
     * @param velocidadX - La velocidad de la pelota en el eje X.
     * @param velocidadY - La velocidad de la pelota en el eje Y.
     * @param color - El color de la pelota.
     * @param tamanio - El tamaño de la pelota.
     */
    constructor(coordenadaX, coordenadaY, velocidadX, velocidadY, color, tamanio) {
        this.coordenadaX = coordenadaX;
        this.coordenadaY = coordenadaY;
        this.velocidadX = velocidadX;
        this.velocidadY = velocidadY;
        this.color = color;
        this.tamanio = tamanio;
    }

    /**
     * GETTER Y SETTER DE LA COORDENADA X DE LA BOLA
     */
    get getCoordenadaX() {
        return this.coordenadaX;
    }

    set setCoordenadaX(coordenadaX) {
        this.coordenadaX = coordenadaX;
    }

    /**
     * GETTER Y SETTER DE LA COORDENADA Y DE LA BOLA
     */
    get getCoordenadaY() {
        return this.coordenadaY;
    }

    set setCoordenadaY(coordenadaY) {
        this.coordenadaY = coordenadaY;
    }

    /**
     * GETTER Y SETTER DE LA VELOCIDAD X DE LA BOLA
     */
    get getVelocidadX() {
        return this.velocidadX;
    }

    set setVelocidadX(velocidadX) {
        this.velocidadX = velocidadX;
    }

    /**
     * GETTER Y SETTER DE LA VELOCIDAD Y DE LA BOLA
     */
    get getVelocidadY() {
        return this.velocidadY;
    }

    set setVelocidadY(velocidadY) {
        this.velocidadY = velocidadY;
    }

    /**
     * GETTER Y SETTER DEL COLOR DE LA BOLA
     */
    get getColor() {
        return this.color;
    }

    set setColor(color) {
        this.color = color;
    }

    /**
     * GETTER Y SETTER DEL TAMAÑO DE LA BOLA
     */
    get getTamanio() {
        return this.tamanio;
    }

    set setTamanio(tamanio) {
        this.tamanio = tamanio;
    }
}

/* Creando un nuevo objeto de la clase Bola y asignando los valores a las variables. */
let bola = new Bola(10, 10, 6, -3, 'FF0000', 10);
let coordenadaXBola = bola.coordenadaX;
let coordenadaYBola = bola.coordenadaY;
let velocidadXBola = bola.velocidadX;
let velocidadYBola = bola.velocidadY;
let colorBola = bola.color;
let tamanioBola = bola.tamanio;
bolaRebotando.width = window.innerWidth;
bolaRebotando.height = window.innerHeight;
let bolas = [];

/* Creando un array con los colores que tendrá la pelota cuando golpee la pared. */
let coloresRandom = ["#1ee76d","#494006","#27afa4","#3680a4","#f4b5ba","#b2e25c","#f89d54","#14ed12","#334ac3","#cf9de1"];


/**
 * Genera un numero aleatorio entre 0 y el tamaño del array coloresRandom.
 * @returns un número aleatorio entre 0 y la longitud del array.
 */
function colores(){
    let randomColores = Math.floor(Math.random()*coloresRandom.length);
    return randomColores;
}

/**
 * Dibuja un círculo con las coordenadas, el tamaño y el color dados.
 */
function dibujarBola(){
    dimensionCanvasBola.beginPath();
    dimensionCanvasBola.arc(coordenadaXBola, coordenadaYBola, tamanioBola, 0, Math.PI*2);
    dimensionCanvasBola.fillStyle = colorBola;
    dimensionCanvasBola.fill();
    dimensionCanvasBola.closePath();
}

/**
 * Verifica si la pelota toca la pared derecha o izquierda y si toca
 * la pared inferior o superior. Luego, le agrega velocidad a la posición.
 */
function dibujarMoverBola() {
    dimensionCanvasBola.clearRect(0,0, bolaRebotando.width, bolaRebotando.height);
    dibujarBola();

    /* Si la pelota está tocando el lado derecho de la pared. Si es así, invierte la
    dirección de la pelota y cambia el color. */
    if(coordenadaXBola + velocidadXBola > bolaRebotando.width - tamanioBola){
        velocidadXBola = -velocidadXBola;
        colorBola = coloresRandom[colores()];
    }else if(coordenadaXBola + velocidadXBola < tamanioBola){
        velocidadXBola = -velocidadXBola;
        colorBola = coloresRandom[colores()];
    }

    /* Si la pelota está tocando el fondo del suelo. Si es así, invierte la
    dirección de la pelota y cambia el color. */
    if(coordenadaYBola + velocidadYBola > bolaRebotando.height - tamanioBola) {
        velocidadYBola = -velocidadYBola;
        colorBola = coloresRandom[colores()];
    }else if(coordenadaYBola + velocidadYBola < tamanioBola){
        velocidadYBola = -velocidadYBola;
        colorBola = coloresRandom[colores()];
    }

    /* Esto es agregar la velocidad a la posición. */
    coordenadaXBola += velocidadXBola;
    coordenadaYBola += velocidadYBola;
}

/**
 * Crea 25 nuevas instancias de la clase Bola y las agrega a la matriz de bolas
 */
function generarBolas(){
    for(let i = 0; i <= 25; i++){
        bolas.push(new Bola());
    }
}

/**
 * Esta función se llama cada vez que el navegador está listo para dibujar.
 */
function actualizarMoverBola() {
    window.requestAnimationFrame(actualizarMoverBola);
}

/**
 * Establece un intervalo de 10 milisegundos, luego llama a la función de dibujo 
 * y a la función generarBolas para generar 25 bolas.
 */
function intervaloMoverBola(){
    setInterval(dibujarMoverBola, 10);
    actualizarMoverBola();
    generarBolas(25);
}

/* Llamando a la función intervaloMoverBola() */
intervaloMoverBola();