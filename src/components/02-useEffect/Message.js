import React, { useState, useEffect } from 'react'

export const Message = () => {


    const [coors, setCoors] = useState({
        x: 0,
        y: 0
    })

    const { x, y } = coors

    useEffect(() => {

        console.log("Componente Montado")

        const mouseMove = (e) => {
            const coors = { x: e.x, y: e.y }
            console.log(coors)
            setCoors(coors)
        }

        window.addEventListener('mousemove', mouseMove)

        return () => {
            console.log("Componente Desmontado")
            window.removeEventListener('mousemove', mouseMove)
        }

    }, [])

    return (
        <div>
            <h3 className="text-primary">Hey Bien Hecho</h3>
            <span className="text-info"> Coord X = {x}</span> <br />
            <span className="text-info"> Coord Y = {y}</span> <br />
        </div>
    )
}
