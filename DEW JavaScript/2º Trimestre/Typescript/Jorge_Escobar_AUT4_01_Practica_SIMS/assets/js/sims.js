/* La clase Persona. */
var Persona = /** @class */ (function () {
    /**
     * La función constructora es una función especial que se llama cuando se crea un objeto.
     * @param {string} nombre - El nombre de la Persona.
     */
    function Persona(nombre) {
        this.nombre = nombre;
    }
    //GETTER Y SETTER DEL NOMBRE.
    Persona.prototype.getNombre = function () {
        return this.nombre;
    };
    Persona.prototype.setNombre = function (nombre) {
        this.nombre = nombre;
    };
    return Persona;
}());
/* La clase Salon implementa de la interfaz Zona. */
var Salon = /** @class */ (function () {
    /**
     * La función constructora es una función especial que se llama cuando se crea un objeto a partir de una clase.
     * @param {string} nombre - El nombre de la zona donde está ubicada la persona.
     * @param {string[]} frase - La frase de la zona donde está ubicada la persona.
     */
    function Salon(nombre, frase) {
        this.nombre = nombre;
        this.frase = frase;
    }
    //GETTER Y SETTER DEL NOMBRE.
    Salon.prototype.getNombre = function () {
        return this.nombre;
    };
    Salon.prototype.setNombre = function (nombre) {
        this.nombre = nombre;
    };
    //GETTER Y SETTER DE LA FRASE.
    Salon.prototype.getFrase = function () {
        return this.frase;
    };
    Salon.prototype.setFrase = function (frase) {
        this.frase = frase;
    };
    return Salon;
}());
/* La clase Cocina implementa de la interfaz Zona. */
var Cocina = /** @class */ (function () {
    /**
     * La función constructora es una función especial que se llama cuando se crea un objeto a partir de una clase.
     * @param {string} nombre - El nombre de la zona donde está ubicada la persona.
     * @param {string[]} frase - La frase de la zona donde está ubicada la persona.
     */
    function Cocina(nombre, frase) {
        this.nombre = nombre;
        this.frase = frase;
    }
    //GETTER Y SETTER DEL NOMBRE.
    Cocina.prototype.getNombre = function () {
        return this.nombre;
    };
    Cocina.prototype.setNombre = function (nombre) {
        this.nombre = nombre;
    };
    //GETTER Y SETTER DE LA FRASE.
    Cocina.prototype.getFrase = function () {
        return this.frase;
    };
    Cocina.prototype.setFrase = function (frase) {
        this.frase = frase;
    };
    return Cocina;
}());
/* La clase Banio implementa de la interfaz Zona. */
var Banio = /** @class */ (function () {
    /**
     * La función constructora es una función especial que se llama cuando se crea un objeto a partir de una clase.
     * @param {string} nombre - El nombre de la zona donde está ubicada la persona.
     * @param {string[]} frase - La frase de la zona donde está ubicada la persona.
     */
    function Banio(nombre, frase) {
        this.nombre = nombre;
        this.frase = frase;
    }
    //GETTER Y SETTER DEL NOMBRE.
    Banio.prototype.getNombre = function () {
        return this.nombre;
    };
    Banio.prototype.setNombre = function (nombre) {
        this.nombre = nombre;
    };
    //GETTER Y SETTER DE LA FRASE.
    Banio.prototype.getFrase = function () {
        return this.frase;
    };
    Banio.prototype.setFrase = function (frase) {
        this.frase = frase;
    };
    return Banio;
}());
/* La clase Dormitorio implementa de la interfaz Zona. */
var Dormitorio = /** @class */ (function () {
    /**
     * La función constructora es una función especial que se llama cuando se crea un objeto a partir de una clase.
     * @param {string} nombre - El nombre de la zona donde está ubicada la persona.
     * @param {string[]} frase - La frase de la zona donde está ubicada la persona.
     */
    function Dormitorio(nombre, frase) {
        this.nombre = nombre;
        this.frase = frase;
    }
    //GETTER Y SETTER DEL NOMBRE.
    Dormitorio.prototype.getNombre = function () {
        return this.nombre;
    };
    Dormitorio.prototype.setNombre = function (nombre) {
        this.nombre = nombre;
    };
    //GETTER Y SETTER DE LA FRASE.
    Dormitorio.prototype.getFrase = function () {
        return this.frase;
    };
    Dormitorio.prototype.setFrase = function (frase) {
        this.frase = frase;
    };
    return Dormitorio;
}());
/* Creando un nuevo objeto de la clase Salón. */
var salon = new Salon("salón", ["está viendo la televisión en el ", "está jugando a la PlayStation en el ", "está leyendo un libro en el ", "está mirando por la ventana en el "]);
/* Creando un nuevo objeto de la clase Cocina. */
var cocina = new Cocina("cocina", ["está cocinando en la ", "está comiendo en la ", "está lavando los cacharros en la ", "está limpiando el suelo en la "]);
/* Creando un nuevo objeto de la clase Banio. */
var banio = new Banio("baño", ["está duchándose en el ", "está afeitándose en el ", "está peinándose en el ", "está lavándose los dientes en el "]);
/* Creando un nuevo objeto de la clase Dormitorio. */
var dormitorio = new Dormitorio("dormitorio", ["está durmiendo en el ", "se está vistiendo en el ", "está recogiendo en el ", "está cargando el móvil en el "]);
/**
 * Función que devuelve una frase aleatoria del array de frases en el objeto que se le pasa, junto con el nombre del objeto y la hora actual.
 * @param {Zona} obj - Zona en la que se encuentra ubicada la persona.
 * @returns Frase aleatoria del array de frases, con el nombre de la zona y la hora actual.
 */
function frasePersonaDestino(obj) {
    var hora = new Date();
    var random = Math.ceil(Math.random() * (obj.frase.length - 0) + 0) - 1;
    return " " + obj.frase[random] + obj.nombre + " a la siguiente hora - " + hora.getHours() + ":" + hora.getMinutes() + ":" + hora.getSeconds();
}
/* Obtiene el elemento con el id "buttons" y lo asigna a la variable zonaUbicadaPersona. */
var zonaUbicadaPersona = document.getElementById("buttons");
/* Evento para los botones de cada Zona. */
zonaUbicadaPersona.addEventListener("click", function (e) {
    /* Convertir HTMLSelectElement en una cadena. */
    var persona = document.getElementById("names").value;
    if (persona != "") {
        var nombre = new Persona(persona);
        /* Conversión del tipo del elemento a un HTMLInputElement. */
        var zonaUbicadaPersona_1 = e.target.value;
        /* Obtiene el nombre de la persona. */
        var input = nombre.nombre;
        if (zonaUbicadaPersona_1 == "salon") {
            input += frasePersonaDestino(salon);
        }
        else if (zonaUbicadaPersona_1 == "cocina") {
            input += frasePersonaDestino(cocina);
        }
        else if (zonaUbicadaPersona_1 == "banio") {
            input += frasePersonaDestino(banio);
        }
        else if (zonaUbicadaPersona_1 == "dormitorio") {
            input += frasePersonaDestino(dormitorio);
        }
        /* Transmite el elemento con la identificación "input" a un HTMLInputElement y luego
        lo agrega al valor de la variable input. */
        document.getElementById("input").value += input + "\n\n";
    }
    else {
        alert("ERROR!!! Selecciona un nombre");
    }
});
