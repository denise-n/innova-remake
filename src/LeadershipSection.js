import React, { Component } from 'react'
import './LeadershipSection.css'

class LeadershipSection extends Component {
    render() {
        const { person1, person2} = this.props
        return (
            <section className="section">
                <div className="container">

                    <div className="row justify-content-center mb-5">
                        <div className="col-md-8 text-center" data-aos="fade-up" data-aos-delay="">
                            <h2 className="mb-4 section-title">The Leadership</h2>
                        </div>
                    </div> {/* row */}

                    <div className="row">

                        <div className="col-lg-4" data-aos="fade-up" data-aos-delay="100">
                            <div className="d-block media-custom text-center">
                                <a href="#">
                                    <img src={person1} alt="Image Placeholder" className="img-fluid"/>
                                </a>
                                <div className="media-body">
                                    <h3 className="mt-0">Mellisa Howard</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam minus repudiandae amet.</p>
                                </div>
                            </div>
                        </div> {/* col */}

                        <div className="col-lg-4" data-aos="fade-up" data-aos-delay="200">
                            <div className="media d-block media-custom text-center">
                                <a href="#">
                                    <img src={person2} alt="Image Placeholder" className="img-fluid"/>
                                </a>
                                <div className="media-body">
                                    <h3 className="mt-0">Mike Richardson</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam minus repudiandae amet.</p>
                                </div>
                            </div>
                        </div> {/*col */}

                        <div className="col-lg-4" data-aos="fade-up" data-aos-delay="300">
                            <div className="media d-block media-custom text-center">
                                <a href="#">
                                    <img src={person1} alt="Image Placeholder" className="img-fluid"/>
                                </a>
                                <div className="media-body">
                                    <h3 className="mt-0">Laura Smith</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam minus repudiandae amet.</p>
                                </div>
                            </div>
                        </div> {/*col */}
                
                    </div> {/*row */}
            
                </div> {/* container */}
            </section>
        )
    }
}

export default LeadershipSection
