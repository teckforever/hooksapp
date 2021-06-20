//SE IMPORTA EL HOOK DEL CONTEXT DE REACT PARA UTILIZAR EL CONTEXTO
import React, { useContext } from 'react'

// SE IMPORTA EL CONTEXTO
import { UserContext } from './UserContext'

export const AboutScreen = () => {

    // SE DESESTRUCTURA PARA SACAR LOS DATOS YA QUE VIENEN EN UN OBJETO
    // COMO PARAMETRO SE COLOCA EL CONTEXTO DEL CUAL VA A SACAR LOS VALORES 
    // VARIABLE Y FUNCION DESESTRUCTURADO
    const { user, setUser } = useContext(UserContext)

    return (
        <div>
            <h3>AboutScreen</h3>
            <hr />

            <pre>
                {
                    JSON.stringify(user, null, 3)
                }
            </pre>

            <button
                className=" btn btn-warning"
                onClick={() => setUser({})}
            >
                Logout
            </button>
        </div>
    )
}





