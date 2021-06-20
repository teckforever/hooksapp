import React, { useContext } from 'react'

import { UserContext } from './UserContext'

export const LoginScreen = () => {

    // Obtener Referencia al Context 
    const { setUser } = useContext(UserContext)

    return (
        <div>
            <h3>LoginScreen</h3>
            <hr />

            <button
                className="btn btn-primary"
                onClick={() => setUser({ nombre: 'Juan', edad: 23 })}
            >
                Cambiar Datos
            </button>
        </div>
    )
}

