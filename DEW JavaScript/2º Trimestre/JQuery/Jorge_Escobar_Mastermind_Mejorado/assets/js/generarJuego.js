/**
 * Constante que crea una entrada de color para cada color en la matriz de colores del juego, establece los intentos
 * de entrada y los espacios en los intentos y espacios iniciales del juego, y establece la casilla de
 * verificación en el valor de repetición del juego.
 */
const generarConf = () => {
    DOM.coloresConf.empty();
    juegoEnCurso.coloresJuego.forEach(color => {
        $("<input>", {
            type: "color", value: color
        }).appendTo(DOM.coloresConf)
    })
    DOM.inputIntentos.val(juegoEnCurso.intentosIniciales);
    DOM.inputSlots.val(juegoEnCurso.cantidadSlots);
    if(juegoEnCurso.repeticiones){
        DOM.checkboxRepeticiones.prop("checked", true);
        DOM.checkboxRepeticiones.next().text("Repeticiones activadas");
    }else{
        DOM.checkboxRepeticiones.prop("checked", false);
        DOM.checkboxRepeticiones.next().text("Repeticiones desactivadas");
    }
}

/**
 * Constante que genera un color aleatorio, comprueba si ya está en la lista de colores, y si no lo está, lo añade a la lista
 */
const aniadirColor = () => {
    let coloresMaximos = 10;
    if(DOM.coloresConf.children().length < coloresMaximos){
        let nuevoColor;
        let colores = [];
        DOM.coloresConf.children().each(function () { colores.push($(this).val()) });
        do{
            let colorRandom = "rgb(" + generarNumeroAleatorio(0, 255) + "," + generarNumeroAleatorio(0, 255) + "," + generarNumeroAleatorio(0, 255) + ")";
            nuevoColor = convertirAHex(colorRandom);
        }while(colores.includes(nuevoColor));
        $("<input>", {
            type: "color", value: nuevoColor
        }).appendTo(DOM.coloresConf)
    }else{
        mostrarError("errorColores", "No puede haber mas de " + coloresMaximos + " colores");
    }
}

/**
 * Constante que elimina el último color de la lista de colores.
 */
const quitarColor = () => {
    if(DOM.coloresConf.children().length > 1){
        DOM.coloresConf.children().last().remove();
    }else{
        mostrarError("errorColores", "Tiene que haber como minimo un color");
    }
}

/**
 * Constante que toma los colores del objeto del juego y crea un div para cada uno de ellos, luego los agrega al DOM.
 */
const generarColores = () => {
    if(!DOM.opciones.is(":empty")){
        DOM.opciones.empty();
    }
    juegoEnCurso.coloresJuego.forEach(color => {
        $("<div>", {
            id: color,
            draggable: "true",
            class: "tamanioMoneda rounded-circle",
            style: "background-image: url('assets/img/Coin.png'); background-size: cover; background-color:" + color + ";"
        }).appendTo(DOM.opciones)
    })
}

/**
 * Constante que crea un elemento div para cada ranura en la combinación y lo agrega al DOM
 */
const generarSlotsCombinacion = () => {
    if(!DOM.slotsCombCorrecta.is(":empty")){
        DOM.slotsCombCorrecta.empty();
    }
    for(let i = 0; i < juegoEnCurso.cantidadSlots; i++){
        $("<div>", {
            class: "tamanioMoneda rounded-circle monedaIntento",
        }).appendTo(DOM.slotsCombCorrecta)
    }
}

/**
 * Constante que crea un div con el id "intentos" y luego crea un div con el id "intento" + i, donde i es el número
 * del intento. Luego crea un div con el id "ranuras" + i, donde i es el número del intento. Luego crea
 * un div con el id "comprobacion" + i, donde i es el número del intento.
 */
const generarIntentos = () => {
    if(!DOM.intentos.is(":empty")){
        DOM.intentos.empty();
    }
    for(let i = 1; i <= juegoEnCurso.intentosIniciales; i++){
        $("<div>", {
            id: "intento" + i, class: "row py-2"
        }).append([
            $("<div>", {
                class: "col-8 px-1"
            }).append(
                $("<div>", {
                    id: "slots" + i, class: "d-flex flex-wrap justify-content-around w-100"
                }).append(function () {
                    for(let i = 0; i < juegoEnCurso.cantidadSlots; i++){
                        $("<div>", {
                            class: "tamanioMoneda rounded-circle monedaIntento",
                        }).appendTo($(this))
                    }
                })
            ), $("<div>", {
                class: "col-4 px-1"
            }).append(
                $("<div>", {
                    id: "comprobacion" + i, class: "d-flex justify-content-center align-items-center flex-column h-100"
                }).append(
                    $("<input>", {
                        type: "button", value: "Comprobar intento", class: "btn btn-success"
                    })
                )
            )
        ]).appendTo(DOM.intentos)
    }
}

/**
 * Constante que crea un div con el mensaje de error, lo agrega al contenedor principal y luego lo desvanece después
 * de un segundo
 * @param idContenedorPadre - El id del contenedor principal donde se mostrará el mensaje de error.
 * @param mensajeError - El mensaje de error que se mostrará.
 */
const mostrarError = (idContenedorPadre, mensajeError) => {
    $("<div>", {
        text: mensajeError,
        id: "mensajeError",
        class: "error"
    }).appendTo("#" + idContenedorPadre)
    $("#mensajeError").delay(1000).fadeOut(500);
    setTimeout(() => $("#mensajeError").remove(), 1500);
}

