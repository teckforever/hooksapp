import React, { useState } from 'react'

import { AppRouter } from './AppRouter'

//IMPORTAMOS EL COMPONENTE DE ORDEN MAYOR PARA 
//PODER UTILIZAR LOS DATOS EN TODA LA APLICACION
import { UserContext } from './UserContext'

export const MainApp = () => {

    //DATO AGREGADO POR DEFECTO
    const [user, setUser] = useState({
        nombre: 'David',
        edad: 17
    })

    // UTILIZA LA PROPIEDAD VALUE PARA PASAR LOS DATOS,
    // EN ESTE CASO UN OBJETO PARA PODER CONSUMIR LOS DATOS 
    // EN EL MODO CORTO DE JAVASCRIPT USER:USER 
    return (
        <UserContext.Provider value={{ user, setUser }}>
            <AppRouter />
        </UserContext.Provider>
    )
}
