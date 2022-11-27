/**
 * La función Login() se llama cuando el usuario hace clic en el botón "Iniciar sesión" en el
 * formulario "iniciar sesión". Comprueba si el usuario ha introducido el nombre de usuario
 * y la contraseña correctos. Si el usuario ha ingresado el nombre de usuario y la contraseña
 * correctos, es redirigido a la página "menu.html". Si el usuario ha ingresado el nombre de
 * usuario y la contraseña incorrectos, la página se recargará para que se introduzca dicho nombre de usuario
 * y contraseña correctos.
 */
function Login(){
    let usuario = document.login.usuario.value;
    let password = document.login.password.value;
    if (usuario == "admin" && password == "admin"){
        alert("Nombre de usuario y contraseña correctos. Bienvenido " + usuario);
        window.location = "menu.html";
    }else{
        alert("Nombre de usuario y/o contraseña incorrectos. Por favor, introdúcelos correctamente");
        window.location.reload();
    }
}