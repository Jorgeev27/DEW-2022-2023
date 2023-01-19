/* Importando la librería React y el componente ComponentMostrarResultadoValorMoneda. */
import React, { useState } from 'react';
import { ComponentMostrarResultadoValorMoneda } from './ComponentMostrarResultadoValorMoneda';

/**
 * Función que devuelve un componente React.
 * @param props - Los accesorios que se pasan al componente.
 */
export const ComponentConvertirMoneda = (props) => {
    /* Una array bidimensional que contiene el tipo de cambio entre las diferentes monedas. */
    const tasaValorMonedas = [
        ["EuroDolar", 1.08],
        ["EuroYen", 139.02],
        ["DolarEuro",  0.92],
        ["DolarYen", 128,53],
        ["YenEuro", 0.0072],
        ["YenDolar", 0.0078]
    ];

    /* Un gancho que nos permite usar el estado en un componente funcional. */
    const [valorMoneda, setValorMoneda] = useState(0);


    /**
     * Funcion que establece el valor de la entrada al valor del estado.
     * @param event - El objeto de evento es un evento de JavaScript que se envía a un elemento cuando ocurre un evento en el elemento.
     */
    const cambioValorMoneda = (event) => {
        setValorMoneda(event.target.value);
    };

    /* Un gancho que nos permite usar el estado en un componente funcional. */
    let [total, setTotal] = useState(0);

    /**
     * Una función que toma un parámetro y establece el estado del total en el parámetro.
     * @param nuevoCambioTotalMoneda - Este es el nuevo valor del total.
     */
    let cambioTotalMoneda = (nuevoCambioTotalMoneda) => {
        setTotal(nuevoCambioTotalMoneda);
    }

    /**
     * Función que toma el valor del campo de entrada y lo multiplica por el tipo de cambio de las monedas seleccionadas.
     * @param event - El evento que desencadena la función.
     * @param monedaOrigen - La moneda de origen.
     * @param monedaDestino - La moneda de destino.
     */
    function calculoTotalMonedas(event, monedaOrigen, monedaDestino){
        /* Establecer el valor de la entrada al valor del estado. */
        cambioValorMoneda(event);
        /* Iterando a través del array y verificando si el valor de la entrada es igual al valor del array. */
        tasaValorMonedas.forEach(element => {
        if(monedaOrigen + monedaDestino === element[0]){
            cambioTotalMoneda(parseFloat(element[1] * event.target.value).toFixed(4));
        }
        })
    }

    return (
    <div>
        {
            /* Un operador ternario. */
            (props.moneda1 !== "") ? 
            <div className="col-12 col-md-12 col-lg-12">
                <input type="text" value={valorMoneda} onChange={e => calculoTotalMonedas(e, props.moneda1, props.moneda2)}/>
            </div>
            :null
        }
        <br/>
        <ComponentMostrarResultadoValorMoneda total={total} moneda2={props.moneda2} valor={valorMoneda}/>
    </div>
    //De la línea 71: Pasando el total, moneda2 y valorMoneda al componente ComponentMostrarResultadoValorMoneda.
    );
};
/* Exportando el componente ComponentConvertirMoneda. */
export default ComponentConvertirMoneda;