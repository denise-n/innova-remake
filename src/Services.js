import React, { Component } from 'react'
import './Services.css'

class Services extends Component {
    render() {
        return (
            <section className="section Services">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 mb-4">
                            <div className="service text-center" data-aos="fade-up" data-aos-delay="">
                                <i className="far fa-paper-plane mb-4 d-block"/>
                                <h3>Email Design</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias id volume amet.</p>
                            </div>
                        </div>

                        <div className="col-lg-3 mb-4">
                            <div className="service text-center" data-aos="fade-up" data-aos-delay="100">
                                <i className="fas fa-desktop mb-4 d-block"/>
                                <h3>Web Design</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias id volume amet.</p>
                            </div>
                        </div>

                        <div className="col-lg-3 mb-4">
                            <div className="service text-center" data-aos="fade-up" data-aos-delay="200">
                                <i className="fas fa-mobile-alt mb-4 d-block"/>
                                <h3>Mobile Design</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias id volume amet.</p>
                            </div>
                        </div>

                        <div className="col-lg-3 mb-4">
                            <div className="service text-center" data-aos="fade-up" data-aos-delay="300">
                                <i className="fas fa-search mb-4 d-block"/>
                                <h3>Research</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias id volume amet.</p>
                            </div>
                        </div> {/* col */}

                    </div> {/* row */}
                </div> {/* container */}
            </section>
        )
    }
}

export default Services
