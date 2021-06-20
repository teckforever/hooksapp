import React, { useState } from 'react'

//COMPONENTS 
import { Small } from './Small'

//HOOKS
import { useCounter } from '../../hooks/useCounter'

export const Memorize = () => {

    //EL FUNCIONAMIENTO INTERNO DE REACT CONSISTE EN QUE SI CAMBIA EL STATE DEL COMPONENTE TODO EL COMPONENTE SE VUELVE A EJECUTAR, PERO ESTO SE PUEDE CONTROLAR, GUARDANDO EN MEMORIA Y SOLO SE EJECUTA EL COMPONENTE SI SUS PROPIEDADES EN EL CAMBIAN 

    const [show, setShow] = useState(true)
    const { counter, increment } = useCounter(10)

    return (
        <div>

            Counter : <Small value={counter} />

            <hr />

            <button className="btn btn-info text-white" onClick={increment}>+1</button>

            <br />
            <br />

            <button className="btn btn-info text-white" onClick={() => setShow(!show)}>
                Show/Hide {JSON.stringify(show)}
            </button>

        </div>
    )


}
