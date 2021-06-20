// SE IMPORTAN EL ROUTER QUE CUBRE TODO EL ENRUTAMIENTO
// EL SWITCH CAMBIA ENTRE CADA RUTA 
// EL ROUTE CON EL EXACT PATH PARA DIRECCIONAR A LA RUTA EXACTA
// EL REDIRECT EN CASO DE QUE NINGUNA RUTA COINCIDA DESDE EL NAVEGADOR 

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";

// COMPONENTES POS CADA RUTA 
import { HomeScreen } from './HomeScreen'
import { AboutScreen } from './AboutScreen'
import { LoginScreen } from './LoginScreen'

//UI ENCABEZADO QUE APARECE EN TODAS LAS RUTAS
import { NavBar } from "./NavBar";

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <NavBar />         
                <Switch>
                    <Route exact path={'/'} component={HomeScreen} />
                    <Route exact path={'/about'} component={AboutScreen} />
                    <Route exact path={'/login'} component={LoginScreen} />
                    <Redirect to={'/'} />
                </Switch>
            </div>
        </Router>
    )
}







