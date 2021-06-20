import React from 'react'
import { useForm } from '../../hooks/useForm'

export const FormWithCustomHook = () => {

    //HOOK FORM
    //DESTRUCTURACIÓN PARA OBTENER VALORES DEL RETURN EN UN ARRAY
    //LOS VALORES QUE TRAIGA SE GUARDAN AQUI
    const [formValues, handleInputChange] = useForm({ name: '', email: '', password: '' })

    //DESTRUCTURACIÓN DEL OBJETO FORMVALUES PARA UTILIZARLOS FACILMENTE
    const { name, email, password } = formValues

    return (
        <div className="mt-2 ms-2 me-2">
            <h3>Datos Personales</h3>

            <input
                type="text"
                className="form-control"
                name="name"
                value={name}
                placeholder="texto"
                autoComplete="off"
                onChange={handleInputChange}
            />

            <br />

            <input
                type="text"
                className="form-control"
                name="email"
                value={email}
                placeholder="email@hotmail.com"
                autoComplete="off"
                onChange={handleInputChange}
            />

            <br />

            <input
                type="password"
                className="form-control"
                name="password"
                value={password}
                placeholder="******"
                autoComplete="off"
                onChange={handleInputChange}
            />

        </div>
    )
}
