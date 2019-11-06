import React, { Component } from 'react'
import './Homepage.css'

class Homepage extends Component {
    render() {
        return (
            <div className="slider-item overlay Homepage" data-stellar-background-ratio="0.5">
                <div className="container h-100">
                    <div className="row h-100 slider-text align-items-center justify-content-center">
                        <div className="col-lg-12 text-center col-sm-12">
                            <h1 className="mb-4" data-aos="fade-up" data-aos-delay="100">We are innova we create great stuff.</h1>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Homepage
