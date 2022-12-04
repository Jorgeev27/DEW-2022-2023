/**
 * Toma una cadena, pone en mayúscula la primera letra y pone en minúsculas el resto.
 * @param texto - El texto que desea escribir en mayúsculas.
 * @returns La primera letra de la cadena se devuelve en mayúsculas y el resto de la cadena se devuelve en minúsculas.
 */
function primeraMayus(texto){
  return texto[0].toUpperCase() + texto.slice(1).toLowerCase();
}

/**
 * Toma un objeto de usuario y un elemento div, y llena el div con los datos del usuario.
 * @param capaUsuario - el div donde se mostrará la información del usuario
 * @param usuario - el objeto de usuario
 */
function rellenaUsuario(capaUsuario, usuario){
  let foto = usuario.picture.large;
  let mail = usuario.email;
  let nombre = usuario.name.first;
  let apellido = usuario.name.last;
  let calle = usuario.location.street.number + " " + usuario.location.street.name;
  let ciudad = usuario.location.city;
  let estado = usuario.location.state;
  
  capaUsuario.innerHTML += `<figure>` + `<img src='${foto}' alt='foto'>` + `</figure>` + `<p>${nombre} ${apellido}</p>` + `<p>${mail}</p>` + `<p>${calle}</p>` + 
  `${primeraMayus(ciudad)}, (${primeraMayus(estado)})</p>` + `<p><button>Cambiar</button></p>`;
}

/**
 * Cuando se hace clic en el botón, el usuario se reemplaza por un nuevo usuario y el botón se vuelve a
 * agregar al nuevo usuario.
 * @param capaUsuario - El div que contiene la información del usuario.
 */
function generarEventoBoton(capaUsuario){
  let boton = capaUsuario.querySelector("button");
  boton.addEventListener("click",(ev) => {
    capaUsuario.textContent = "Esperando usuario nuevo...";
    fetch('https://randomuser.me/api')
    .then(resp => resp.json())
    .then(data => {
      let usuario = data.results[0];
      rellenaUsuario(capaUsuario,usuario);
      generarEventoBoton(capaUsuario);
    })
    .catch(error => {
      capaUsuario.innerHTML += `<p class='error'>${error}</p>` + `<p><button>Intentar de nuevo</button></p>`;
    });    
  })
}

  /* Seleccionando el elemento principal y cambiando el contenido del texto a "Esperando usuarios..." */
  var main = document.querySelector("main");
  main.textContent = "Esperando usuarios...";
  
  /* Obtiene los datos de la API y luego crea un div para cada usuario y luego agrega el div al
  elemento principal. */
  fetch('https://randomuser.me/api/?results=10')
  .then((resp) => resp.json())
  .then(data => {
    let datos = data.results;
    main.textContent = "";
    for(let usuario of datos){
      let divUsuario = document.createElement("div");
      rellenaUsuario(divUsuario,usuario);
      generarEventoBoton(divUsuario);
      main.appendChild(divUsuario);
    }
  })
  .catch(error => {
    main.innerHTML += `<p class='error'>${error}</p>`;
  });