/**
 * Constante que genera una fila de monedas, cada una de las cuales representa un tipo de resultado diferente
 * @param filaIntento - el número de fila del intento
 * @param cantidadAciertos - el número de conjeturas correctas
 * @param cantidadCoincidencias - el número de colores correctos en la posición incorrecta
 * @param cantidadFallos - número de conjeturas incorrectas
 */
const mostrarResultadoIntento = (filaIntento, cantidadAciertos, cantidadCoincidencias, cantidadFallos) => {
    $("#comprobacion" + filaIntento).empty();
    $("#comprobacion" + filaIntento).addClass("flex-row").removeClass("flex-column");
    generarMonedasPequenias(cantidadAciertos, "#0a0a0a", "comprobacion" + filaIntento);
    generarMonedasPequenias(cantidadCoincidencias, "white", "comprobacion" + filaIntento);
    generarMonedasPequenias(cantidadFallos, "gray", "comprobacion" + filaIntento);
}


/**
 * Constante que crea un div con la clase "monedaSolucion" y lo agrega al div con el id "idContenedorPadre"
 * @param numeroMonedas - Número de monedas a generar
 * @param color - el color de la moneda
 * @param idContenedorPadre - La identificación del contenedor principal donde se generarán las monedas.
 */
const generarMonedasPequenias = (numeroMonedas, color, idContenedorPadre) => {
    for(let i = 1; i <= numeroMonedas; i++){
        $("<div>", {
            class: "monedaSolucion rounded-circle mx-1",
            style: "background-image: url(assets/img/Coin.png);background-size: cover; background-color: " + color + ";"
        }).appendTo("#" + idContenedorPadre)
    }
}

/**
 * Constante que elimina todas las entradas del DOM, luego crea un nuevo div con la clase "partidaGanada" y lo agrega
 * al DOM
 */
const mostrarPartidaGanada = () => {
    DOM.intentos.children().each(function () {
        if($(this).find("input")[0] != null){
            $(this).remove()
        } 
    });
    $("<div>", {
        class: "partidaGanda rounded-3 p-2 mt-3"
    }).append([
        $("<div>", {
            class: "row py-2"
        }).append(
            $("<div>", {
                class: "col"
            }).append(
                $("<h1>", {
                    class: "text-center",
                    text: "¡¡Has ganado la partida!!"
                })
            )
        ),
        $("<div>", {
            class: "row py-2"
        }).append(
            $("<div>", {
                class: "col"
            }).append(
                $("<div>", {
                    id: "slotsSolucion",
                    class: "d-flex justify-content-around w-100"
                }).append(function(){
                    for(let i = 0; i < juegoEnCurso.cantidadSlots; i++){
                        $("<div>", {
                            class: "tamanioMoneda rounded-circle",
                            style: "background-image: url(assets/img/CoinSolucion.png);background-size: cover; background-color: " + juegoEnCurso.combinacionCorrecta.colores[i] + ";"
                        }).appendTo($(this))
                    }
                })
            )
        ),
        $("<div>", {
            class: "row py-2"
        }).append([
            $("<div>", {
                class: "col d-flex align-items-center"
            }).append(
                $("<h4>", {
                }).append([
                    $("<span>", {
                        text: "Intentos restantes:",
                    }),
                    $("<span>", {
                        text: juegoEnCurso.intentosRestantes
                    })
                ])
            ),
            $("<div>", {
                class: "col text-end"
            }).append([
                $("<h4>", {
                    text: "¿Quieres volver a jugar?"
                }),
                $("<input>", {
                    type: "button",
                    value: "Nuevo juego",
                    class: "btn btn-success mt-2",
                    click: function(){
                        iniciarJuego() 
                    }
                })
            ])
        ])
    ]).appendTo(DOM.seccionResultado)
}

/**
 * Constante que crea un nuevo div con la clase "partidaPerdida" y lo agrega al DOM
 */
const mostrarPartidaPerdida = () => {
    DOM.intentos.children().each(function(){
        if($(this).find("input")[0] != null){
            $(this).remove()
        }
    });
    $("<div>", {
        class: "partidaPerdida rounded-3 p-2 mt-3"
    }).append([
        $("<div>", {
            class: "row py-2"
        }).append(
            $("<div>", {
                class: "col"
            }).append(
                $("<h1>", {
                    class: "text-center",
                    text: "Has perdido la partida..."
                })
            )
        ),
        $("<div>", {
            class: "row py-2"
        }).append(
            $("<div>", {
                class: "col"
            }).append([
                $("<h4>", {
                    class: "mb-4",
                    text: "La combinacion correcta era:"
                }),
                $("<div>", {
                    id: "slotsSolucion",
                    class: "d-flex justify-content-around w-100"
                }).append(function () {
                    for(let i = 0; i < juegoEnCurso.cantidadSlots; i++){
                        $("<div>", {
                            class: "tamanioMoneda rounded-circle",
                            style: "background-image: url(assets/img/CoinSolucion.png);background-size: cover; background-color: " + juegoEnCurso.combinacionCorrecta.colores[i] + ";"
                        }).appendTo($(this))
                    }
                })
            ])
        ),
        $("<div>", {
            class: "row py-2"
        }).append([
            $("<div>", {
                class: "col d-flex align-items-center"
            }).append(
                $("<h4>", {
                    text: "Otra vez sera..."
                })
            ),
            $("<div>", {
                class: "col text-end"
            }).append([
                $("<h4>", {
                    text: "¿Quieres volver a intentarlo?"
                }),
                $("<input>", {
                    type: "button",
                    value: "Nuevo juego",
                    class: "btn btn-danger mt-2",
                    click: function(){
                        iniciarJuego()
                    }
                })
            ])
        ])
    ]).appendTo(DOM.seccionResultado)
};