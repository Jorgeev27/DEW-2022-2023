/* Creando una variable constante llamada DOM y asignándole un objeto con una propiedad llamada
obtenerResultado. */
const DOM = {
    obtenerResultado: document.getElementById("contenido")
};

/**
 * Hace una solicitud a la url y luego analiza la respuesta y luego llama a la función datosUsuarios
 * con los parámetros id, nombre, correo electrónico y nombre de usuario.
 */
function traer(){
    let url = 'https://jsonplaceholder.typicode.com/users';
    let solicitud = new XMLHttpRequest();
    solicitud.onreadystatechange = function(){
        if(solicitud.readyState == 4 && solicitud.status == 200){
            let json = JSON.parse(solicitud.responseText);
            for(let respuesta in json){
                datosUsuarios(json[respuesta].id, json[respuesta].name, json[respuesta].email, json[respuesta].username);
            }
        }
    }
    solicitud.open("GET", url, true);
    solicitud.send();
}

/**
 * Crea una fila de la tabla, luego crea un elemento de datos de la tabla para cada uno de los cuatro
 * parámetros y luego agrega los elementos de datos de la tabla a la fila de la tabla y luego agrega la
 * fila de la tabla a la tabla.
 * @param id - La identificación del usuario.
 * @param name - El nombre del parámetro.
 * @param email - La dirección de correo electrónico del usuario.
 * @param username - El nombre de usuario del usuario que desea buscar.
 */
function datosUsuarios(id, name, email, username){
    let tr = document.createElement("tr");
    let elementoId = document.createElement("td");
    let elementoName = document.createElement("td");
    let elementoEmail = document.createElement("td");
    let elementoUserName = document.createElement("td");
    elementoId.textContent = id;
    elementoName.textContent = name;
    elementoEmail.textContent = email;
    elementoUserName.textContent = username;
    DOM['obtenerResultado'].appendChild(tr);
    tr.appendChild(elementoId);
    tr.appendChild(elementoName);
    tr.appendChild(elementoEmail);
    tr.appendChild(elementoUserName);
}