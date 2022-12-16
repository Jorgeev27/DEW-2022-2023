/* Evento click al botón con id "botonConfiguracion" que alterna la visibilidad del
elemento con id "configuracionPartida" con una animación lenta. */
DOM.botonConfiguracion.bind("click", () => DOM.configuracionPartida.slideToggle("slow"));

/* Evento click al botón con id "botonCombinacionCorrecta" que alterna la visibilidad del
elemento con id "configuracionPartida" con una animación lenta. */
DOM.botonCombinacionCorrecta.bind("click", () => DOM.contenedorCombinacionCorrecta.slideToggle("slow"));

/* Evento click al elemento DOM con id "nuevoJuegoLeyenda" y llamar a la función
"iniciarJuego" cuando se activa el evento. */
DOM.nuevoJuegoLeyenda.bind("click", () => iniciarJuego());

/* Evento click al botón con id "botonNuevaConf" y llamando a la función
"establecerNuevaConf" cuando se activa el evento. */
DOM.botonNuevaConf.bind("click", () => establecerNuevaConf());

/* Evento click al botón con id "botonSumar" y llamando a la función "aniadirColor"
cuando se activa el evento. */
DOM.botonSumar.bind("click", () => aniadirColor());

/* Evento click al botón con id "botonRestar" y llamar a la función "quitarColor" cuando
se activa el evento. */
DOM.botonRestar.bind("click", () => quitarColor());

/* Evento que cambia el texto de la etiqueta junto a la casilla de verificación cuando se hace
clic en la casilla de verificación. */
DOM.checkboxRepeticiones.bind("click", () => {
    if(DOM.checkboxRepeticiones.prop('checked')){
        DOM.checkboxRepeticiones.next().text("Repeticiones activadas");
    }else{
        DOM.checkboxRepeticiones.next().text("Repeticiones desactivadas");
    }
});

/* Evento que se dispara cuando se hace click en el botón "Establecer combinación correcta". Obtiene
los colores de la combinación y si no está vacío, comienza un nuevo juego con la combinación. */
DOM.botonEstablecerCombinacionCorrecta.bind("click", () => {
    let combinacionCorrecta = [];
    DOM.slotsCombCorrecta.children().each(function(){
        if($(this).children()[0] != undefined){
            let color = convertirAHex($(this).children()[0].style.backgroundColor);
            combinacionCorrecta.push(color);
        }else{
            combinacionCorrecta.push(null);
        }
    });
    if(!combinacionCorrecta.includes(null)){
        iniciarJuego(juegoEnCurso.coloresJuego, juegoEnCurso.intentosIniciales, juegoEnCurso.cantidadSlots, juegoEnCurso.repeticiones, combinacionCorrecta);
        DOM.contenedorCombinacionCorrecta.hide("slow");
        DOM.botonCombinacionCorrecta.prop('disabled', true);
    }
});


/* Evento de arrastrar y soltar. */
DOM.opciones.bind({"dragstart": function(e){
        let target = $(e.target)[0];
        if(target.draggable == true){
            e.originalEvent.dataTransfer.setData('text/plain', target.id);
        }
    }
});

/* Un evento de vinculación que permite arrastrar y soltar las monedas de los intentos. */
DOM.slotsCombCorrecta.bind({
    /* Establece la propiedad de transferencia de datos del evento en la identificación. */
    "dragstart": function(e){
        let target = $(e.target)[0];
        if(target.draggable == true){
            e.originalEvent.dataTransfer.setData('text/plain', target.id);
        }
    },
    /* Evento que se desencadena cuando se deja caer una moneda en las ranuras de la combinación correcta. */
    "drop": function(e){
        let target = $(e.target);
        let idColor = e.originalEvent.dataTransfer.getData("text");
        let coloresUsados = [];
        DOM.slotsCombCorrecta.children().each(function(){
            if($(this).children()[0] != undefined){
                let color = convertirAHex($(this).children()[0].style.backgroundColor);
                coloresUsados.push(color);
            }else{
                coloresUsados.push(null);
            }
        });
        if(!(!juegoEnCurso.repeticiones && coloresUsados.includes(idColor))){
            e.preventDefault();
            let colorInsertado = $("#opciones div[id$=" + idColor.slice(1) + "]").clone(true);
            if(target.hasClass("monedaIntento")){
                target.append(colorInsertado);
            }else if(target.parent().hasClass("monedaIntento")){
                target.replaceWith(colorInsertado);
            }
        }
    },
    /* Evitar el comportamiento predeterminado del navegador al arrastrar un elemento. */
    "dragover": function(e){
        e.preventDefault();
    }
})

/* Vincular los eventos a los elementos DOM. */
DOM.intentos.bind({
    /* Establece la propiedad de transferencia de datos del evento en el id. */
    "dragstart": function(e){
        let target = $(e.target)[0];
        if(target.draggable == true){
            e.originalEvent.dataTransfer.setData('text/plain', target.id);
        }
    },
    /* Función que se llama cuando el usuario deja caer una moneda en las ranuras de los intentos. */
    "drop": function(e){
        let target = $(e.target);
        let idColor = e.originalEvent.dataTransfer.getData("text");
        let numFila = target.closest("#intentos > div")[0].id.slice(7);
        let coloresFila = obtenerColores(numFila);
        if(!(!juegoEnCurso.repeticiones && coloresFila.includes(idColor))){
            e.preventDefault();
            let colorInsertado = $("#opciones div[id$=" + idColor.slice(1) + "]").clone(true);
            if(target.hasClass("monedaIntento")){
                target.append(colorInsertado);
            }else if(target.parent().hasClass("monedaIntento")){
                target.replaceWith(colorInsertado);
            }
        }
    },
    /* Evita el comportamiento predeterminado del navegador al arrastrar un elemento. */
    "dragover": function(e){
        e.preventDefault();
    },
    /* Controlador de eventos que se llama cuando el usuario hace click en el botón de entrada. */
    "click": function(e){
        let target = $(e.target);
        if(target.prop("nodeName") == "INPUT"){
            let numFila = target.closest("#intentos > div")[0].id.slice(7);
            juegoEnCurso.comprobarIntento(numFila);
        }
    }
});