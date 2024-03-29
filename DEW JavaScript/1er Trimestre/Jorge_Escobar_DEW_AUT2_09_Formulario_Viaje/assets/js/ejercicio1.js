/* Obtener los elementos del archivo HTML. */

//RESULTADO PERSONA
let resultadoPersona = document.getElementById("resultadoPersona");

//DNI-NIE.
let nieTexto = document.getElementById("nieTexto");
let dniTexto = document.getElementById("dniTexto");
let dniNie = document.getElementById("dniNie");

//VEHICULO.
let vehiculo = document.getElementById("vehiculo");
let marcaVehiculo = document.getElementById("marcaVehiculo");
let matriculaVehiculo = document.getElementById("matriculaVehiculo");

//CÓDIGO POSTAL.
let codigoPostal = document.getElementById("codigoPostal");
let cpOtro = document.getElementById("cpOtro");
let cpOtro2 = document.getElementById("cpOtro2");
let aniadirOtro = document.getElementById("aniadirOtro");

//REDES SOCIALES.
let redesSociales = document.getElementById("redesSociales");
let instagram = document.getElementById("instagram");
let instagram2 = document.getElementById("instagram2");
let twitter = document.getElementById("twitter");
let twitter2 = document.getElementById("twitter2");

/* Ocultar los elementos del archivo HTML. */
onload = () =>{
    //DNI-NIE.
    dniTexto.style.display = "none";
    nieTexto.style.display = "none";

    //VEHICULO.
    marcaVehiculo.style.display = "none";
    matriculaVehiculo.style.display = "none";

    //CÓDIGO POSTAL.
    cpOtro.style.display = "none";
    cpOtro2.style.display = "none";
    aniadirOtro.style.display = "none";

    //REDES SOCIALES.
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
     * @param motivos - El motivo del usuario.
     */
    constructor(nombre, apellidos, identificacion, codigoPostal, fechaIda, numeroPersonas, telefonoFijo, telefonoMovil, residente, email, instagram="no", twitter="no", marca ="", matricula="", motivos){
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
        this.motivos = motivos;
    }

    /**
     * GETTER Y SETTER DE NOMBRE.
     */
    get getNombre(){
        return this.nombre;
    }

    set setNombre(nombre){
        this.nombre = nombre;
    }

    /**
     * GETTER Y SETTER DE APELLIDOS.
     */
    get getApellidos(){
        return this.apellidos;
    }

    set setApellidos(apellidos){
        this.apellidos = apellidos;
    }

    /**
     * GETTER Y SETTER DE IDENTIFICACIÓN.
     */
    get getIdenficacion(){
        return this.identificacion;
    }

    set setIdentificacion(identificacion){
        this.identificacion = identificacion;
    }

    /**
     * GETTER Y SETTER DE CÓDIGO POSTAL.
     */
    get getCodigoPostal(){
        return this.codigoPostal;
    }

    set setCodigoPostal(codigoPostal){
        this.codigoPostal = codigoPostal;
    }

    /**
     * GETTER Y SETTER DE FECHA DE IDA.
     */
    get getFechaIda(){
        return this.fechaIda;
    }

    set setFechaIda(fechaIda){
        this.fechaIda = fechaIda;
    }

    /**
     * GETTER Y SETTER DE NÚMERO DE PERSONAS.
     */
    get getNumeroPersonas(){
        return this.numeroPersonas;
    }

    set setNumeroPersonas(numeroPersonas){
        this.numeroPersonas = numeroPersonas;
    }

    /**
     * GETTER Y SETTER DE TELÉFONO FIJO.
     */
    get getTelefonoFijo(){
        return this.telefonoFijo;
    }

    set setTelefonoFijo(telefonoFijo){
        this.telefonoFijo = telefonoFijo;
    }

    /**
     * GETTER Y SETTER DE TELÉFONO MÓVIL.
     */
    get getTelefonoMovil(){
        return this.telefonoMovil;
    }

    set setTelefonoMovil(telefonoMovil){
        this.telefonoMovil = telefonoMovil;
    }

    /**
     * GETTER Y SETTER DE RESIDENTE O NO RESIDENTE.
     */
    get getResidente(){
        return this.residente;
    }

    set setResidente(residente){
        this.residente = residente;
    }

    /**
     * GETTER Y SETTER DE EMAIL.
     */
    get getEmail(){
        return this.email;
    }

    set setEmail(email){
        this.email = email;
    }

    /**
     * GETTER Y SETTER DE INSTAGRAM.
     */
    get getInstagram(){
        return this.instagram;
    }

    set setInstagram(instagram){
        this.instagram = instagram;
    }

    /**
     * GETTER Y SETTER DE TWITTER.
     */
    get getTwitter(){
        return this.twitter;
    }

    set setTwitter(twitter){
        this.twitter = twitter;
    }

    /**
     * GETTER Y SETTER DE MARCA DE VEHÍCULO.
     */
    get getMarca(){
        return this.marca;
    }

    set setMarca(marca){
        this.marca = marca;
    }

    /**
     * GETTER Y SETTER DE MATRÍCULA DE VEHÍCULO.
     */
    get getMatricula(){
        return this.matricula;
    }

    set setMatricula(matricula){
        this.matricula = matricula;
    }

    /**
     * GETTER Y SETTER DE MOTIVOS DEL VIAJE.
     */
    get getMotivos(){
        return this.motivos;
    }

    set setMotivos(motivos){
        this.motivos = motivos;
    }
}

