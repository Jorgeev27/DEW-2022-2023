/* Creando una variable constante llamada DOM y asignándole un objeto con una propiedad llamada
obtenerResultado. */
const DOM = {
    obtenerResultado: document.getElementById("contenido")
};

/**
 * Obtenemos la URL, luego convertimos el resultado a json, luego recorremos el json y creamos una
 * nueva fila para cada usuario
 */
function traer(){
    let url = 'https://jsonplaceholder.typicode.com/users';
    fetch(url)
    .then(resultado => resultado.json().then(json => {
        json.forEach(element => {
            const{id, name, email, username} = element;
            datosUsuarios(id, name, email, username);
        });
    }));
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