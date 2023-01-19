/* Importación de la biblioteca React. */
import React from 'react';

/**
 * Función que devuelve un componente React.
 * @param props - El resultado que le pasan al componente.
 */
export const ComponentMostrarResultadoValorMoneda = (props) => {
    class resultadoValorMoneda{
        /* Declarando las variables de la clase resultadoValorMoneda. */
        nombreMoneda;
        total;

        /**
         * La función constructora es una función especial que se utiliza para crear e inicializar un objeto creado dentro de una clase.
         * @param nombreMoneda - El nombre de la moneda.
         * @param total - El total de la moneda.
         */
        constructor(nombreMoneda, total) {
            this.nombreMoneda = nombreMoneda;
            this.total = total;
        }

        //GETTER Y SETTER DEL NOMBRE DE LA MONEDA
        get getNombreMoneda(){
            return this.nombreMoneda;
        }

        set setNombreMoneda(nombreMoneda){
            this.nombreMoneda = nombreMoneda;
        }

        //GETTER Y SETTER DEL TOTAL DE LA MONEDA
        get getTotal(){
            return this.total;
        }

        set setTotal(total){
            this.total = total;
        }
    }

    /* Creando una nueva instancia de la clase resultadoValorMoneda. */
    let conversion = new resultadoValorMoneda(props.moneda2, props.total);

    return(
    <div>
        {
            /* Un operador ternario. */
            props.valor > 0 ? <h3 className="col-12 col-md-12 col-lg-12 bg-black text-white">{conversion.total}</h3> : null
        }
    </div>
    )
}
/* Exportando el componente ComponentMostrarResultadoValorMoneda. */
export default ComponentMostrarResultadoValorMoneda;