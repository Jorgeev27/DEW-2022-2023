/**
 * Constante que toma una cadena en el formato `rgb(x, y, z)` y devuelve una cadena en el formato `#xyz`
 * @param colorRgb - El color RGB para convertir a hexadecimal.
 * @returns el valor hexadecimal del color rgb.
 */
const convertirAHex = (colorRgb) => {
    let secciones = colorRgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
    secciones.shift();
    for(let i = 0; i < 3; i++){
        secciones[i] = parseInt(secciones[i]).toString(16);
        if(secciones[i].length == 1){
            secciones[i] = '0' + secciones[i];
        }
    }
    return '#' + secciones.join('');
}

/**
 * Constante que genera un número aleatorio entre dos valores.
 * @param valorMin - El valor mínimo del rango.
 * @param valorMax - El valor máximo del número aleatorio.
 */
const generarNumeroAleatorio = (valorMin, valorMax) => {
    return Math.floor((Math.random() * (valorMax - valorMin)) + valorMin);
}

/**
 * Constante que devuelve una nueva matriz con todos los valores nulos eliminados.
 * @param array - La matriz que se va a filtrar.
 */
const quitarNulos = (array) => {
    return array.filter(function (elemento) {
        return elemento != null;
    });
}