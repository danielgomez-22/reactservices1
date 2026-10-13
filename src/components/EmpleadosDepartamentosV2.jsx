import React, { Component } from 'react'
import axios from 'axios'
import Global from '../Global'

export default class EmpleadosOficios extends Component {
    selectOficio = React.createRef();
    urlApi = Global.urlApiEmpleados || "https://apiempleadosspgs.azurewebsites.net/";

    state = {
        oficios: [],
        empleados: []
    } 

    // Cargar la lista de oficios al iniciar el componente
    loadOficios = () => {
        let request = "api/empleados/oficios";
        axios.get(this.urlApi + request).then((response) => {
            this.setState({
                oficios: response.data
            });
        });
    }

    // Buscar empleados por el oficio seleccionado
    buscarEmpleados = (event) => {
        event.preventDefault();
        let oficio = this.selectOficio.current.value;
        let request = "api/empleados/empleadosoficio/" + oficio;
        
        axios.get(this.urlApi + request).then((response) => {
            this.setState({
                empleados: response.data
            });
        });
    }

    componentDidMount = () => {
        this.loadOficios();
    }

    render() {
        return (
            <div>
                <h1>Empleados Oficios</h1>
                <form onSubmit={this.buscarEmpleados}>
                    <select ref={this.selectOficio}>
                        {
                            this.state.oficios.map((oficio, index) => {
                                return (
                                    <option key={index} value={oficio}>
                                        {oficio}
                                    </option>
                                );
                            })
                        }
                    </select>
                    <button type="submit">
                        Buscar empleados
                    </button>
                </form>

                {/* Tabla de resultados solo si hay empleados cargados */}
                {
                    this.state.empleados.length > 0 && (
                        <table border="1" style={{ marginTop: '10px' }}>
                            <thead>
                                <tr>
                                    <th>Apellido</th>
                                    <th>Oficio</th>
                                    <th>Salario</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.empleados.map((emp, index) => {
                                        return (
                                            <tr key={index}>
                                                <td>{emp.apellido}</td>
                                                <td>{emp.oficio}</td>
                                                <td>{emp.salario}</td>
                                            </tr>
                                        );
                                    })
                                }
                            </tbody>
                        </table>
                    )
                }
            </div>
        )
    }
}