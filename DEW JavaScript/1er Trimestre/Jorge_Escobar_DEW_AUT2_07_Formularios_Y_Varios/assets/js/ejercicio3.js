/* 

3. Crea una clase Usuario cuyas propiedades sean el nombre de usuario y la contraseña. 
La propiedad contraseña debe ser privada y debe tener los métodos get y set 
para poder acceder a ella. Una vez hecho esto muetra los datos por consola.

*/

class Usuario{

    /* Es declarar las variables. */
    nombreUsuario;
    #contrasenia;

    /* Ajuste de los valores de las variables. */
    nombreUsuario = "Jorge";
    #contrasenia = 2710;

    /**
     * Devuelve el valor de la variable Nombre de usuario.
     * @returns El valor de la variable nombre de usuario.
     */
    get getNombreUsuario(){
        return this.nombreUsuario;
    }

    /**
     * Toma un parámetro llamado Nombre de usuario y establece el valor de la
     * propiedad Nombre de usuario al valor del parámetro Nombre de usuario
     * @param nombreUsuario - El nombre del usuario.
     */
    set setNombreUsuario(nombreUsuario){
        this.nombreUsuario = nombreUsuario;
    }

    /**
     * *|CURSOR_MARCADOR|*
     * @returns El valor de la propiedad.
     */
    get getContrasenia(){
        return this.#contrasenia;
    }

    /**
     * *|CURSOR_MARCADOR|*
     * @param contrasenia - La contraseña del usuario.
     */
    set setContrasenia(contrasenia){
        this.#contrasenia = contrasenia;
    }
}

/* Crea una nueva instancia de la clase Usuario y luego llama a los métodos
getNombreUsuario y getContrasenia. */
const nuevoUser = new Usuario();
alert(nuevoUser.getNombreUsuario);
console.log(nuevoUser.getContrasenia + "<br/>");
console.log(nuevoUser.getNombreUsuario + "<br/>");