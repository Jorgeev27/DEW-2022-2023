/* Declaración de variables. */
let listaCompraArticulosTienda = document.getElementById("listaCompraArticulosTienda");
let articulos = document.getElementById("articulos");
let ps = document.getElementById("ps");
let tv = document.getElementById("tv");
let nevera = document.getElementById("nevera");
let xbox = document.getElementById("xbox");
let cesta = document.getElementById("cesta");
let igic = document.getElementById("igic");
let totalCesta = document.getElementById("totalCesta");
let articulosTienda = document.getElementsByTagName("input");
let nombreArticulo = document.getElementsByClassName("nombreArticulo");
let precioArticulo = document.getElementsByClassName("precioArticulo");
let productosTienda = [];

/* Declaramos algunas variables inicializadas, y otras sin inicializar. */
let importeTotalArticulos = 0;
let importeTotalArticulosIgic = 0;
let articulo;
let articuloPrecio;
let articuloProd = "";
let articuloPre = "";
let padre;
let table;
let tr;
let primerTd;
let segundoTd;

class TiendaArticulos{
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

/**
 * Crea un nuevo objeto y lo agrega al array.
 * @param nombre - El nombre del producto.
 * @param precio - El precio del producto.
 */
function articuloCompra(nombre, precio){
    let productoCompra = new TiendaArticulos(nombre, precio);
    productosTienda.push(productoCompra);
    productoAgregar(productosTienda);
}

/**
 * Recorre los productos y, si se marca, obtiene el nombre y el precio del
 * artículo y lo agrega al carrito de compras.
 * @param inputCheck - los productos con el nombre y precio
 */
function articuloCheck(inputCheck){
    for (let i = 0; i < inputCheck.length; i++) {
        if(inputCheck[i].checked){
            articulo = nombreArticulo[i].innerHTML;
            articuloPrecio = parseFloat(precioArticulo[i].innerHTML);
            articuloCompra(articulo,articuloPrecio);
        } 
    }
}

/**
 * Toma un array como argumento, luego lo recorre y le asigna el nombre y el precio del producto
 * a una variable, luego llama a la función tabla y pasa las variables como argumentos.
 * @param productosAgregar - Recorre los productos que se quiere agregar.
 */
function productoAgregar(productosAgregar){
    productosAgregar.forEach(producto => {
        articuloProd = producto.nombre;
        articuloPre = producto.precio;
    });
    tablaArticulosTienda(listaCompraArticulosTienda, articuloProd, articuloPre);
}

/**
 * Calcula el importe total de los productos de la cesta de la compra, incluido el IGIC
 */
function calcularImporteTotalIgic(){
    productosTienda.forEach(importeTotal => {
        importeTotalArticulos += importeTotal.precio;
    });
    importeTotalArticulosIgic = importeTotalArticulos * 0.07;
    importeTotalArticulos = importeTotalArticulos + importeTotalArticulosIgic;
    igic.innerHTML = importeTotalArticulosIgic.toFixed(2);
    totalCesta.innerHTML = importeTotalArticulos.toFixed(2);
}


/**
 * Crea una tabla, le agrega una fila, agrega dos celdas a la fila y luego agrega la tabla al elemento
 * principal.
 * @param parent - El elemento padre de la tabla.
 * @param firstchild - El primer hijo del elemento padre de la tabla.
 * @param secondChild - El segundo hijo del elemento padre de la tabla.
 * @returns La tabla agregada.
 */
function tablaArticulosTienda(parent, firstchild, secondChild) {
    padre = parent;
    table = document.createElement("table");
    tr = document.createElement("tr");
    primerTd = document.createElement("td");
    segundoTd = document.createElement("td");
    primerTd.textContent = firstchild;
    segundoTd.textContent = secondChild;
    tr.appendChild(primerTd);
    tr.appendChild(segundoTd);
    table.appendChild(tr);
    return padre.appendChild(table);
}


/**
 * Desmarca todas las casillas de la tienda.
 * @returns todos los articulos de la tienda deseleccionados.
 */
function deseleccionarArticulosTienda(){
    let checkedArticulos = document.querySelectorAll("[type='checkbox']").forEach(
        (tiendaArticulo) => 
        tiendaArticulo.checked=false);
        return checkedArticulos;
}

/**
 * Comprueba si el artículo ya está en el carrito.
 */
function carritoProductosTienda(){
    articuloCheck(articulosTienda);
    deseleccionarArticulosTienda();
    calcularImporteTotalIgic();
}