/**
 * Valida un nombre, que debe comenzar con una letra mayúscula, seguido de cualquier número de letras
 * minúsculas, y opcionalmente seguido de un espacio y cualquier número de nombres.
 */
function validarNombre(){
    let pattern = /^(([A-Z]{1}([a-z]?[áéíóú]?[ñ]?)+[\s]?)*)$/;
    let nombre = document.getElementById("nombre").value;
    if(pattern.test(nombre)){
        alert("Nombre válido.");
    }else{
        alert("ERROR!! Desconozco ese nombre ...");
    }
}

/**
 * Comprueba si el valor del campo de entrada con el id "apellidos" coincide con el patrón de expresión
 * regular. Si lo hace, muestra un mensaje de alerta que dice "Apellidos válido". Si no es así, muestra
 * un mensaje de alerta que dice "Desconozco esos apellidos ..."
 */
function validarApellidos(){
    let pattern = /^(([A-Z]{1}([a-z]?[áéíóú]?[ñ]?)+[\s]?)*)$/;
    let apellidos = document.getElementById("apellidos").value;
    if(pattern.test(apellidos)){
        alert("Apellidos válido.");
    }else{
        alert("ERROR!! Desconozco esos apellidos ...");
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
 * Valida un número de DNI (Documento Nacional de Identidad) español y la letra correspondiente.
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
            alert("DNI inválido.");
        }else{
            alert("DNI válido.");
        }
    }else{
        alert("ERROR!! No entiendo el DNI ...");
    }
}

/**
 * Toma el número NIE, quita la última letra, reemplaza la primera letra por un número, calcula el
 * módulo del número entre 23, y compara el resultado con la última letra.
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
            alert("NIE válido.");
        }else{
            alert("NIE inválido.");
        }
    }else{
        alert("ERROR!! No entiendo el NIE ...");
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
 * Si el valor del elemento de selección no es "otro", oculta el elemento de entrada y el elemento de botón.
 */
function aniadirOtroCP(){
    let pattern = /^\d{5}$/;
    let codPostal = document.getElementById("codigoPostal");
    let otroCP = document.getElementById("cpOtro").value;
    if(pattern.test(otroCP)){
        let option = document.createElement("option");
        option.text = otroCP;
        codPostal.add(option);
        alert("Se ha añadido el nuevo codigo postal.");
        option.setAttribute("selected", "selected");
        cpOtro.style.display = "none";
        cpOtro2.style.display = "none";
        aniadirOtro.style.display = "none";
    }else{
        alert("ERROR!! Sólo 5 dígitos de 0 a 9.");
    }
}

/**
 * Valida que el número de personas sea mayor a 0 y que solo contenga dígitos.
 */
function validarNumeroPersonas(){
    let pattern = /^[0-9]$/;
    let numeroPersonas = document.getElementById("numeroPersonas").value;
    if(!pattern.test(numeroPersonas)){
        if(numeroPersonas < 1){
            alert("ERROR!! El número de personas tiene que ser mayor a 0.");
        }
    }else{
        alert("Número de personas válido.");
    }
}

/**
 * Valida un número de teléfono con el formato de 9 dígitos.
 */
