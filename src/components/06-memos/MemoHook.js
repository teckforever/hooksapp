import React, { useState, useMemo } from 'react'
import { Small } from './Small'
import { useCounter } from '../../hooks/useCounter'

export const MemoHook = () => {

    const [show, setShow] = useState(true)
    const { counter, increment } = useCounter(100)

    //ESTA FUNCIÓN SOLO SE VA A EJECUTAR CUANDO EL COUNTER CAMBIE Y NO CUANDO EL ESTADO DEL COMPONENTE CAMBIE, EN ESTE CASO SHOW    
    const procesoPesado = () => {
        for (let i = 0; i <= counter; i++) {
            console.log(i)
        }
        return (`${counter} iteraciones realizadas`)
    }
    
    //SOLO VOLVERÁ A CALCULAR EL VALOR MEMORIZADO CUANDO UNA DE LAS DEPENDENCIAS HAYA CAMBIADO, ESTO AYUDA A MEJORAR EL RENDIMIENTO, ESTA FUNCIÓN DEVUELVE UN RETURN, POR ESO SE HACE ASI.
    const memoProcesado = useMemo(() => procesoPesado(counter), [counter]);

    return (
        <div>
            Counter : <Small value={counter} />
            <br />

            <span className="text-danger">Iteraciones Realizadas : {memoProcesado}</span>
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
