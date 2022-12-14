/* Obtener los elementos del archivo HTML. */
let formulario = document.getElementById("formulario");
let nombre = document.getElementById("nombre");
let apellidos = document.getElementById("apellidos");
let hombre = document.getElementById("hombre");
let mujer = document.getElementById("mujer");
let edad = document.getElementById("edad");
let colorFav = document.getElementById("colorFav");

let formularioCiclos = document.getElementById("formularioCiclos");
let formularioModulos = document.getElementById("formularioModulos");
let formularioCursos = document.getElementById("formularioCursos");
let asir = document.getElementById("asir");
let daw = document.getElementById("daw");
let dam = document.getElementById("dam");

let opcionCursos = document.getElementsByName("ciclo");
let primeroModulos = document.getElementsByName("primeroModulos");
let segundoModulos = document.getElementsByName("segundoModulos");

let cursos = document.getElementById("curso");
let pro = document.getElementById("pro");
let priPro = document.getElementById("priPro");
let ets = document.getElementById("ets");
let priEts = document.getElementById("priEts");
let fol = document.getElementById("fol");
let priFol = document.getElementById("priFol");
let dew = document.getElementById("dew");
let segDew = document.getElementById("segDew");
let dsw = document.getElementById("dsw");
let segDsw = document.getElementById("segDsw");
let emr = document.getElementById("emr");
let segEmr = document.getElementById("segEmr");
let datos = document.getElementById("datos");

/* Ocultar los formularios cuando se carga la página. */
onload = () => {
    formularioModulos.style.display = "none";
    formularioCursos.style.display = "none";
}

/**
 * Si la longitud de la matriz es mayor que 0, entonces muestre el formulario
 */
function mostrarCursos(){
    if(opcionCursos.length > 0){
        document.getElementById("formularioCursos").style.display = "block";
    }
}

/**
 * Muestra los módulos del curso seleccionado.
 */
function mostrarModulos(){
    if(cursos.value == "primero"){
        formularioModulos.style.display = "block";
        pro.setAttribute("type", "checkbox");
        priPro.style.display = "block";
        ets.setAttribute("type", "checkbox");
        priEts.style.display = "block";
        fol.setAttribute("type", "checkbox");
        priFol.style.display = "block";
        dew.setAttribute("type", "hidden");
        segDew.style.display = "none";
        dsw.setAttribute("type", "hidden");
        segDsw.style.display = "none";
        emr.setAttribute("type", "hidden");
        segEmr.style.display = "none";
    }else if(cursos.value == "segundo"){
        formularioModulos.style.display = "block";
        pro.setAttribute("type", "hidden");
        priPro.style.display = "none";
        ets.setAttribute("type", "hidden");
        priEts.style.display = "none";
        fol.setAttribute("type", "hidden");
        priFol.style.display = "none";
        dew.setAttribute("type", "checkbox");
        segDew.style.display = "block";
        dsw.setAttribute("type", "checkbox");
        segDsw.style.display = "block";
        emr.setAttribute("type", "checkbox");
        segEmr.style.display = "block";
    }else{
        formularioModulos.style.display = "none";
    }
}

/**
 * Si el valor de la entrada está vacío, agregue la clase "error" a la entrada. De lo contrario,
 * agregue el valor de la entrada al HTML interno del div con la identificación "datos"
 */
function validarNombre(){
    if(nombre.value == ""){
        nombre.classList.add("error");
    }else{
        datos.innerHTML += "Nombre: " + nombre.value;
    }
}

/**
 * Comprueba si el valor del campo de entrada apellidos está vacío. Si es
 * así, agrega el error de clase al campo de entrada. Si no es así, agrega el valor del campo de
 * entrada al HTML interno de los datos div
 */
function validarApellidos(){
    if(apellidos.value == ""){
        apellidos.classList.add("error");
    }else{
        datos.innerHTML += ". Apellidos: " + apellidos.value + ".<br/>";
    }
}

/**
 * Comprueba si algún sexo está seleccionado. Si no es así,
 * saltará una alerta de que no se ha seleccionado ningún sexo.
 */
function validarSexo(){
    if(hombre.checked){
        datos.innerHTML += "Sexo: " + hombre.value + "<br/>";
    }else if(mujer.checked){
        datos.innerHTML += "Sexo: " + mujer.value + "<br/>";
    }else{
        alert("No has seleccionado sexo");
    }
}

/**
 * Si el valor de la entrada está vacío, es menor que 0 o mayor que 125, agregue la clase "error" a la
 * entrada. De lo contrario, agregue el valor de la entrada al HTML interno del div con la
 * identificación "datos"
 */
function validarEdad(){
    if(edad.value == "" || edad.value < 0 || edad.value > 125){
        edad.classList.add("error");
    }else{
        datos.innerHTML += "Edad: " + edad.value + "<br/>";
    }
}

/**
 * El usuario hace clic en el botón. Agrega el valor de la
 * entrada colorFav al div de datos
 */
function validarColorFav(){
    datos.innerHTML += "Color: " + colorFav.value + "<br/>";
}

/**
 * Comprueba si alguno de los ciclos está seleccionado. Si no es así,
 * saltará una alerta de que no se ha seleccionado ningún ciclo.
 */
function validarCiclo(){
    if(asir.checked){
        datos.innerHTML += "Ciclo: " + asir.value + "<br/>";
    }else if(daw.checked){
        datos.innerHTML += "Ciclo: " + daw.value + "<br/>";
    }else if(dam.checked){
        datos.innerHTML += "Ciclo: " + dam.value + "<br/>";
    }else{
        alert("No has seleccionado ningún ciclo");
    }
}

/**
 * Comprueba si el usuario ha seleccionado un curso y, de ser así, muestra el curso seleccionado en el
 * div de datos
 */
function validarModulo(){
    if(cursos.value == "primero"){
        if(pro.checked){
            datos.innerHTML += "Módulo: PRO <br/> <br/>";
        }else if(ets.checked){
            datos.innerHTML += "Módulo: ETS <br/> <br/>";
        }else if(fol.checked){
            datos.innerHTML += "Módulo: FOL <br/> <br/>";
        }else{
            alert("No has seleccionado ningún módulo de 1º");
        }
    }else if(cursos.value == "segundo"){
        if(dew.checked){
            datos.innerHTML += "Módulo: DEW <br/> <br/>";
        }else if(dsw.checked){
            datos.innerHTML += "Módulo: DSW <br/> <br/>";
        }else if(emr.checked){
            datos.innerHTML += "Módulo: EMR <br/> <br/>";
        }else{
            alert("No has seleccionado ningún módulo de 2º");
        }
    }
}

/**
 * Cuenta el número de formularios en el documento y muestra el
 * resultado en el div con el id de datos
 */
function contadorFormularios(){
    let contarForms = document.forms.length;
    datos.innerHTML += "En total hay: " + contarForms + " formularios." + "<br/> <br/>";
}

/**
 * Restablece los formularios y recarga la página.
 */
function limpiarForms(){
    formulario.reset();
    formularioCiclos.reset();
    formularioCursos.reset();
    formularioModulos.reset();
    location.reload();
}

/**
 * Llama a todas las funciones que validan el formulario.
 */
function validacion(){
    validarNombre();
    validarApellidos();
    validarSexo();
    validarEdad();
    validarColorFav();
    validarCiclo();
    validarModulo();
    contadorFormularios();
}