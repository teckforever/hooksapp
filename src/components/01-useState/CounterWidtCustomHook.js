import React from 'react'

import { useCounter } from '../../hooks/useCounter'

export const CounterWidtCustomHook = () => {

    //RECORDAR IMPORTAR ADENTRO DEL COMPONENTE Y UTILIZAR LA DESESTRUCTURACIÓN
    //TAMBIEN SE PUEDE CAMBIAR EL NOMBRE DE LOS VALORES QUE RETORNA
    const { state: counter, increment, decrement, reset } = useCounter(100);

    console.log(counter)

    return (
        <div>
            Counter {counter}
            <hr />
            <button className="btn btn-info" onClick={() => increment(2)}>Sumar</button>
            <button className="btn btn-warning ms-2" onClick={() => decrement(3)}>Restar</button>
            <button className="btn btn-danger ms-2" onClick={reset}>Reset</button>

        </div>
    )
}
