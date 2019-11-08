import React, { Component } from 'react'
import './Footer.css'

class Footer extends Component {
    render() {
        return (
            <footer className="site-footer" role="contentinfo">
                <div className="container">
                    <div className="row mb-5">
                        <div className="col-md-4 mb-3">
                            <h3 className="mb-4">About Us</h3>
                            <p className="mb-5">
                                Lorem ipsum dolor 
                                sit amet consectetur, adipisicing elit. Alias nihil numquam aspernatur
                                inventore sint eligendi nostrum!
                            </p>
                        </div>

                        <div className="col-md-3 ml-auto mb-3">
                            <h3 className="mb-4">Navigation</h3>
                            <ul className="list-unstyled footer-link">
                                <li><a href="#">About</a></li>
                                <li><a href="#">Services</a></li>
                                <li><a href="#">Portfolio</a></li>
                                <li><a href="#">Contact</a></li>
                            </ul>
                        </div>

                        <div className="col-md-3 mb-5">
                            <h3 className="footer-title align-self-center mb-3">Follow Me</h3>
                            <div>
                                <a href="#"><i className="fab fa-github mx-1"/></a>
                                <a href="#"><i className="fab fa-linkedin mx-3"/></a>
                            </div>
                        </div>

                    </div> {/* row */}
                </div> {/* container */}
          </footer>
        )
    }
}

export default Footer
