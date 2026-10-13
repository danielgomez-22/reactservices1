import React, { Component } from 'react'

export default class CollatzComponent extends Component {
    state = {
        numero: []
    }
    // todo numero positivo entero n, si es par se divide entre 2, si es impar se multiplica por 3 y se le suma 1. Se repite el proceso hasta llegar a 1. El resultado es la secuencia de numeros que se generan.
    generarCollatz = () => {
        let aux = [];
        let numero = parseInt(this.props.numero);
        while (numero != 1){
        if (numero % 2 === 0) {
            numero = numero / 2;
        } else {
            numero = numero * 3 + 1;
        }
        aux.push(numero);
        this.setState({
            numero: aux
        })
    }}
    componentDidMount() {
        this.generarCollatz();
    }
    componentDidUpdate(oldProps) {
        if (oldProps.numero !== this.props.numero) {
            this.generarCollatz();
        }
    }
  render() {
    return (
      <div>
        <h1>CollatzComponent</h1>
        <h4>{this.props.numero}</h4>
        <ul>
            {
                this.state.numero.map((num, index) => {
                    return (<li key={index}>{num}</li>)
                })
            }

        </ul>
      </div>
    )
  }
}
