import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Navbar.css'

class Navbar extends Component {
    render() {
        const { scrolling } = this.props
        return (
            <nav className={`navbar navbar-expand-lg  navbar-dark bg-dark fixed-top ${scrolling}`}>
                <div className="container-fluid">

                    <Link exact to='/' className="navbar-brand">Innova</Link>

                    <button 
                    className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                    aria-controls="#navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"/>
                    </button>


                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav pl-md-5 ml-auto">
                            <li className="nav-item">
                                <NavLink exact to='/' className="nav-link active">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink exact to="/about" className="nav-link">About</NavLink>
                            </li>
                            <li className="nav-item dropdown">
                                <NavLink exact to="/services" className="nav-link">Services</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink  exact to="/portfolio" className="nav-link">Projects</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink exact to="/contact" className="nav-link">Contact</NavLink>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
        )
    }
}

export default Navbar
