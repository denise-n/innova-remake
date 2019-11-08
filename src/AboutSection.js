import React, { Component } from 'react'
import './AboutSection.css'
import about_2 from './images/about_2.jpg'
import about_1 from './images/about_1.jpg'

class AboutSection extends Component {
    render() {
        return (
            <section className="section">
                <div className="container">
                    <div className="row">
                        
                        <div className="col-lg-6 ml-auto pl-lg-4 mb-5 order-2">
                            <img src={about_2} alt="Image" className="img-fluid mb-5"/>
                            <span className="d-block text-uppercase text-primary">About US</span>
                            <h2 className="mb-4 section-title">Creative We Grow</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id autem temporibus blanditiis accusamus perferendis libero accusantium nisi itaque tempore, harum aliquid aut, sapiente dolor tenetur.</p>
                            <p className="mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, voluptatibus.</p>
                            <p>
                                <a href="#" className="btn btn-outline-dark">Learn More</a>
                            </p>
                        </div>

                        <div className="col-lg-6 order-1">
                            <figure className="img-dotted-bg">
                                <img src={about_1} alt="Image" className="img-fluid"/>
                            </figure>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default AboutSection
