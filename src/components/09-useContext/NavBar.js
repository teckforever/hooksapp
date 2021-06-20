import React from 'react'

// IMPORTACION MODULO PARA CAMBIAR DE RUTA SIN RECARGAR LA PAGINA
// A DIFERENCIA DEL LINK ESTE LE AGREGA LA CLASE ACTIVE AL COMPONENTE, HAY QUE AGREGAR LOS ATRIBUTOS EXACT ACTIVECLASSNAME

import { NavLink } from 'react-router-dom'

export const NavBar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">UseContext</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                {/* EL EXACT ES PARA COLOCAR LA CLASE ACTIVE EN LA RUTA ACTUAL */}
                                <NavLink exact activeClassName="active" className="nav-link " to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink exact activeClassName="active" className="nav-link " to="/about">About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink exact activeClassName="active" className="nav-link " to="/login">Login</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}








