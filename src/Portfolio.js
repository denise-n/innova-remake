import React, { Component } from 'react'
import './Portfolio.css'
import work1 from './images/work_1.jpg'
import work2 from './images/work_2.jpg'
import work3 from './images/work_3.jpg'
import work4 from './images/work_4.jpg'

class Portfolio extends Component {
    render() {
        return (
            <section className="section Portfolio">
                <div className="container">

                    <div className="row mb-5 justify-content-center" data-aos="fade-up" data-aos-duration="800">
                        <div className="col-md-8 text-center">
                            <h2 className="mb-4 section-title">Selected Work</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                Blanditiis accusamus perferendis
                                libero accusantium nisi.
                            </p>
                        </div> {/* col */}
                    </div> {/* row */}

                </div> {/* container */}

                <div className="container">

                    <div className="row mb-5 no-gutters">

                        <div className="col-sm-6 col-md-6 col-lg-6" data-aos="fade" data-aos-delay="100" data-aos-duration="800">
                            <a href="portfolio-single.html" className="work-thumb">
                                <div className="work-text">
                                    <h2>Project Name Here</h2>
                                    <p>Business</p>
                                </div>
                                <img src={work1} alt="Image" className="img-fluid"/>
                            </a>
                        </div> {/*col */}

                        <div className="col-sm-6 col-md-6 col-lg-6" data-aos="fade" data-aos-delay="200" data-aos-duration="800">
                            <a href="portfolio-single.html" className="work-thumb">
                                <div className="work-text">
                                    <h2>Project Name Here</h2>
                                    <p>Design</p>
                                </div>
                                <img src={work2} alt="Image" className="img-fluid"/>
                            </a>
                        </div> {/*col*/}

                        <div className="col-sm-6 col-md-6 col-lg-6" data-aos="fade" data-aos-delay="300" data-aos-duration="800">
                            <a href="portfolio-single.html" className="work-thumb">
                                <div className="work-text">
                                    <h2>Project Name Here</h2>
                                    <p>Business</p>
                                </div>
                                <img src={work3} alt="Image" className="img-fluid"/>
                            </a>
                        </div> {/*col*/}

                        <div className="col-sm-6 col-md-6 col-lg-6" data-aos="fade" data-aos-delay="400" data-aos-duration="800">
                            <a href="portfolio-single.html" className="work-thumb">
                                <div className="work-text">
                                    <h2>Project Name Here</h2>
                                    <p>Business</p>
                                </div>
                                <img src={work4} alt="Image" className="img-fluid"/>
                            </a>
                        </div> {/*col*/}

                    </div> {/*row*/}
                
                </div> {/*container */}
            </section>
        )
    }
}

export default Portfolio
