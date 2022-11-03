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