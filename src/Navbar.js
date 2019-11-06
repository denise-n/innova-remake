import React, { Component } from 'react'
import './Navbar.css'

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg bg-dark">
                <div className="container-fluid">

                    <a className="navbar-brand " href="index.html">Innova</a>

                    <button 
                    className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                    aria-controls="#navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>


                    <div className="collapse navbar-collapse" id="#navbarSupportedContent">
                        <ul className="navbar-nav pl-md-5 ml-auto">
                            <li className="nav-item">
                                <a className="nav-link active" href="index.html">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="about.html">About</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link" href="services.html">Services</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="portfolio.html">Projects</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="contact.html">Contact</a>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
        )
    }
}

export default Navbar
