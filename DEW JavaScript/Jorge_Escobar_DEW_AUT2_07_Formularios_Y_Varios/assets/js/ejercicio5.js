/* 

5. Comenta el siguiente código, y genera el documento JSDOC, 
¿Puedes ver la información de tu código?

*/


class producto {

    /* Declarando las variables del producto. */
    nombre;
    categoria;
    precio;

    /**
     * Constructor que se llama cuando se crea un nuevo objeto.
     * @param [nombre=manzana] - El nombre del producto. En este caso, por defecto será manzana.
     * @param [categoria=frutas] - La categoría del producto. En este caso, por defecto será fruta.
     * @param [precio=2.00] - 2.00 - El precio del producto. En este caso, por defecto será 2.00€.
     */
    constructor(nombre = "manzana", categoria = "frutas", precio = 2.00) {
        this.nombre = nombre;
        this.categoria = categoria;
        this.precio = precio;
    }

    /**
     * agregarCategoria() toma un parámetro llamado categoria y lo inserta en la matriz
     * llamada categoria
     * @param categoria - Nombre de la categoría del producto a insertar.
     */
    agregarCategoria(categoria) {
        this.categoria.push(categoria);
    }

    /**
     * borrarProducto() toma un parámetro llamado nombreProducto y lo elimina. Si no es así,
     * nos avisará con un alert diciendo que no existe el producto. Y si existe, lo elimina.
     * @param nombreProducto - El nombre del producto a eliminar.
     */
    borrarProducto(nombreProducto){
        if(existeProducto(nombreProducto)){
            delete this.nombreProducto;
        }else{
            alert("No existe producto")
        }
    }
    /**
     * existeProducto() toma un parámetro llamado nombreProducto y comprueba si existe el producto. Si es así,
     * la coincidencia del producto se vuelve true. Si no coincide, la coincidencia se vuelve false.
     * @param nombreProducto - El nombre del producto a buscar.
     */
    existeProducto(nombreProducto){
        let coincide=false;
        if(this.nombre==nombreProducto){
            return coincide=true;
        }
        return coincide;
    }
}


/**
 * Crea un nuevo elemento HTML y lo agrega al elemento principal.
 * @param etiquetaPadre - Etiqueta principal.
 * @param nombreEtiqueta - Nombre de la etiqueta que desea crear.
 * @param valorEtiqueta - Texto que se mostrará en la etiqueta.
 * @param [tipo=null] - escribe.
 * @param [name=null] - Nombre del elemento que se va a crear.
 * @param [identificador=null] - ID del elemento.
 * @returns the parentTags.appendChild(nombreTags).
 */
function crearEtiqueta(etiquetaPadre, nombreEtiqueta, valorEtiqueta, tipo = null, name = null, identificador = null) {
    var parentTags = etiquetaPadre;
    var nombreTags = document.createElement(nombreEtiqueta);
    if (tipo == null || tipo == "") {} else {
        nombreTags.setAttribute("type", tipo);
    }
    if (identificador == null || identificador == "") {} else {
        nombreTags.setAttribute("id", identificador);
    }
    if (name == null || name == "") {} else {
        nombreTags.setAttribute("name", name);
    }
    nombreTags.textContent = valorEtiqueta;
    return parentTags.appendChild(nombreTags);
}