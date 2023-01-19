/* Importando la librería React y el componente ComponentConvertirMoneda. */
import React, { useState } from 'react';
import { ComponentConvertirMoneda } from './ComponentConvertirMoneda';

/**
 * Función que devuelve un componente React.
 */
export const ComponentMoneda = () => {
    /* Una array bidimensional que contiene el tipo de monedas que hay. */
    const tipoMonedas = [
        "",
        "Euro",
        "Dolar",
        "Yen"
    ]
    /* Declarando dos variables, tipoMoneda1 y tipoMoneda2, y estableciéndolas en una cadena vacía. */
    let [tipoMoneda1, setTipoMoneda1] = useState("");
    let [tipoMoneda2, setTipoMoneda2] = useState("");

    return (
    <div className='row'>
            <div className='col-6 col-md-6 col-lg-6'>
                <select>
                    {
                        /* Mapeando el array `tipoMonedas` y devolviendo un elemento de opción para cada elemento del array. */
                        tipoMonedas.map((moneda, indice) => {
                            return (<option value={moneda} key={indice} onClick={e => setTipoMoneda1(e.target.value)}>{moneda}</option>);
                        })
                    }
                </select>
                {
                    /* Comprobando si la variable `tipoMoneda1` no es igual a una cadena vacía. */
                    (tipoMoneda1 !== "")
                }
            </div>
            <div className='col-6 col-md-6 col-lg-6'>
                <select>
                    {
                        /* Mapeando el array `tipoMonedas` y devolviendo un elemento de opción para cada elemento del array. */
                        tipoMonedas.map((moneda, indice) => {
                            if(moneda === tipoMoneda1){
                                return (false);
                            }
                            return(<option value={moneda} key={indice} onClick={e => setTipoMoneda2(e.target.value)}>{moneda}</option>);
                        })
                    }
                </select>
                {
                    /* Comprobando si la variable `tipoMoneda2` no es igual a una cadena vacía. */
                    (tipoMoneda2 !== "")
                }
            </div>
        {
            /* Si las variables `tipoMoneda1` y `tipoMoneda2` no son iguales a una cadena
            vacía, devolverá el `ComponentConvertirMoneda` con los props `moneda1` y `moneda2`. Si son iguales a una
            cadena vacía, devolverá `null`. */
            (tipoMoneda1 !== "" && tipoMoneda2 !== "") ? <ComponentConvertirMoneda moneda1={tipoMoneda1} moneda2={tipoMoneda2} /> : null
        }
    </div>
    )
}
/* Exportando la función `ComponentMoneda`. */
export default ComponentMoneda;