function validarTelefonoFijo(){
    let pattern = /^[8-9]\d{8}$/;
    let telefonoFijo = document.getElementById("telefonoFijo").value;
    if(pattern.test(telefonoFijo)){
        alert("Teléfono Fijo válido.");
    }else{
        alert("ERROR!! Teléfono Fijo invalido. Los teléfonos fijos tienen que empezar por 8 o 9.");
    }
}


/**
 * Comprueba si el número de teléfono es válido, si lo es, alerta al usuario que el número de teléfono
 * es válido, si no lo es, alerta al usuario que el número de teléfono no es válido.
 */
function validarTelefonoMovil(){
        let pattern = /^(\+34)?[6-7]\d{8}$/;
        let global = /^(\+\d{1,3})\d{9}$/;
        let telefonoMovil = document.getElementById("telefonoMovil").value;
        if(pattern.test(telefonoMovil)){
            alert("Teléfono Móvil válido.");
        }else if(global.test(telefonoMovil) && (telefonoMovil.substring(0,3) !== '+34')){
            alert("Teléfono Móvil válido.");
        }else{
            alert("ERROR!! Teléfono Móvil invalido. Los teléfonos móviles tienen que empezar con el prefijo (+34) o directamente por 6 o 7.");
        }
}

/**
 * Devuelve verdadero si el valor de la entrada de residente es "si" y falso si el valor de la entrada
 * de residente es "no".
 * @returns un valor booleano.
 */
function validarResidente(){
    let residente = document.getElementById("residente").value;
    if(residente.value == "si"){
        return true;
    }else if(residente.value == "no"){
        return false;
    }else{
        return false;
    }
}

/**
 * Toma el valor de la entrada con el id "correo electrónico" y lo compara con el patrón de expresión
 * regular. Si el patrón coincide, avisa "Email válido". Si el patrón no coincide, alerta "Email
 * invalido".
 */
