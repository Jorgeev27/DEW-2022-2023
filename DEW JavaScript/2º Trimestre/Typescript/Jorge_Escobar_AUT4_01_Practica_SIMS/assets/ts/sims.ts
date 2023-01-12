/* Definición de la estructura de la Interfaz Zona. */
interface Zona {
    nombre: string;
    frase: string[];
}

/* La clase Persona. */
class Persona {
    //Definición del atributo de la clase Persona.
    public nombre: string;

    /**
     * La función constructora es una función especial que se llama cuando se crea un objeto.
     * @param {string} nombre - El nombre de la Persona.
     */
    constructor(nombre: string) {
        this.nombre = nombre;
    }

    //GETTER Y SETTER DEL NOMBRE.
    public getNombre(){
        return this.nombre;
    }

    public setNombre(nombre: string){
        this.nombre = nombre;
    }
}

/* La clase Salon implementa de la interfaz Zona. */
class Salon implements Zona {
    //Definición de los atributos de la clase Salon.
    nombre: string;
    frase: string[];

    
    /**
     * La función constructora es una función especial que se llama cuando se crea un objeto a partir de una clase.
     * @param {string} nombre - El nombre de la zona donde está ubicada la persona.
     * @param {string[]} frase - La frase de la zona donde está ubicada la persona.
     */
    constructor(nombre: string, frase: string[]) {
        this.nombre = nombre;
        this.frase = frase;
    }

    //GETTER Y SETTER DEL NOMBRE.
    public getNombre(){
        return this.nombre;
    }

    public setNombre(nombre: string){
        this.nombre = nombre;
    }

    //GETTER Y SETTER DE LA FRASE.
    public getFrase(){
        return this.frase;
    }

    public setFrase(frase: string[]){
        this.frase = frase;
    }
}

/* La clase Cocina implementa de la interfaz Zona. */
class Cocina implements Zona {
    //Definición de los atributos de la clase Cocina.
    nombre: string;
    frase: string[];

    /**
     * La función constructora es una función especial que se llama cuando se crea un objeto a partir de una clase.
     * @param {string} nombre - El nombre de la zona donde está ubicada la persona.
     * @param {string[]} frase - La frase de la zona donde está ubicada la persona.
     */
    constructor(nombre: string, frase: string[]) {
        this.nombre = nombre;
        this.frase = frase;
    }

    //GETTER Y SETTER DEL NOMBRE.
    public getNombre(){
        return this.nombre;
    }

    public setNombre(nombre: string){
        this.nombre = nombre;
    }

    //GETTER Y SETTER DE LA FRASE.
    public getFrase(){
        return this.frase;
    }

    public setFrase(frase: string[]){
        this.frase = frase;
    }
}

/* La clase Banio implementa de la interfaz Zona. */
class Banio implements Zona {
    //Definición de los atributos de la clase Banio.
    nombre: string;
    frase: string[];

    /**
     * La función constructora es una función especial que se llama cuando se crea un objeto a partir de una clase.
     * @param {string} nombre - El nombre de la zona donde está ubicada la persona.
     * @param {string[]} frase - La frase de la zona donde está ubicada la persona.
     */
    constructor(nombre: string, frase: string[]) {
        this.nombre = nombre;
        this.frase = frase;
    }

    //GETTER Y SETTER DEL NOMBRE.
    public getNombre(){
        return this.nombre;
    }

    public setNombre(nombre: string){
        this.nombre = nombre;
    }

    //GETTER Y SETTER DE LA FRASE.
    public getFrase(){
        return this.frase;
    }

    public setFrase(frase: string[]){
        this.frase = frase;
    }
}

/* La clase Dormitorio implementa de la interfaz Zona. */
class Dormitorio implements Zona {
    //Definición de los atributos de la clase Dormitorio.
    nombre: string;
    frase: string[];

    /**
     * La función constructora es una función especial que se llama cuando se crea un objeto a partir de una clase.
     * @param {string} nombre - El nombre de la zona donde está ubicada la persona.
     * @param {string[]} frase - La frase de la zona donde está ubicada la persona.
     */
    constructor(nombre: string, frase: string[]) {
        this.nombre = nombre;
        this.frase = frase;
    }

    //GETTER Y SETTER DEL NOMBRE.
    public getNombre(){
        return this.nombre;
    }

    public setNombre(nombre: string){
        this.nombre = nombre;
    }

    //GETTER Y SETTER DE LA FRASE.
    public getFrase(){
        return this.frase;
    }

    public setFrase(frase: string[]){
        this.frase = frase;
    }
}

/* Creando un nuevo objeto de la clase Salón. */
let salon = new Salon("salón", ["está viendo la televisión en el ", "está jugando a la PlayStation en el ", "está leyendo un libro en el ", "está mirando por la ventana en el "]);
/* Creando un nuevo objeto de la clase Cocina. */
let cocina =  new Cocina("cocina",["está cocinando en la ", "está comiendo en la ", "está lavando los cacharros en la ", "está limpiando el suelo en la "]);
/* Creando un nuevo objeto de la clase Banio. */
let banio = new Banio("baño", ["está duchándose en el ", "está afeitándose en el ", "está peinándose en el ", "está lavándose los dientes en el "]);
/* Creando un nuevo objeto de la clase Dormitorio. */
let dormitorio = new Dormitorio("dormitorio", ["está durmiendo en el ", "se está vistiendo en el ", "está recogiendo en el ", "está cargando el móvil en el "]);

/**
 * Función que devuelve una frase aleatoria del array de frases en el objeto que se le pasa, junto con el nombre del objeto y la hora actual.
 * @param {Zona} obj - Zona en la que se encuentra ubicada la persona.
 * @returns Frase aleatoria del array de frases, con el nombre de la zona y la hora actual.
 */
function frasePersonaDestino(obj: Zona) {
    let hora = new Date();
    let random = Math.ceil(Math.random() * (obj.frase.length - 0) + 0) - 1;
    return " " + obj.frase[random] + obj.nombre + " a la siguiente hora - " + hora.getHours() + ":" + hora.getMinutes() + ":" + hora.getSeconds();
}

/* Obtiene el elemento con el id "buttons" y lo asigna a la variable zonaUbicadaPersona. */
let zonaUbicadaPersona = document.getElementById("buttons");



/* Evento para los botones de cada Zona. */
zonaUbicadaPersona.addEventListener("click", e => {
    /* Convertir HTMLSelectElement en una cadena. */
    let persona = (<HTMLSelectElement>document.getElementById("names")).value;
    if (persona != "") {
        let nombre = new Persona(persona);
        /* Conversión del tipo del elemento a un HTMLInputElement. */
        let zonaUbicadaPersona = (<HTMLInputElement>e.target).value;
        /* Obtiene el nombre de la persona. */
        let input = nombre.nombre;
        if (zonaUbicadaPersona == "salon") {
            input += frasePersonaDestino(salon);
        } else if (zonaUbicadaPersona == "cocina") {
            input += frasePersonaDestino(cocina);
        } else if (zonaUbicadaPersona == "banio") {
            input += frasePersonaDestino(banio);
        } else if (zonaUbicadaPersona == "dormitorio") {
            input += frasePersonaDestino(dormitorio);
        }
        /* Transmite el elemento con la identificación "input" a un HTMLInputElement y luego
        lo agrega al valor de la variable input. */
        (<HTMLInputElement>document.getElementById("input")).value += input + "\n\n";
    }else{
        alert("ERROR!!! Selecciona un nombre");
    }
});