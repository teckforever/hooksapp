import { useState } from 'react'

export const useForm = (initialState = {}) => {

    const [values, setValues] = useState(initialState)

    //E.TARGET DESTRUCTURADO
    const handleInputChange = ({ target }) => {
        setValues({
            ...values,
            [target.name]: target.value
        })
    }

    const reset = () => {
        setValues(initialState)
    }
    
    //RETORNO DE VALORES EN UN ARRAY
    return [values, handleInputChange, reset]

}