function validarEmail(){
    let pattern = /^[\w.-]+@([A-Z0-9-]+\.)[A-Z]{2,3}$/i;
    let email = document.getElementById("email").value;
    if(pattern.test(email)){
        alert("Email válido.");
    }else{
        alert("ERROR!!! Email inválido. No has seguido las indicaciones de email.");
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
 * Toma el valor de la entrada con el id "instagram" y comprueba. 
 * Si lo hace, avisa a "Instagram válido". Si no lo hace, alerta "Instagram invalido".
 */
function validarInstagram(){
    let pattern = /^[a-z0-9-_.]+$/;
    let instagram = document.getElementById("instagram").value;
    if(pattern.test(instagram)){
        alert("Instagram válido.");
    }else{
        alert("ERROR!! Instagram invalido. No has seguido las verificaciones de Instagram.");
    }
}

/**
 * Toma el valor de la entrada con el id "twitter" y comprueba.
 * Si lo hace, avisa a "Twitter válido". Si no lo hace, alerta "Twitter invalido".
 */
function validarTwitter(){
    let pattern = /^@(\w){1,15}$/;
    let twitter = document.getElementById("twitter").value;
    if(pattern.test(twitter)){
        alert("Twitter válido.");
    }else{
        alert("ERROR!! Twitter invalido. No has seguido las verificaciones de Twitter.");
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
 * Valida que el valor de la entrada con el id "marcaVehiculo" es una cadena que comienza con una letra
 * mayúscula, seguida de cero o más letras minúsculas y cero o más espacios.
 */
function validarMarcaVehiculo(){
    let pattern = /^(([A-Z]{1}([a-z]?[áéíóú]?[ñ]?)+[\s]?)*)$/;
    let marcaVehiculo = document.getElementById("marcaVehiculo").value;
    if(pattern.test(marcaVehiculo)){
        alert("Marca del vehículo válido.");
    }else{
        alert("ERROR!! Marca del vehículo inválido. La marca del vehículo tiene que empezar por letra mayúscula.");
    }
}

/**
 * Valida la matrícula de un vehículo.
 */
function validarMatriculaVehiculo(){
    let pattern = /^\d{4}-[A-Z]{3}$/;
    let matriculaVehiculo = document.getElementById("matriculaVehiculo").value;
    if(pattern.test(matriculaVehiculo)){
        alert("Matrícula del vehículo válido.");
    }else{
        alert("ERROR!! Matrícula del vehículo inválido. La matrícula del vehículo son 4 dígitos, seguido de un guión(-) y 3 letras correspondientes.");
    }
}

/**
 * Comprueba si la cadena de entrada es una dirección IPv4 o IPv6 válida.
 */
function validarIp(){
    let ip4Pattern = /^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
    let ip6Pattern = /(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))/;
    let ip = document.getElementById("ip").value;
    if(ip4Pattern.test(ip)){
        alert("Tu dirección ip es de tipo IPv4.");
    }else if(ip6Pattern.test(ip)){
        alert("Tu dirección ip es de tipo IPv6.");
    }else{
        alert("ERROR!! Desconozco esta dirección IP ...");
    }
}


/**
 * Valida la entrada de un área de texto, asegurándose de que la primera letra de cada línea sea
 * mayúscula.
 */
function validarMotivo(){
    let pattern = /^[A-Z]{1}/;
    let motivo = document.getElementById("motivo").value;
    /* El código anterior está dividiendo la cadena en una matriz de palabras. */
    let motivoArray = motivo.split(/[\n\s]+/);

    /* Eliminación de cadenas vacías y nuevas líneas de la matriz. */
    for(let i = 0; i < motivoArray.length; i++){
        if(motivoArray[i] == ""){
            motivoArray.splice(i, 1);
            i--;
        }
        if(motivoArray[i] == "\n"){
            motivoArray.splice(i, 1);
            i--;
        }
    }

    if(!pattern.test(motivo)){
        alert("ERROR!! Motivo inválido. La primera letra tiene que empezar por mayúscula.");
    }
}


/**
 * Crea un nuevo objeto llamado `persona` y le asigna los valores de las variables que se le pasan, y
 * luego muestra los datos.
 */
function mostrarResultado(){
    let nombre = document.getElementById("nombre").value;
    let apellidos = document.getElementById("apellidos").value;
    let identificacion = document.getElementById("dniNie");
    if(identificacion.value == "dni"){
        identificacion = document.getElementById("dniTexto").value;
    }else{
        identificacion = document.getElementById("nieTexto").value;
    }
    let codigoPostal = document.getElementById("codigoPostal").value;
    let fechaIda = document.getElementById("fechaIda").value;
    let numeroPersonas = document.getElementById("numeroPersonas").value;
    let telefonoFijo = document.getElementById("telefonoFijo").value;
    let telefonoMovil = document.getElementById("telefonoMovil").value;
    let residente = document.getElementById("residente").value;
    let email = document.getElementById("email").value;
    let redesSociales = document.getElementById("redesSociales");
    let instagram;
    let twitter;
    if(redesSociales.value == "si"){
        instagram = document.getElementById("instagram").value;
        twitter = document.getElementById("twitter").value;
    }
    let vehiculo = document.getElementById("vehiculo");
    let marcaVehiculo;
    let matriculaVehiculo;
    if(vehiculo.value == "si"){
        marcaVehiculo = document.getElementById("marcaVehiculo").value;
        matriculaVehiculo = document.getElementById("matriculaVehiculo").value;
    }
    let motivo = document.getElementById("motivo").value;
    motivo = motivo.toUpperCase();

/* Creando un nuevo objeto llamado persona y asignándole los valores de las variables que se le pasan y mostrando los datos. */
    let persona = new Persona(nombre, apellidos, identificacion, codigoPostal, fechaIda, numeroPersonas, telefonoFijo, telefonoMovil, residente, email, instagram, twitter, marcaVehiculo, matriculaVehiculo, motivo);
    
    /* Iterando a través del objeto e imprimiendo la clave y el valor de cada propiedad. */
    resultadoPersona.innerHTML = "";
    for(const [clave, valor] of Object.entries(persona)){
        resultadoPersona.innerHTML += clave + ": " + valor + "<br/>";
    }

    /* Comprobando si hay una fecha en el motivo. */
    let motivoFecha = /^([\d]{1,2}(\/){1})*[\d]{4}$/gm;
    if(motivoFecha.test(motivo)){
        resultadoPersona.innerHTML += "Hay fechas en el motivo" + "<br/>";
    }


    /* El código anterior está contando el número de palabras en el área de texto. */
    let contadorEspacios = motivo.split(/[\s]+/);
    if(contadorEspacios == ""){
        contadorEspacios.length = 0;
    }
    resultadoPersona.innerHTML += "Contador de palabras: " + contadorEspacios.length;
}