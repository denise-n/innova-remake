import React, { Component } from 'react'

class GetStartedSection extends Component {
    render() {
        return (
            <div className="py-5" style={{backgroundColor: "#6f42c1"}}>
                <div className="container text-center">
                    <div className="row justify-content-center">
                        <div className="col-lg-7">
                        <h3 className="text-white mb-2 font-weight-normal" >Get Started</h3>
                        <p className="text-white mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>  
                        <p className="mb-0" data-aos="fade-up" data-aos-delay="200"><a href="contact.html" className="btn btn-outline-white px-4 py-3">Get In Touch!</a></p>
                        </div>
                    </div>
                </div>
            </div> 
        )
    }
}

export default GetStartedSection
