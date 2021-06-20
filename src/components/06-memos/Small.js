import React, { memo } from 'react'

//UTILIZAMOS EL METODO MEMO PARA GUARDAR MEMORIA DE LOS PROPS O EL COMPONENTE, ESTE SE ENVUELVE EN UN PARENTESIS O UTILIZANDO REACT.MEMO

export const Small = memo(({ value }) => {

    console.log("Se renderizo el componente :( ")

    return (
        <span className="text-warning">
            {value}
        </span>
    )
}
)





