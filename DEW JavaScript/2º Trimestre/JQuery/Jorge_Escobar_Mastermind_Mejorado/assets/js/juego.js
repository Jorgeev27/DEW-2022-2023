/**
 * Declaración de variables
 */
const coloresDefecto = ["#ff0000", "#008000", "#ffff00", "#ee82ee", "#0000ff", "#2e4053"];
let juegoEnCurso;


/* Una función jQuery que espera hasta que el DOM esté listo para ser manipulado. */
$(document).ready(function(){
    iniciarJuego(coloresDefecto, 10, 4, false);
});

/**
 * Constante que inicializa un nuevo juego, genera la configuración del juego, genera los colores, genera las ranuras
 * para la combinación, genera los intentos, vacía la sección de resultados, habilita el botón para
 * mostrar la combinación correcta, oculta el contenedor de la combinación correcta, oculta la
 * configuración del juego , muestra el fondo transparente y desvanece el fondo transparente.
 * @param [coloresJuego] - una variedad de colores que usará el juego.
 * @param [intentosIniciales] - El número de intentos que tiene el jugador para adivinar la combinación correcta.
 * @param [cantidadSlots] - el número de ranuras en el juego.
 * @param [repeticiones] - el número de veces que se puede repetir un color en la combinación.
 * @param combinacionCorrecta - La combinación que el jugador tiene que adivinar.
 */
const iniciarJuego = (coloresJuego = juegoEnCurso.coloresJuego, intentosIniciales = juegoEnCurso.intentosIniciales, cantidadSlots = juegoEnCurso.cantidadSlots, repeticiones = juegoEnCurso.repeticiones, combinacionCorrecta) => {
    juegoEnCurso = new juego(coloresJuego, intentosIniciales, cantidadSlots, repeticiones, combinacionCorrecta);
    generarConf();
    generarColores();
    generarSlotsCombinacion();
    generarIntentos();
    DOM.seccionResultado.empty();
    DOM.botonCombinacionCorrecta.prop('disabled', false);
    DOM.contenedorCombinacionCorrecta.hide();
    DOM.configuracionPartida.hide();
    DOM.fondoTransparente.show();
    DOM.fondoTransparente.delay(3500).fadeOut(500);
}

/**
 * Constante que comprueba si todas las ranuras en una fila están llenas.
 * @param filaIntento - el número de fila del intento.
 * @returns Un valor booleano.
 */
const comprobarSlots = (filaIntento) => {
    let slotsRellenos = true;
    $("#slots" + filaIntento).children().each(function () {
        if($(this).children()[0] == undefined){
            slotsRellenos = false;
        }
    });
    return slotsRellenos;
}

/**
 * Constante que toma un número de fila y devuelve una matriz de los colores en esa fila
 * @param filaIntento - el número de fila del intento.
 * @returns Una gama de colores.
 */
const obtenerColores = (filaIntento) => {
    let colores = [];
    $("#slots" + filaIntento).children().each(function(){
        if($(this).children()[0] != undefined){
            let color = convertirAHex($(this).children()[0].style.backgroundColor);
            colores.push(color);
        }else{
            colores.push(null);
        }
    });
    return colores;
}

/**
 * Constante que toma los valores del formulario de configuración y comprueba si son válidos. Si lo están, comienza el juego.
 */
const establecerNuevaConf = () => {
    let configuracionValida = true;
    let colores = [];
    DOM.coloresConf.children().each(function(){
        colores.push($(this).val())
    });
    let numIntentos = parseInt(DOM.inputIntentos.val());
    let numSlots = parseInt(DOM.inputSlots.val());
    let repeticiones = DOM.checkboxRepeticiones.prop("checked");;
    let coloresOrdenados = colores.slice().sort();
    let coloresRepetidos = [];
    for(let i = 0; i < coloresOrdenados.length; i++){
        if(coloresOrdenados[i + 1] === coloresOrdenados[i] && !coloresRepetidos.includes(coloresOrdenados[i])){
            coloresRepetidos.push(coloresOrdenados[i]);
        }
    }
    if(coloresRepetidos.length > 0){
        configuracionValida = false;
        mostrarError("errorColores", "Hay " + coloresRepetidos.length + " colores repetidos");
    }
    if(numIntentos < 1 || typeof numIntentos != "number"){
        configuracionValida = false;
        mostrarError("errorIntentos", "Este valor no es válido");
    }
    if(numSlots < 1 || typeof numSlots != "number"){
        configuracionValida = false;
        mostrarError("errorSlots", "Este valor no es válido");
    }
    if(!repeticiones && numSlots > colores.length){
        configuracionValida = false;
        mostrarError("errorRepeticiones", "Necesitas mas colores o menos slots para activar las repeticiones");
    }
    if(configuracionValida){
        iniciarJuego(colores, numIntentos, numSlots, repeticiones);
    }else{
        mostrarError("errorConfiguracion", "La configuración introducida no es válida");
    }
}