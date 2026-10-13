import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class MenuComponent extends Component {
  render() {
    return (
        <div>
            <h1>MenuComponent</h1>
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/collatz/40">Collatz</NavLink></li>
                <li><NavLink to="/collatz/70">Collatz</NavLink></li>
                <li><NavLink to="/tabla/21">Tabla</NavLink></li>
                <li><NavLink to="/tabla/14">Tabla 14</NavLink></li>
                <li><NavLink to="/tabla/7">Tabla 7</NavLink></li>
            </ul>
        </div>
    )
  }
}
