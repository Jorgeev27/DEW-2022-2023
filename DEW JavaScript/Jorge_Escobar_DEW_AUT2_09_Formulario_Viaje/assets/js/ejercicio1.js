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

//REDES SOCIALES
let redesSociales = document.getElementById("redesSociales");
let instagram = document.getElementById("instagram");
let instagram2 = document.getElementById("instagram2");
let twitter = document.getElementById("twitter");
let twitter2 = document.getElementById("twitter2");

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
     * Devuelve el valor de la propiedad nombre.
     * @returns El valor de la variable nombre.
     */
    get getNombre(){
        return this.nombre;
    }

    /**
     * Toma un parámetro llamado nombre y establece el valor de la propiedad
     * nombre al valor del parámetro nombre.
     * @param nombre - El nombre de la variable.
     */
    set setNombre(nombre){
        this.nombre = nombre;
    }

    /**
     * Devuelve el valor de la propiedad de los apellidos.
     * @returns El valor de la variable apellidos.
     */
    get getApellidos(){
        return this.apellidos;
    }

    /**
     * Establece el valor de la variable apellidos.
     * @param apellidos - El apellido de la persona.
     */
    set setApellidos(apellidos){
        this.apellidos = apellidos;
    }

    /**
     * Devuelve el valor de la propiedad de identificación.
     * @returns El valor de la variable identificación.
     */
    get getIdenficacion(){
        return this.identificacion;
    }

    /**
     * Establece el valor de la variable identificación.
     * @param identificacion - El número de identificación de la persona.
     */
    set setIdentificacion(identificacion){
        this.identificacion = identificacion;
    }

    /**
     * Devuelve el valor de la propiedad codigoPostal.
     * @returns El valor de la variable codigoPostal.
     */
    get getCodigoPostal(){
        return this.codigoPostal;
    }

    /**
     * Establece el valor de la variable codigoPostal.
     * @param codigoPostal - El código postal de la dirección.
     */
    set setCodigoPostal(codigoPostal){
        this.codigoPostal = codigoPostal;
    }

    /**
     * Esta función devuelve el valor de la variable fechaIda.
     * @returns La fecha del viaje.
     */
    get getFechaIda(){
        return this.fechaIda;
    }

    /**
     * Establece el valor de la variable fechaIda.
     * @param fechaIda - La fecha del vuelo.
     */
    set setFechaIda(fechaIda){
        this.fechaIda = fechaIda;
    }

    /**
     * Devuelve el valor de la variable numeroPersonas.
     * @returns El número de personas en el grupo.
     */
    get getNumeroPersonas(){
        return this.numeroPersonas;
    }

    /**
     * Establece el valor de la variable numeroPersonas al valor de la
     * variable numeroPersonas
     * @param numeroPersonas - Número de personas en el grupo.
     */
    set setNumeroPersonas(numeroPersonas){
        this.numeroPersonas = numeroPersonas;
    }

    /**
     * Devuelve el valor de la variable telefonoFijo.
     * @returns El valor de la variable telefonoFijo.
     */
    get getTelefonoFijo(){
        return this.telefonoFijo;
    }

    /**
     * Establece el valor de la variable telefonoFijo.
     * @param telefonoFijo - El número de teléfono a validar.
     */
    set setTelefonoFijo(telefonoFijo){
        this.telefonoFijo = telefonoFijo;
    }

    /**
     * Devuelve el valor de la variable telefonoMovil.
     * @returns El valor de la variable telefonoMovil.
     */
    get getTelefonoMovil(){
        return this.telefonoMovil;
    }

    /**
     * Establece el valor de la variable telefonoMovil.
     * @param telefonoMovil - El número de teléfono.
     */
    set setTelefonoMovil(telefonoMovil){
        this.telefonoMovil = telefonoMovil;
    }

    /**
     * Devuelve el valor de la variable residente
     * @returns El valor de la variable residente.
     */
    get getResidente(){
        return this.residente;
    }

    /**
     * Establece el valor de la variable residente.
     * @param residente - Que se usará para establecer el residente del ticket.
     */
    set setResidente(residente){
        this.residente = residente;
    }

    /**
     * Devuelve la propiedad de correo electrónico de la persona.
     * @returns La dirección de correo electrónico de la persona.
     */
    get getEmail(){
        return this.email;
    }

    /**
     * Toma un parámetro de correo electrónico y establece la propiedad de correo
     * electrónico en el parámetro de correo electrónico.
     * @param email - La dirección de correo electrónico del usuario.
     */
    set setEmail(email){
        this.email = email;
    }

    /**
     * Devuelve el valor de la propiedad de instagram.
     * @returns La variable de instagram.
     */
    get getInstagram(){
        return this.instagram;
    }

    /**
     * Establece la variable de instagram
     * @param instagram - El nombre de usuario de Instagram.
     */
    set setInstagram(instagram){
        this.instagram = instagram;
    }

    /**
     * Devuelve el valor de la propiedad de twitter.
     * @returns El nombre de usuario de twitter.
     */
    get getTwitter(){
        return this.twitter;
    }

    /**
     * Establece la variable de twitter
     * @param twitter - El nombre de usuario de twitter.
     */
    set setTwitter(twitter){
        this.twitter = twitter;
    }

    /**
     * Devuelve el valor de la propiedad marca.
     * @returns La marca del coche.
     */
    get getMarca(){
        return this.marca;
    }

    /**
     * Toma un parámetro marca y establece el valor de la variable marca al valor
     * del parámetro marca.
     * @param marca - La marca del coche.
     */
    set setMarca(marca){
        this.marca = marca;
    }

    /**
     * Devuelve el valor de la propiedad matricula.
     * @returns La matrícula del coche.
     */
    get getMatricula(){
        return this.matricula;
    }

    /**
     * Establece el valor de la variable matricula.
     * @param matricula - La matrícula del coche.
     */
    set setMatricula(matricula){
        this.matricula = matricula;
    }

    /**
     * Devuelve el valor de la variable direccionIP.
     * @returns La dirección IP.
     */
    get getDireccionIP(){
        return this.direccionIP;
    }

    /**
     * Establece el valor de la variable direccionIP.
     * @param direccionIP - La dirección IP.
     */
    set setDireccionIP(direccionIP){
        this.direccionIP = direccionIP;
    }

    /**
     * Devuelve el valor de la variable motivos.
     * @returns Se devuelve el método motivos.
     */
    get getMotivos(){
        return this.motivos;
    }

    /**
     * Establece el valor de la variable motivos al valor de la variable motivos.
     * @param motivos - La lista de razones del usuario.
     */
    set setMotivos(motivos){
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
 * elemento de entrada con el id "cpOtro", de lo contrario se oculta
 */
function mostrarOtroCP(){
    if(codigoPostal.value == "otro"){
        cpOtro.style.display = "block";
        cpOtro2.style.display = "block";
    }else{
        cpOtro.style.display = "none";
        cpOtro2.style.display = "none";
    }
}