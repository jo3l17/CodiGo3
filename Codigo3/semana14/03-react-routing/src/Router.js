import React, { Component } from 'react'

// importando el sistema de enrutamiento
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Productos from './components/productos/Productos';
import Nosotros from './components/nosotros/Nosotros';
import Portafolio from './components/portafolio/Portafolio';
import Nav from './components/nav/Nav';

export default class Router extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <Nav />
                    <Switch>
                        <Route exact path="/" component={Nosotros} />
                        <Route exact path="/portafolio" component={Portafolio} />
                        <Route exact path="/productos" component={Productos} />
                    </Switch>
                </BrowserRouter>
            </div>
        )
    }
}
