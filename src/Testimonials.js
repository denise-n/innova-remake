import React, { Component } from 'react'
import './Testimonials.css'
import person_1 from './images/person_1.jpg'
import person_2 from './images/person_2.jpg'

class Testimonials extends Component {
    render() {
        return (
            <section className="d-none d-sm-block section bg-light block-11 Testimonials">

                <div className="container">

                    <div className="row justify-content-center mb-5">
                        <div className="col-md-8 text-center">
                            <h2 className="mb-4 section-title">Happy Client</h2>
                        </div>
                    </div> {/* row */}
                    
                    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                        
                        <div className="row justify-content-center">
                        
                            <a className="carousel-control-prev col-2" href="#carouselExampleIndicators" role="button" data-slide="prev">
                                <span className="carousel-control-prev-icon w-50 pb-5" aria-hidden="true">
                                    <i className="fas fa-arrow-left"/>
                                </span>
                                <span className="sr-only">Previous</span>
                            </a>

                            <div className="carousel-inner col-8">

                                <div className="carousel-item active">

                                    <div className="item-container h-100">
                                        <div className="item-header d-flex mb-3">
                                            <div className="image align-self-center">
                                                <img src={person_1} alt="Person here"/>
                                            </div>
                                            <div className="name-text align-self-center">
                                                <h2 className="heading">First</h2>
                                                <span className="meta">Customer Corp.</span>
                                            </div>
                                        </div>

                                        <div className="text">
                                            <blockquote>
                                                <p>&rdquo; Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat qui, ipsum debitis id
                                                reprehenderit ut soluta possimus consectetur asperiores totam veniam quasi molestiae. Animi doloribus
                                                accusamus eius ex laudantium vitae? &ldquo;</p>
                                            </blockquote>
                                        </div>
                                    </div>    

                                </div> {/*carousel-item 1*/}


                                <div className="carousel-item">
                                
                                    <div className="item-container h-100">
                                            <div className="item-header d-flex mb-3">
                                                <div className="image align-self-center">
                                                    <img src={person_2} alt="Person here"/>
                                                </div>
                                                <div className="name-text align-self-center">
                                                    <h2 className="heading">Second</h2>
                                                    <span className="meta">Customer Corp.</span>
                                                </div>
                                            </div>

                                            <div className="text">
                                                <blockquote>
                                                    <p>&rdquo; Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat qui, ipsum debitis id
                                                    reprehenderit ut soluta possimus consectetur asperiores totam veniam quasi molestiae. Animi doloribus
                                                    accusamus eius ex laudantium vitae? &ldquo;</p>
                                                </blockquote>
                                            </div>
                                    </div>    

                                </div> {/*carousel-item 2*/}



                                <div className="carousel-item">
                                
                                    <div className="item-container h-100">
                                            <div className="item-header d-flex mb-3">
                                                <div className="image align-self-center">
                                                    <img src={person_1} alt="Person here"/>
                                                </div>
                                                <div className="name-text align-self-center">
                                                    <h2 className="heading">Third</h2>
                                                    <span className="meta">Customer Corp.</span>
                                                </div>
                                            </div>

                                            <div className="text">
                                                <blockquote>
                                                    <p>&rdquo; Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat qui, ipsum debitis id
                                                    reprehenderit ut soluta possimus consectetur asperiores totam veniam quasi molestiae. Animi doloribus
                                                    accusamus eius ex laudantium vitae? &ldquo;</p>
                                                </blockquote>
                                            </div>
                                    </div>    

                                </div> {/*carousel-item 3*/}

                                <div className="carousel-item">
                                
                                    <div className="item-container h-100">
                                            <div className="item-header d-flex mb-3">
                                                <div className="image align-self-center">
                                                    <img src={person_2} alt="Person here"/>
                                                </div>
                                                <div className="name-text align-self-center">
                                                    <h2 className="heading">Fourth</h2>
                                                    <span className="meta">Customer Corp.</span>
                                                </div>
                                            </div>

                                            <div className="text">
                                                <blockquote>
                                                    <p>&rdquo; Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat qui, ipsum debitis id
                                                    reprehenderit ut soluta possimus consectetur asperiores totam veniam quasi molestiae. Animi doloribus
                                                    accusamus eius ex laudantium vitae? &ldquo;</p>
                                                </blockquote>
                                            </div>
                                    </div>    

                                </div> {/*carousel-item 4*/}

                                
                            </div> {/* carousel inner */}

                            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                                <span className="carousel-control-next-icon  w-50 pb-5" aria-hidden="true">
                                    <i className="fas fa-arrow-right"/>
                                </span>
                                <span className="sr-only">Next</span>
                            </a>


                        </div> {/* row */}
                        
                        <ol className="carousel-indicators d-flex justify-content-center mt-5">
                            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                        </ol>


                    </div> {/*carousel */}

                    


                </div> {/*container */}
            </section>
        )
    }
}

export default Testimonials
