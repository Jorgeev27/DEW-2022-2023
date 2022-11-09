/* Obtener los elementos del archivo HTML. */

//DNI-NIE
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
let cpOtro2 = document.getElementById("cpOtro2");
let aniadirOtro = document.getElementById("aniadirOtro");

//REDES SOCIALES
let redesSociales = document.getElementById("redesSociales");
let instagram = document.getElementById("instagram");
let instagram2 = document.getElementById("instagram2");
let twitter = document.getElementById("twitter");
let twitter2 = document.getElementById("twitter2");

let resultadoPersona = document.getElementById("resultadoPersona");

/* Ocultar los elementos del archivo HTML. */
onload = () =>{
    //DNI-NIE
    dniTexto.style.display = "none";
    nieTexto.style.display = "none";

    //VEHICULO
    marcaVehiculo.style.display = "none";
    matriculaVehiculo.style.display = "none";

    //CÓDIGO POSTAL
    cpOtro.style.display = "none";
    cpOtro2.style.display = "none";
    aniadirOtro.style.display = "none";

    //REDES SOCIALES
    instagram.style.display = "none";
    twitter.style.display = "none";
    instagram2.style.display = "none";
    twitter2.style.display = "none";
}

class Persona{
    /* Declarar las variables que se utilizarán en la clase. */
    nombre;
    apellidos;
    identificacion;
    codigoPostal;
    fechaIda;
    numeroPersonas;
    telefonoFijo;
    telefonoMovil;
    residente;
    email;
    instagram;
    twitter;
    marca;
    matricula;
    direccionIP;
    motivos;

    /**
     * Constructor de la Persona.
     * @param nombre - Nombre de la persona.
     * @param apellidos - Apellidos de la persona.
     * @param identificacion - Número de identificación.
     * @param codigoPostal - código postal.
     * @param fechaIda - La fecha de la visita.
     * @param numeroPersonas - Número de personas.
     * @param telefonoFijo - número de teléfono fijo.
     * @param telefonoMovil - Número de teléfono móvil.
     * @param residente - Si es residente o no.
     * @param email - Dirección de correo electrónico del usuario.
     * @param instagram - nombre de usuario de Instagram.
     * @param twitter - nombre de usuario de Twitter.
     * @param marca - Marca del vehículo.
     * @param matricula - Matrícula del vehículo.
     * @param direccionIP - dirección IP del usuario.
     * @param motivos - El motivo del usuario.
     */
    constructor(nombre, apellidos, identificacion, codigoPostal, fechaIda, numeroPersonas, telefonoFijo, telefonoMovil, residente, email, instagram, twitter, marca, matricula, direccionIP, motivos){
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.identificacion = identificacion;
        this.codigoPostal = codigoPostal;
        this.fechaIda = fechaIda;
        this.numeroPersonas = numeroPersonas;
        this.telefonoFijo = telefonoFijo;
        this.telefonoMovil = telefonoMovil;
        this.residente = residente;
        this.email = email;
        this.instagram = instagram;
        this.twitter = twitter;
        this.marca = marca;
        this.matricula = matricula;
        this.direccionIP = direccionIP;
        this.motivos = motivos;
    }

    /**
     * GETTER Y SETTER DE NOMBRE
     */
    get getNombre(){
        return this.nombre;
    }

    set setNombre(nombre){
        this.nombre = nombre;
    }

    /**
     * GETTER Y SETTER DE APELLIDOS
     */
    get getApellidos(){
        return this.apellidos;
    }

    set setApellidos(apellidos){
        this.apellidos = apellidos;
    }

    /**
     * GETTER Y SETTER DE IDENTIFICACIÓN
     */
    get getIdenficacion(){
        return this.identificacion;
    }

    set setIdentificacion(identificacion){
        this.identificacion = identificacion;
    }

    /**
     * GETTER Y SETTER DE CÓDIGO POSTAL
     */
    get getCodigoPostal(){
        return this.codigoPostal;
    }

    set setCodigoPostal(codigoPostal){
        this.codigoPostal = codigoPostal;
    }

    /**
     * GETTER Y SETTER DE FECHA DE IDA
     */
    get getFechaIda(){
        return this.fechaIda;
    }

    set setFechaIda(fechaIda){
        this.fechaIda = fechaIda;
    }

    /**
     * GETTER Y SETTER DE NÚMERO DE PERSONAS
     */
    get getNumeroPersonas(){
        return this.numeroPersonas;
    }

    set setNumeroPersonas(numeroPersonas){
        this.numeroPersonas = numeroPersonas;
    }

    /**
     * GETTER Y SETTER DE TELÉFONO FIJO
     */
    get getTelefonoFijo(){
        return this.telefonoFijo;
    }

    set setTelefonoFijo(telefonoFijo){
        this.telefonoFijo = telefonoFijo;
    }

