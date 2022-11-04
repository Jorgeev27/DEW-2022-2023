/* Obtener los elementos del archivo HTML. */

//DNI
let nieTexto = document.getElementById("nieTexto");
let dniTexto = document.getElementById("dniTexto");
let dniNie = document.getElementById("dniNie");

//VEHICULO
let vehiculo = document.getElementById("vehiculo");
let marcaVehiculo = document.getElementById("marcaVehiculo");
let matriculaVehiculo = document.getElementById("matriculaVehiculo");

//CÓDIGO POSTAL
let codigoPostal = document.getElementById("codigoPostal");
let cpOtro = document.getElementById("cpOtro");

/* Ocultar los elementos del archivo HTML. */

onload = () =>{
    dniTexto.style.display = "none";
    nieTexto.style.display = "none";
    marcaVehiculo.style.display = "none";
    matriculaVehiculo.style.display = "none";
    cpOtro.style.display = "none";
}

class formularioViaje{
    /* Declarar las variables que se utilizarán en la clase. */
    nombre;
    apellidos;
    dni;
    codigoPostal;
    fechaIda;
    numeroPersonas;
    telefonoFijo;
    telefonoMovil;
    residente;
    email;
    instagram;
    twitter;
    vehiculo;
    direccionIP;
    motivos;

    /**
     * Constructor del formularioViaje.
     * @param nombre - Nombre de la persona.
     * @param apellidos - Apellidos de la persona.
     * @param dni - Número de DNI.
     * @param codigoPostal - código postal.
     * @param fechaIda - La fecha de la visita.
     * @param numeroPersonas - Número de personas.
     * @param telefonoFijo - número de teléfono fijo.
     * @param telefonoMovil - Número de teléfono móvil.
     * @param residente - Si es residente o no.
     * @param email - Dirección de correo electrónico del usuario.
     * @param instagram - nombre de usuario de Instagram.
     * @param twitter - nombre de usuario de Twitter.
     * @param vehiculo - Si tiene vehículo o no
     * @param direccionIP - dirección IP del usuario.
     * @param motivos - El motivo del usuario.
     */
    constructor(nombre, apellidos, dni, codigoPostal, fechaIda, numeroPersonas, telefonoFijo, telefonoMovil, residente, email, instagram, twitter, vehiculo, direccionIP, motivos){
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.dni = dni;
        this.codigoPostal = codigoPostal;
        this.fechaIda = fechaIda;
        this.numeroPersonas = numeroPersonas;
        this.telefonoFijo = telefonoFijo;
        this.telefonoMovil = telefonoMovil;
        this.residente = residente;
        this.email = email;
        this.instagram = instagram;
        this.twitter = twitter;
        this.vehiculo = vehiculo;
        this.direccionIP = direccionIP;
        this.motivos = motivos;
    }
}

/**
 * Muestra el campo de entrada de DNI o NIE según el valor del elemento seleccionado
 */
function mostrarDniNie(){
    if(dniNie.value == "dni"){
        dniTexto.style.display = "block";
        nieTexto.style.display = "none";
    }else if(dniNie.value == "nie"){
        nieTexto.style.display = "block";
        dniTexto.style.display = "none";
    }else{
        nieTexto.style.display = "none";
        dniTexto.style.display = "none";
    }
}

/**
 * Si el valor del elemento seleccionado con el id de "vehiculo" es "si", entonces muestre los
 * elementos de entrada con los id de "marcaVehiculo" y "matriculaVehiculo", de lo contrario, se ocultan.
 */
function mostrarMarcaMatriculaVehiculo(){
    if(vehiculo.value == "si"){
        marcaVehiculo.style.display = "block";
        matriculaVehiculo.style.display = "block";
    }else if(vehiculo.value == "no"){
        marcaVehiculo.style.display = "none";
        matriculaVehiculo.style.display = "none";
    }else{
        marcaVehiculo.style.display = "none";
        matriculaVehiculo.style.display = "none";
    }
}

/**
 * Si el valor del elemento de selección con el id "codigoPostal" es "otro", entonces mostrar el
 * elemento de entrada con el id "cpOtro", de lo contrario se oculta
 */
function mostrarOtroCP(){
    if(codigoPostal.value == "otro"){
        cpOtro.style.display = "block";
    }else{
        cpOtro.style.display = "none";
    }
}