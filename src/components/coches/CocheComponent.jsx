import React, { Component } from 'react'
import Global from '../../Global';
import InfoCocheComponent from './InfoCocheComponent';
import axios from 'axios';

//PADRE

export default class CocheComponent extends Component {

    selectIdCoche = React.createRef();
    urlCoches = Global.urlCoches

    state = {
        coches: [],
        idCohe: 0
    }

    loadCoches = () => {
        let request = "api/coches"
        axios.get(Global.urlCoches + request).then((response) => {
            console.log("Leyendo Coches.....")
            this.setState({
                coches: response.data
            })
        })
    }
    buscarDetalles = (event) => {
        event.preventDefault();
        let id = this.selectIdCoche.current.value
        this.setState({
            idCoche: id
        })
    }
    componentDidMount = () => {
        this.loadCoches()
    }

  render() {
    return (
      <div>
        <h1>
            Coches .NET
        </h1>
        <form>
            <label>Selecciona un coche </label>
        <select ref={this.selectIdCoche}>
            {
                this.state.coches.map((coche, index) => { 
                    return(<option key={index} value={coche.idCoche}>{coche.marca}</option>)
                })
            }
        </select>
        <button onClick={this.buscarDetalles}>
            Buscar Detalles
        </button>
        </form>
        {
            this.state.idCoche != 0 && 
            <InfoCocheComponent idcoche = {this.state.idCoche}/>
        }
      </div>
    )
  }
}
