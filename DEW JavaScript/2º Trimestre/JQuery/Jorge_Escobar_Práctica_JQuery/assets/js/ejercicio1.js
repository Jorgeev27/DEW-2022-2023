// ABRIR EL EJERCICIO CON LIVE SERVER, YA QUE SI SE ABRE DIRECTAMENTE, LOS DATOS DEL JSON NO SE MOSTRARÁN.


/* Declaración de variables. */
let array = [];
let cestaCompleta = "";

class TiendaArticulos { //Creamos la clase producto
    /* Declarando las variables de la clase TiendaArticulos. */
    nombre;
    precio;

    /**
     * La función constructora es una función especial que se utiliza para crear e inicializar un objeto creado dentro de una clase.
     * @param nombre - El nombre del producto de la tienda.
     * @param precio - El precio del producto de la tienda.
     */
    constructor(nombre, precio){
        this.nombre = nombre;
        this.precio = precio;
    }

    //GETTER Y SETTER DEL NOMBRE DEL ARTÍCULO QUE SE COMPRE
    get getNombre(){
        return this.nombre;
    }

    set setNombre(nombre){
        this.nombre = nombre;
    }

    //GETTER Y SETTER DEL PRECIO DEL ARTÍCULO QUE SE COMPRE
    get getPrecio(){
        return this.precio;
    }

    set setPrecio(precio){
        this.precio = precio;
    }
}

/* Espera hasta que el DOM esté listo para ser manipulado. */
$(document).ready(function(){ 
    cargarProductosTiendaJson();
    $("#obtenerDatos").click(cargarProductosTiendaJson);
    $("#boton").click(agregarProductoTiendaCestaCompra);
    $("#boton").click(mostrarProductosTienda);
    $("#boton").click(calcularImporteTotalIgic);
});

function agregarProductoTiendaCestaCompra(){
    /* Obtiene el nombre y el precio del producto que el usuario ha verificado y luego
    crea un nuevo objeto con el nombre y el precio del producto y luego empuja el objeto al array. */
    $("input:checkbox:checked").each(function(){
        let objeto = $(this).next().html();
        let precio = parseInt($(this).next().next().html());
        let producto1 = new TiendaArticulos(objeto, precio);
        array.push(producto1);
    });
    /* Desmarcando la casilla de verificación. */
    $('input:checkbox:checked').prop("checked", false);
}

function calcularImporteTotalIgic(){
    /* Declarando las variables totalCesta y totalIGIC e inicializándolas a 0. */
    let totalCesta = 0;
    let totalIGIC = 0;

    /* A través del array de productos y agregando el IGIC y el precio total de los productos. */
    for(let i = 0; i < array.length; i++){
        totalIGIC += parseFloat(array[i].precio) * 0.07;
        totalCesta += parseInt(array[i].precio);
    }
    /* Mostrando el IGIC y el totalCesta en el HTML. */
    $("#igic").html(totalIGIC.toFixed(2));
    $("#total").html(totalCesta);
};

/**
 * Obtiene los datos del archivo JSON y los muestra en el archivo HTML.
 */
function cargarProductosTiendaJson() {
    /* Mostrando el precargador. */
    $("#preloader").fadeIn(1);
    /* Hacer visible el cuerpo. */
    $("body").css({
        "overflow": "visible"
    });
    /* Ocultar el precargador después de 4 segundos. */
    $("#preloader").fadeOut(4000);
    /* Obtener los datos del archivo JSON. */
    $.ajax({
        url: "assets/json/productos.json",
        type: "get",
        dataType: "json",
        cache: false,
        contentType: false,
        processData: false
    })
    /* Se ejecuta cuando la solicitud de la base de datos tiene éxito. */
    .done(function(data){
        let datos = "<ul class='list-group'>";
        for(let i = 0; i < data.length; i++){
            datos += "<div><input class='check' type='checkbox' name='producto'/><span class='articleName'>" + data[i].producto + "</span> - <span class='price'>" + data[i].precio + "</span>€</div>";
        }
        datos += "</ul>";
        $("#articlesList").html(datos);
    })
    /* Mostrando un mensaje de alerta cuando falla la conexión con la base de datos JSON. */
    .fail(function(data){
        data = alert("ERROR!!! Al conectar con la base de datos de JSON.");
    })
}

function mostrarProductosTienda(){
    /* Mostrando el nombre del producto y el precio del producto. */
    for(let i = 0; i < array.length; i++){
        cestaCompleta += array[i].nombre + " " + ((array[i].precio) - (array[i].precio / 100 * 7)).toFixed(2) + "€" + "<br>";
    }
    $("#lista").html(cestaCompleta);
}