    /**
     * GETTER Y SETTER DE TELÉFONO MÓVIL
     */
    get getTelefonoMovil(){
        return this.telefonoMovil;
    }

    set setTelefonoMovil(telefonoMovil){
        this.telefonoMovil = telefonoMovil;
    }

    /**
     * GETTER Y SETTER DE RESIDENTE O NO RESIDENTE
     */
    get getResidente(){
        return this.residente;
    }

    set setResidente(residente){
        this.residente = residente;
    }

    /**
     * GETTER Y SETTER DE EMAIL
     */
    get getEmail(){
        return this.email;
    }

    set setEmail(email){
        this.email = email;
    }

    /**
     * GETTER Y SETTER DE INSTAGRAM
     */
    get getInstagram(){
        return this.instagram;
    }

    set setInstagram(instagram){
        this.instagram = instagram;
    }

    /**
     * GETTER Y SETTER DE TWITTER
     */
    get getTwitter(){
        return this.twitter;
    }

    set setTwitter(twitter){
        this.twitter = twitter;
    }

    /**
     * GETTER Y SETTER DE MARCA DE VEHÍCULO
     */
    get getMarca(){
        return this.marca;
    }

    set setMarca(marca){
        this.marca = marca;
    }

    /**
     * GETTER Y SETTER DE MATRÍCULA DE VEHÍCULO
     */
    get getMatricula(){
        return this.matricula;
    }

    set setMatricula(matricula){
        this.matricula = matricula;
    }

    /**
     * GETTER Y SETTER DE DIRECCIÓN IP
     */
    get getDireccionIP(){
        return this.direccionIP;
    }

    set setDireccionIP(direccionIP){
        this.direccionIP = direccionIP;
    }

    /**
     * GETTER Y SETTER DE MOTIVOS DEL VIAJE
     */
    get getMotivos(){
        return this.motivos;
    }

    set setMotivos(motivos){
        this.motivos = motivos;
    }
}

/**
 * Muestra el campo de entrada de DNI o NIE según el valor del elemento seleccionado.
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
 * Si el valor del elemento seleccionado con el id de "redes sociales" es "si", entonces muestre los
 * elementos de entrada con los id de "instagram" y "twitter", de lo contrario, se ocultan.
 */
function mostrarRedesSociales(){
    if(redesSociales.value == "si"){
        instagram.style.display = "block";
        twitter.style.display = "block";
        instagram2.style.display = "block";
        twitter2.style.display = "block";
    }else if(redesSociales.value == "no"){
        instagram.style.display = "none";
        twitter.style.display = "none";
        instagram2.style.display = "none";
        twitter2.style.display = "none";
    }else{
        instagram.style.display = "none";
        twitter.style.display = "none";
        instagram2.style.display = "none";
        twitter2.style.display = "none";
    }
}

/**
 * Si el valor del elemento de selección con el id "codigoPostal" es "otro", entonces mostrar el
 * elemento de entrada con el id "cpOtro", de lo contrario se oculta.
 */
function mostrarOtroCP(){
    if(codigoPostal.value == "otro"){
        cpOtro.style.display = "block";
        cpOtro2.style.display = "block";
        aniadirOtro.style.display = "block";
    }else{
        cpOtro.style.display = "none";
        cpOtro2.style.display = "none";
        aniadirOtro.style.display = "none";
    }
}

/**
 * Comprueba si el valor del elemento de selección es "otro" y, si lo es, muestra el elemento de
 * entrada y el elemento de botón y después el elemento botón hace que se añada otra opción al código postal. 
 * Si el valor del elemento de selección no es "otro", oculta el elemento de entrada y el elemento de botón
 */
function aniadirOtroCP(){
        let pattern = /^\d{5}$/;
        let codPostal = document.getElementById("codigoPostal");
        let otroCP = document.getElementById("cpOtro").value;
        if(pattern.test(otroCP)){
            let option = document.createElement("option");
            option.text = otroCP;
            codPostal.add(option);
            alert("Se ha añadido el nuevo codigo postal");
            option.setAttribute("selected", "selected");
            cpOtro.style.display = "none";
            cpOtro2.style.display = "none";
            aniadirOtro.style.display = "none";
        }else{
            alert("ERROR!! Sólo 5 dígitos de 0 a 9");
        }
}

/**
 * Comprueba si el número de teléfono es válido, si lo es, alerta al usuario que el número de teléfono
 * es válido, si no lo es, alerta al usuario que el número de teléfono no es válido
 */
function validarTelefonoMovil(){
        let pattern = /^(\+34)?[6-7]\d{8}$/;
        let global = /^(\+\d{1,3})\d{9}$/;
        let telefonoMovil = document.getElementById("telefonoMovil").value;
        if(pattern.test(telefonoMovil)){
            alert("Teléfono Móvil válido");
        }else if(global.test(telefonoMovil) && (telefonoMovil.substring(0,3) !== '+34')){
            alert("Teléfono Móvil válido");
        }else{
            alert("Teléfono Móvil invalido");
        }
}

