
//NO SE UTILIZA JSX POR ESO NO SE EXPORTA REACT
import { useState } from 'react'

//SE AGREGA UN VALOR INICIAL
export const useCounter = (initialState = 0) => {

    const [counter, setCounter] = useState(initialState)

    const increment = () => {
        setCounter(counter + 1)
    }

    const decrement = () => {
        setCounter(counter - 1)
    }

    const reset = () => {
        setCounter(initialState)
    }

    //RETORNA UN OBJETO {STATE:STATE} CON LA OPTIMIZACIÓN JS
    return {
        counter,
        increment,
        decrement,
        reset
    }

}


