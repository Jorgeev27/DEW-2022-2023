/* 

4. Crea una clase que se llame Animal(), con las siguientes propiedades:

    - nombre (string)
    - tipoAnimal (string)
    - raza (string)
    - edad (int)
    - sexo (boolean)
    - altura (float)
    - color (string)
    - peso (float)
    
    Validar todos los tipos de propiedades con funciones y mostrar la clase por consola:
        - Las propiedades string (como nombre, tipoAnimal, etc.) siempre sean una cadena.
        - La edad, la altura y el peso no pueden ser negativos ni nulos.

*/

class Animal{
    /* Declaramos las propiedades de la clase. */
        nombre;
        tipoAnimal;
        raza;
        edad;
        sexo;
        altura;
        color;
        peso;
    
        /**
         * Constructor que se llama cuando se crea un nuevo objeto.
         * @param nombre - El nombre del animal.
         * @param tipoAnimal - Perro, gato, pájaro, pez, etc.
         * @param raza - raza.
         * @param edad - años.
         * @param sexo - 'M' o 'F'.
         * @param altura - altura.
         * @param color - color.
         * @param peso - peso.
         */
        constructor(nombre, tipoAnimal, raza, edad, sexo, altura, color, peso){
            this.nombre = validarNombre(nombre);
            this.tipoAnimal = validarTipoAnimal(tipoAnimal);
            this.raza = validarRaza(raza);
            this.edad = validarEdad(edad);
            this.sexo = validarSexo(sexo);
            this.altura = validarAltura(altura);
            this.color = validarColor(color);
            this.peso = validarPeso(peso);
        }
    
    
        /**
         * Devuelve el valor de la propiedad nombre.
         * @returns El valor de la variable nombre.
         */
        get getNombre(){
            return this.nombre;
        }
    
    
        /**
         * Se le pasa el valor del parámetro nombre. La
         * función validarNombre() devuelve un valor que se asigna a la propiedad nombre.
         * @param nombre - El nombre de la propiedad.
         */
        set setNombre(nombre){
            this.nombre = validarNombre(nombre);
        }
    
        /**
         * Devuelve el valor de la variable tipoAnimal.
         * @returns El tipo de animal.
         */
        get getTipoAnimal(){
            return this.tipoAnimal;
        }
    
    
        /**
         * Se le pasa el valor del parámetro tipoAnimal. La
         * función validarTipoAnimal() devuelve un valor que se asigna a la propiedad tipoAnimal.
         * @param tipoAnimal - El tipo de animal.
         */
        set setTipoAnimal(tipoAnimal){
            this.tipoAnimal = validarTipoAnimal(tipoAnimal);
        }
    
        /**
         * Devuelve el valor de la variable raza.
         * @returns El valor del atributo raza.
         */
        get getRaza(){
            return this.raza;
        }
    
        
        /**
         * Se le pasa el valor del parámetro raza. La
         * función validarRaza() devuelve un valor que se asigna a la propiedad raza.
         * @param raza - La raza del animal.
         */
        set setRaza(raza){
            this.raza = validarRaza(raza);
        }
    
        /**
         * Devuelve el valor de la variable edad.
         * @returns El valor de la variable edad.
         */
        get getEdad(){
            return this.edad;
        }
    
        /**
         * Se le pasa el valor del parámetro edad. La
         * función validarEdad() devuelve un valor que se asigna a la propiedad edad.
         * @param edad - La edad del animal.
         */
        set setEdad(edad){
            this.edad = validarEdad(edad);
        }
    
        /**
         * Devuelve el valor de la variable sexo.
         * @returns El atributo sexo del objeto.
         */
        get getSexo(){
            return this.sexo;
        }
    
        /**
         * Se le pasa el valor del parámetro sexo. La
         * función validarSexo() devuelve un valor que se asigna a la propiedad sexo.
         * @param sexo - El sexo del animal.
         */
        set setSexo(sexo){
            this.sexo = validarSexo(sexo);
        }
    
        /**
         * Devuelve el valor de la variable altura.
         * @returns El valor de la variable altura.
         */
        get getAltura(){
            return this.altura;
        }
    
        /**
         * Se le pasa el valor del parámetro altura. La
         * función validarAltura() devuelve un valor que se asigna a la propiedad altura.
         * @param altura - La altura del animal.
         */
        set setAltura(altura){
            this.altura = validarAltura(altura);
        }
    
        /**
         * Devuelve el valor de la propiedad color.
         * @returns El color del animal.
         */
        get getColor(){
            return this.color;
        }
    
