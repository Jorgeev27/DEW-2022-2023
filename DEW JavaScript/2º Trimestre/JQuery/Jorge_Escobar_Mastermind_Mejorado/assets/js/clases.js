class juego{
    /* Declaramos las propiedades de la clase Juego. */
    coloresJuego;
    intentosIniciales;
    intentosRestantes;
    cantidadSlots;
    repeticiones;
    combinacionCorrecta;

    /**
     * La función constructora toma un conjunto de colores, el número de intentos, el número de
     * ranuras, el número de repeticiones y la combinación correcta. Si no se proporciona la
     * combinación correcta, genera una combinación aleatoria
     * @param coloresJuego - Una variedad de colores entre los que el jugador puede elegir.
     * @param intentosIniciales - El número de intentos que tiene el jugador para adivinar la combinación correcta.
     * @param cantidadSlots - El número de ranuras en el juego.
     * @param repeticiones - El número de veces que se puede repetir un color en la combinación.
     * @param combinacionCorrecta - La combinación correcta de colores.
     */
    constructor(coloresJuego, intentosIniciales, cantidadSlots, repeticiones, combinacionCorrecta){
        this.coloresJuego = coloresJuego;
        this.intentosIniciales = intentosIniciales;
        this.intentosRestantes = intentosIniciales;
        this.cantidadSlots = cantidadSlots;
        this.repeticiones = repeticiones;
        if(combinacionCorrecta == null){
            this.combinacionCorrecta = this.generarCombinacionRandom(this.repeticiones);
        }else{
            this.combinacionCorrecta = new combinacion(combinacionCorrecta);
        }
    }

    //GETTER Y SETTER DE COLORESJUEGO
    get getColoresJuego(){
        return this.coloresJuego;
    }

    set setColoresJuego(coloresJuego){
        this.coloresJuego = coloresJuego;
    }

    //GETTER Y SETTER DE INTENTOSINICIALES
    get getIntentosIniciales(){
        return this.intentosIniciales;
    }

    set setIntentosIniciales(intentosIniciales){
        this.intentosIniciales = intentosIniciales;
    }

    //GETTER Y SETTER DE INTENTOSRESTANTES
    get getIntentosRestantes(){
        return this.intentosRestantes;
    }

    set setIntentosRestantes(intentosRestantes){
        this.intentosRestantes = intentosRestantes;
    }

    //GETTER Y SETTER DE CANTIDAD DE SLOTS
    get getCantidadSlots(){
        return this.cantidadSlots;
    }

    set setCantidadSlots(cantidadSlots){
        this.cantidadSlots = cantidadSlots;
    }

    //GETTER Y SETTER DE REPETICIONES
    get getRepeticiones(){
        return this.repeticiones;
    }

    set setRepeticiones(repeticiones){
        this.repeticiones = repeticiones;
    }

    //GETTER Y SETTER DE COMBINACIÓN CORRECTA
    get getCombinacionCorrecta(){
        return this.combinacionCorrecta;
    }

    set setCombinacionCorrecta(combinacionCorrecta){
        this.combinacionCorrecta = combinacionCorrecta;
    }


    /**
     * Función que genera una combinación aleatoria de colores, que es una matriz de colores, y la devuelve como un
     * objeto de combinación.
     * @param repeticiones - booleano que indica si la combinación aleatoria puede tener colores repetidos.
     * @returns Una nueva instancia de la clase combinacion.
     */
    generarCombinacionRandom(repeticiones) {
        let coloresRandom = [];
        do{
            let colorRandom = this.coloresJuego[generarNumeroAleatorio(0, this.coloresJuego.length)];
            if(repeticiones){
                coloresRandom.push(colorRandom);
            }else if(!coloresRandom.includes(colorRandom)){
                coloresRandom.push(colorRandom);
            }
        }while(coloresRandom.length != this.cantidadSlots);
        let combinacionRandom = new combinacion(coloresRandom);
        return combinacionRandom;
    }

    /**
     * Comprueba si la suposición del usuario es correcta y, si lo es, muestra el resultado de la posición.
     * @param filaIntento - el número de fila del intento.
     */
    comprobarIntento(filaIntento) {
        if(comprobarSlots(filaIntento)){
            let intento = new combinacion(obtenerColores(filaIntento));
            let coloresSolucionSinRevisar = this.combinacionCorrecta.colores.slice();
            let coloresIntentoSinRevisar = obtenerColores(filaIntento);
            let contadorAciertos = 0;
            let contadorCoincidencias = 0;
            for(let i = 0; i < intento.colores.length; i++){
                if(Object.values(this.combinacionCorrecta.colores)[i] == Object.values(intento.colores)[i]) {
                    contadorAciertos++;
                    coloresSolucionSinRevisar.splice(i, 1, null);
                    coloresIntentoSinRevisar.splice(i, 1, null);
                }
            }
            coloresSolucionSinRevisar = quitarNulos(coloresSolucionSinRevisar);
            coloresIntentoSinRevisar = quitarNulos(coloresIntentoSinRevisar);
            for(let i = 0; i < intento.colores.length; i++){
                if(coloresSolucionSinRevisar.includes(coloresIntentoSinRevisar[i])){
                    contadorCoincidencias++;
                    let indiceElemento = coloresSolucionSinRevisar.indexOf(coloresIntentoSinRevisar[i]);
                    coloresSolucionSinRevisar.splice(indiceElemento, 1, null);
                }
            }
            let contadorFallos = this.cantidadSlots - contadorAciertos - contadorCoincidencias;
            mostrarResultadoIntento(filaIntento, contadorAciertos, contadorCoincidencias, contadorFallos);
            this.intentosRestantes = this.intentosRestantes - 1;
            if(contadorAciertos == this.cantidadSlots){
                mostrarPartidaGanada();
            }else if(this.intentosRestantes == 0){
                mostrarPartidaPerdida();
            }
        }else{
            mostrarError("comprobacion" + filaIntento, "Rellena todos los slots");
        }
    }
}

class combinacion{
    /* Una propiedad de la clase combinacion. */
    colores;

    /**
     * La función constructora es una función especial que se llama cuando se crea una nueva instancia de la clase.
     * @param colores - Una gama de colores.
     */
    constructor(colores) {
        this.colores = colores;
    }

    //GETTER Y SETTER DE LOS COLORES
    get getColores(){
        return this.colores;
    }

    set setColores(colores){
        this.colores = colores;
    }
}