/**
 * Valida la entrada de un área de texto, asegurándose de que la primera letra de cada palabra esté en
 * mayúscula y elimina los espacios innecesarios
 */
function validarMotivo(){
    let pattern = /^[A-Z]/;
    let motivo = document.getElementById("motivo").value;
    let motivos = motivo.split(/[\s\n]+/);
    if(pattern.test(motivo)){
        alert("Motivo válido");
    }else{
        alert("Motivo inválido. La primera letra tiene que empezar por mayúscula");
    }

    for(let i = 0; i < motivos.length; i++){
        if(motivos[i] == ""){
            motivos.splice(i, 1);
            i--;
        }
        if(motivos[i] == "\n"){
            motivos.splice(i, 1);
            i--;
        }
    }
}

/**
 * Valida un número de DNI (Documento Nacional de Identidad) español y la letra correspondiente
 */
function validarDni(){
    let pattern = /^\d{8}[A-Z]$/;
    let letrasDNI = 'TRWAGMYFPDXBNJZSQVHLCKET';
    let dniTexto = document.getElementById("dniTexto").value;
    if(pattern.test(dniTexto)){
        let numero = dniTexto.substring(0, dniTexto.length - 1);
        let letra = dniTexto.substring(dniTexto.length -1, dniTexto.length);
        let posicion = numero % 23;
        let letraDni = letrasDNI.substring(posicion, posicion + 1);
        if(letra.toLowerCase() !== letraDni.toLowerCase()){
            alert("DNI inválido");
        }else{
            alert("DNI válido");
        }
    }else{
        alert("No entiendo el DNI ...");
    }
}



/**
 * NO FUNCIONA, VER EN CLASE
 * Toma el número NIE, quita la última letra, reemplaza la primera letra por un número, calcula el
 * módulo 23 del número, y compara el resultado con la última letra
 */
function validarNie(){
    let numero;
    let letras = "TRWAGMYFPDXBNJZSQVHLCKE";
    let nieTexto = document.getElementById("nieTexto").value;
    let pattern = /[XYZ]{1}\d{7}[A-Z]{1}$/;
    if(pattern.test(nieTexto)){
        numero = nieTexto.substring(0, nieTexto.length - 1);
        numero = numero.replace('X', 0);
        numero = numero.replace('Y', 1);
        numero = numero.replace('Z', 2);
        let letra = nieTexto.charAt(nieTexto.length - 1);
        numero = numero % 23;
        if(letra == letras[numero]){
            alert("NIE válido")
        }else{
            alert("NIE inválido");
        }
    }else{
        alert("No entiendo el NIE ...");
    }
}


/**
 * Comprueba si la cadena de entrada es una dirección IPv4 o IPv6 válida
 */
function validarIp(){
    let ip4Pattern = /^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
    let ip6Pattern = /(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))/;
    let ip = document.getElementById("ip").value;
    if(ip4Pattern.test(ip)){
        alert("Tu dirección ip es de tipo IPv4");
    }else if(ip6Pattern.test(ip)){
        alert("Tu dirección ip es de tipo IPv6");
    }else{
        alert("Desconozco esta dirección IP ...");
    }
}

function mostrarResultado(){
    let nombre = document.getElementById("nombre").value;
    let apellidos = document.getElementById("apellidos").value;
    let identificacion = document.getElementById("dniNie");
    if(identificacion.value == "dni"){
        let dni = document.getElementById("dniTexto").value;
    }else{
        let nie = document.getElementById("nieTexto").value;
    }
    let codigoPostal = document.getElementById("codigoPostal");
    if(codigoPostal.value == "otro"){
        let cpOtro = document.getElementById("cpOtro").value;
    }
    let fechaIda = document.getElementById("fechaIda").value;
    let numeroPersonas = document.getElementById("numeroPersonas").value;
    let telefonoFijo = document.getElementById("telefonoFijo").value;
    let telefonoMovil = document.getElementById("telefonoMovil").value;
    let residente = document.getElementById("residente");
    let email = document.getElementById("email").value;
    let redesSociales = document.getElementById("redesSociales");
    if(redesSociales.value == "si"){
        let instagram = document.getElementById("instagram").value;
        let twitter = document.getElementById("twitter").value;
    }
    let vehiculo = document.getElementById("vehiculo");
    if(vehiculo.value == "si"){
        let marca = document.getElementById("marcaVehiculo").value;
        let matricula = document.getElementById("matriculaVehiculo").value;
    }
    let ip = document.getElementById("ip").value;
    let motivo = document.getElementById("motivo").value;
}