import React, { Component } from 'react'
import './FormSection.css'

class FormSection extends Component {
    render() {
        return (
            <div className="section FormSection">
                <div className="container">
                    <div className="row">
                        <div className="col-12 contact-form-contact-info">
                            <div className="row justify-content-center">
                                <div className="col-lg-4" data-aos="fade-up" data-aos-delay="">
                                    <p className="d-flex justify-content-center">
                                        <i className="fas fa-map-marker-alt"></i>
                                        <span>34 Street Name, City Name Here, United States</span>
                                    </p>
                                </div>

                                <div className="col-lg-4" data-aos="fade-up" data-aos-delay="100">
                                    <p className="d-flex justify-content-center">
                                        <i className="fas fa-phone-alt"></i>    
                                        <span>+1 242 4942 290</span>
                                    </p>
                                </div>

                                <div className="col-lg-4" data-aos="fade-up" data-aos-delay="200">
                                    <p className="d-flex justify-content-center">
                                        <i className="fas fa-envelope"></i>
                                        <span>info@yourdomain.com</span>
                                    </p>
                                </div>
                            </div> {/* row */}
                        </div> {/* col */}
                    </div> {/* row */}

                    <div className="row justify-content-center mt-2">

                        <div className="col-10 mb-5 order-2">
                            <form action="#" method="post">
                                <div className="row">
                                    <div className="col-md-6 form-group">
                                        <label htmlfor="name">Name</label>
                                        <input type="text" id="name" className="form-control "/>
                                    </div>

                                    <div className="col-md-6 form-group">
                                        <label htmlfor="phone">Phone</label>
                                        <input type="text" id="phone" className="form-control "/>
                                    </div>

                                </div> 

                                <div className="row">
                                    <div className="col-md-12 form-group">
                                    </div>
                                </div>

                                <div className="row">
                                <div className="col-md-12 form-group">
                                    <label htmlfor="email">Email</label>
                                    <input type="email" id="email" className="form-control "/>
                                </div>
                                </div>
                                <div className="row">
                                <div className="col-md-12 form-group">
                                    <label htmlfor="message">Write Message</label>
                                    <textarea name="message" id="message" className="form-control " cols="30" rows="8"></textarea>
                                </div>
                                </div>
                                <div className="row">
                                <div className="col-md-6 form-group">
                                    <input type="submit" value="Send Message" className="btn btn-outline-dark px-3 py-3"/>
                                </div>
                                </div>
                            </form>
                        </div>                        
                    </div>
                </div>
            </div>
        )
    }
}

export default FormSection
