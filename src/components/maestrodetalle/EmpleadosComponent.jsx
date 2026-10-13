import React, { Component } from 'react'
import axios from 'axios';
import Global from '../../Global';


export default class EmpleadosComponent extends Component {
    componentDidMount = () => {
        this.loadEmpleados();
    }
    componentDidUpdate = (oldProps) => { // old props son los valores anteriores a props
        console.log("Current: " + this.props.iddepartamento);
        console.log("Old: " + oldProps.iddepartamento)
        //solamente actualizamos state si props ha cambiado
        if (oldProps.iddepartamento != this.props.iddepartamento){
            this.loadEmpleados()
        }
    }
    state = {
        empleados: []
    }

    loadEmpleados = () => {
        let id = this.props.iddepartamento;
        let request = "api/empleados/empleadosdepartamento/" + id;
        axios.get(Global.urlApiEmpleados + request).then((response) => {
            console.log("Leyendo Empleados");
            this.setState({
                empleados: response.data
            })
        })
    }

  render() {
    return (
      <div>
        <h1>EmpleadosComponent</h1>
        <ul>
                {
                    this.state.empleados.map((emp, index) => {
                        return (<li key={index}>
                            {emp.apellido}, Oficio: {emp.oficio}
                        </li>)
                    })
                }
            </ul>
      </div>
    )
  }
}

