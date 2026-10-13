import React, { Component } from 'react'
import Home from './Home'
import TablaMultiplicar from './TablaMultiplicar'
import NotFound from './NotFound'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {useParams} from 'react-router-dom'
import CollatzComponent from './CollatzComponent'
import MenuComponent from './MenuComponent'


export default class Router extends Component {
  render() {
    function TablaMultiplicarElement() {
        // sera para capturar los parametros de path y enviarlos al component mediante props
        let {minumero} = useParams();
        //devolvemos el component con props
        return <TablaMultiplicar numero={minumero} />
    }
    function CollatzComponentElement() {
        // sera para capturar los parametros de path y enviarlos al component mediante props
        let {minumero} = useParams();
        //devolvemos el component con props
        return <CollatzComponent numero={minumero} />
    }
    return (
        <BrowserRouter>
        <MenuComponent />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/tabla/:minumero" element={<TablaMultiplicarElement />} />
                <Route path="/collatz/:minumero" element={<CollatzComponentElement />} />
                {/* Para errores 404, se debe colocar al final de todas las rutas */}
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    )
  } 
}
