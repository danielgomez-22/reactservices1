import React, { Component } from 'react'
import axios from 'axios'
import Global from '../Global'

export default class ComponentServiceSuppliers extends Component {
    cajaID = React.createRef
    state = {
        suppliers: [], proveedor: null
    }

    findSupplier = (event) => {
        let request = "Suppliers"
        event.preventDefault();
        let id = parseInt(this.cajaID.current.value);
        axios.get(Global.urlNorthwind + request).then((response) => {
            for (let elem of response.data.value){
                if(elem.SupplierID == id){
                    //lo tenemos
                    this.setState({
                        proveedor: elem
                    })
                } break;
            }
        })
    }


    
    loadSuppliers = () => {
    console.log("antes");
    let request = "Suppliers";
    axios.get(Global.urlNorthwind + request).then((response) => {
        console.log("Leyendo...");
        this.setState({
            suppliers: response.data.value
        })
    })
    console.log("despues");
}
    componentDidMount = () => {
        this.loadSuppliers();
    }

  render() {
    return (
      <div>
        <h1>ComponentServiceSuppliers</h1>
        <form>
            <label>Buscar ID</label>
            <input type="text" ref={this.cajaID} />
            <button onClick={this.findSupplier}>Buscar ID</button>
        </form>
        {
            this.state.proveedor && 
            (<div> 
            <h2>Contact: {this.state.proveedor.ContactName}</h2>
            <h2>Titulo: {this.state.proveedor.ContactTitle}</h2>
            <h2>Direccion: {this.state.proveedor.Address}</h2>
            </div>)
        }
        <ul>
        {
            
            this.state.suppliers.map((supplier,index) => {
                return(<h4 key={index}>
                    <li>ID: {supplier.SupplierID};
                    Contacto: {supplier.ContactName}</li>
                </h4>)
            })

        }

        </ul>
      </div>
    )
  }
}
