/* Obtener el elemento con el id "usuarios" del documento HTML. */
let usuarios = document. getElementById("usuarios");

class Usuario{
    /* Declarando las variables de la clase Usuario. */
    results;
    info;

    /**
     * La función constructora es una función especial que se llama cuando se crea un nuevo objeto.
     * @param results - El resultado de la búsqueda de usuarios.
     * @param info - La info de los usuarios:
     */
    constructor(results, info){
        this.results = results;
        this.info = info;
    }

    //GETTER Y SETTER DE RESULTS DE LOS USUARIOS
    get getResults(){
        return this.results;
    }

    set setResults(results){
        this.results = results;
    }

    //GETTER Y SETTER DE LA INFO DE LOS USUARIOS
    get getInfo(){
        return this.info;
    }

    set setInfo(info){
        this.info = info;
    }
}

/* Creando una nueva instancia de la clase Usuario. */
let usuario = new Usuario(results, info);

/**
 * Hace una solicitud a la API y luego analiza la respuesta.
 */
function respuestaApi(){
    let url = 'https://randomuser.me/api/';
    let solicitud = new XMLHttpRequest();
    solicitud.onreadystatechange = function(){
        if(solicitud.readyState == 4 && solicitud.status == 200){
            let json = JSON.parse(solicitud.responseText);
            for(let respuesta in json){
                datosUsuarios(json[respuesta].name, json[respuesta].email, json[respuesta].direction);
            }
        }
    }
    solicitud.open("GET", url, true);
    solicitud.send();
}

function datosUsuarios(name, email, direction){
    
}