        /**
         * Se le pasa el valor del parámetro color. La
         * función validarColor() devuelve un valor que se asigna a la propiedad color.
         * @param color - El color del animal.
         */
        set setColor(color){
            this.color = validarColor(color);
        }
    
        /**
         * Devuelve el valor de la propiedad peso.
         * @returns El valor del peso variable.
         */
        get getPeso(){
            return this.peso;
        }
    
    
        /**
         * Se le pasa el valor del parámetro peso. La
         * función validarPeso() devuelve un valor que se asigna a la propiedad peso.
         * @param peso - El peso del animal.
         */
        set setPeso(peso){
            this.peso = validarPeso(peso);
        }
    }
    
    /**
     * Si el tipo del parámetro es una cadena y el primer carácter está en mayúscula, devuelve el
     * parámetro; de lo contrario, muestra un mensaje de alerta.
     * @param nombre - El nombre del animal.
     * @returns el valor de la variable nombre.
     */
    function validarNombre(nombre){
        if((typeof nombre == "string") && (nombre.charAt(0) == nombre.charAt(0).toUpperCase())){
            return nombre;
        }else{
            alert("El nombre del animal: " + nombre + ", no es válido");
        }
    }
    
    
    /**
     * Toma un parámetro llamado tipoAnimal y verifica si es una cadena. Si
     * lo es, devuelve el valor de tipoAnimal. Si no es así, muestra un mensaje de alerta.
     * @param tipoAnimal - El tipo de animal.
     * @returns el valor de la variable tipoAnimal.
     */
    function validarTipoAnimal(tipoAnimal){
        if((typeof tipoAnimal == "string")){
            return tipoAnimal;
        }else{
            alert("El tipo de animal: " + tipoAnimal + ", no es válido");
        }
    }
    
    
    /**
     * Toma una cadena como argumento y devuelve la cadena si es una cadena, de lo
     * contrario alerta al usuario que el argumento no es una cadena.
     * @param raza - La raza del animal.
     * @returns el valor de la variable raza.
     */
    function validarRaza(raza){
        if((typeof raza == "string")){
            return raza;
        }else{
            alert("La raza del animal: " + raza + ", no es válido");
        }
    }
    
    
    /**
     * La función validarAge() toma un parámetro llamado edad, y si el valor de edad es menor que 0,
     * devuelve un mensaje al usuario. De lo contrario, devuelve el valor de edad más la cadena "años".
     * @param edad - La edad del animal.
     * @returns el valor de la variable edad.
     */
    function validarEdad(edad){
        if((edad < 0 || edad == null)){
            alert("La edad del animal: " + edad + ", no es válido");
        }else{
            return edad + " años";
        }
    }
    
    /**
     * Toma una cadena como argumento y devuelve la cadena si es una cadena, de lo
     * contrario devuelve una alerta.
     * @param sexo - El sexo del animal.
     * @returns la variable sexo.
     */
    function validarSexo(sexo){
        if(sexo == "macho" || sexo == "hembra"){
            return true;
        }else{
            alert("El sexo del animal: " + sexo + ", no es válido");
            return false;
        }
    }
    
    
    /**
     * Toma un parámetro llamado altura, y si el valor de altura es menor que 0
     * o es nulo, muestra un mensaje de alerta. De lo contrario, devuelve el valor de altura con la cadena
     * "CM".
     * @param altura - La altura del animal.
     * @returns el valor de la variable altura.
     */
    function validarAltura(altura){
        if((altura < 0 || altura == null)){
            alert("La altura del animal: " + altura + ", no es válido");
        }else{
            return altura + " CM";
        }
    }
    
    /**
     * Si el tipo del parámetro de color es una cadena, devuelva el parámetro de color; de lo contrario,
     * avise al usuario de que el color no es válido.
     * @param color - El color del animal.
     * @returns el color del animal.
     */
    function validarColor(color){
        if((typeof color == "string")){
            return color;
        }else{
            alert("El color del animal: " + color + ", no es válido");
        }
    }
    
    
    /**
     * Toma un parámetro llamado peso, y si el valor de peso es menor a 0 o nulo,
     * muestra un mensaje de alerta. De lo contrario, devuelve el valor del peso con "KG".
     * @param peso - El peso del animal.
     * @returns el valor del peso variable.
     */
    function validarPeso(peso){
        if((peso < 0 || peso == null)){
            alert("El peso del animal: " + peso + ", no es válido");
        }else{
            return peso + " KG";
        }
    }
    
    /*Instanciamos la clase Animal() a un objeto.*/
    const animal = new Animal("Pancho", "perro", "Pastor alemán", 3, "macho", 1.60, "marrón", 45);

    /*Muestra el objeto animal por consola.*/
    console.log(animal);