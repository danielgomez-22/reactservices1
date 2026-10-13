import React, { Component } from 'react'
import axios from 'axios'
import Global from '../Global'

export default class EmpleadosOficios extends Component {
    selectOficio = React.createRef();
    urlOficios = Global.urlOficios
    urlEmpleados = Global.urlApiEmpleados
    
    buscarOficios = (event) => {
        event.preventDefault();
        let idOficio = this.selectOficio.current.value;
        let request = "api/Empleados/EmpleadosOficio/" + idOficio;
        console.log("leyendodatos")
        axios.get(this.urlOficios + request).then((response) => {
            
            this.setState({
                oficios: response.data
            })
        })
    }
    loadEmpleados = () => {
        let request = "api/Empleados/"
        axios.get(this.urlOficios + request).then((response) => {
            console.log("leyendo empleados")
            this.setState({
                empleados: response.data
            })
        })
    }

    componentDidMount() {
        this.loadEmpleados();
    }

    state = {
        oficios: [],
        empleados: []
    }
    render() {
        return (
        <div>
            <h1>EmpleadosOficios</h1>
            <form>
                <select ref={this.selectOficio}>
                    {
                        this.state.oficios.map((oficio, index) => {
                            return(
                                <option key={index} value={oficio.numero}>{oficio.nombre}</option>
                            )
                        })
                    }
                </select>
                <button onClick={this.buscarOficios}>Buscar empleados</button>
            </form>
            <table>
                    <thead>
                        {
                            this.state.oficios.map((empleado, index) => {
                                return(
                                    <tr key={index}>
                                    <td>{empleado.apellido}</td>
                                    <td>{empleado.oficio}</td>
                                    <td>{empleado.salario}</td>
                                    </tr>
                                )
                            })
                        }
                    </thead>
                </table>
        </div>
        )
    }
}
