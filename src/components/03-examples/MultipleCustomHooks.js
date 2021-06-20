import React from 'react'

//CUSTOMHOOKS
import { useCounter } from '../../hooks/useCounter'
import { useFetch } from '../../hooks/useFetch'


export const MultipleCustomHooks = () => {

    const { counter, increment } = useCounter(1)

    //AQUI LO QUE HAY ES UN ESTADO DE USEFETCH
    const { loading, data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`)

    console.log(data)
    console.log(loading)

    //SI VIENE LA DATA EXTRAE EL DATO DEL ARRAY EN LA POSICION 0
    //MIRAR COMO SE HACE DE UNA FORMA MAS LEGIBLE
    const { author, quote } = !!data && data[0]

    //SEPARADOR CON '\N' SINO UTILIZAR , SIN EL +
    console.log(author + '\n' + quote)

    return (
        <div>
            <div className="bg-info p-2 mb-3 text-white">
                <h3>Multiple CustomHooks !!!!!</h3>
            </div>

            {
                loading
                    ?
                    (
                        <div className="alert alert-info text-center">
                            Loading...
                        </div>
                    ) : (
                        <div className="container-fluid text-center">
                            <span>{quote}</span>     <br />
                            <span className="text-info">{author}</span>
                        </div>
                    )
            }

            <br />

            <div className="cont-btn text-center ">
                <div className="btn btn-info text-white" onClick={increment}>
                    Siguiente
                </div>
            </div>

        </div>
    )
}

//TENER EN CUENTA QUE EL COMPONENTE CAMBIA CUANDO HAY CAMBIO DE DATOS, POR ESO PASA DOS VECES, EN LA PRIMERA PASADA LOS DATOS VIENEN NULL UNDEFINED Y PUEDE APARECER UN ERROR A LA HORA DE RENDERIZAR Y LEER LOS DATOS

