import React, { useState, useEffect } from 'react'

import { Message } from '../02-useEffect/Message'

export const SimpleForm = () => {

    const [values, setValues] = useState({
        name: '',
        email: ''
    })

    const { name, email } = values

    const handleInput = ({ target }) => {
        setValues({
            ...values,
            [target.name]: target.value
        })
    }

    //EL USEEFFECT SIEMPRE SE EJECUTA CUANDO ENTRA LA PRIMERA VEZ

    //TENER CUIDADO AL EJECUTAR EL USEEFFECT MANDARLE EL SEGUNDO ARGUMENTO []
    //SINO SE EJECUTA CADA VEZ QUE EL STATE CAMBIE
    useEffect(() => {
        console.log("Se ejecuta el useEffect")
    }, [])

    //ESTE SE EJECUTA CADA VEZ QUE EL ARGUMENTO CAMBIE DE VALOR
    useEffect(() => {
        console.log("Hubo un cambio en el name")
    }, [name])

    return (
        <div className="mt-2 ms-2 me-2">
            <h3>Datos Personales</h3>

            <input
                type="text"
                className="form-control"
                name="name"
                value={name}
                autoComplete="off"
                onChange={handleInput}
            /> <br />

            <input
                type="text"
                className="form-control"
                name="email"
                value={email}
                autoComplete="off"
                onChange={handleInput}
            />

            <hr />

            {name === '123' && <Message />}

        </div>
    )
}
