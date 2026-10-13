import React, { Component } from 'react'
import axios from 'axios'
import Global from '../../Global'



export default class InfoCocheComponent extends Component {
    state = {
        detalles: []
    }
    componentDidUpdate = (oldProps) => {
        console.log("Current value: " + this.props.idcoche)
        console.log("Old value: " + oldProps.idcoche)
        if (oldProps.idcoche != this.props.idcoche){
            this.loadDetalles()
        }
    }

    loadDetalles = () => {
        let id = this.props.idcoche
        let request = "api/Coches/"
        axios.get(Global.urlCoches + request).then((response) => {
            console.log("Leyendo Detalles")
            this.setState({
                detalles: response.data
            })
        })
    }


  render() {
    return (
      <div>InfoCocheComponent

        <ul>
            {
                this.state.detalles.map((detalle, index) => {
                    return(<li key={index} >
                        ID: {detalle.idCoche}
                        Marca: {detalle.marca},
                        Modelo: {detalle.modelo},
                        Conductor: {detalle.conductor}
                        Imagen: <a href={detalle.imagen}>Imagen</a>
                    </li>)
                })
            }
        </ul>
      </div>
    )
  }
}
