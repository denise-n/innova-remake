import React, { Component } from 'react'
import './Testimonials.css'
import person_1 from './images/person_1.jpg'
import person_2 from './images/person_2.jpg'

class Testimonials extends Component {
    render() {
        return (
            <section class="section bg-light block-11 Testimonials">

                <div class="container h-100">

                    <div class="row justify-content-center mb-5">
                        <div class="col-md-8 text-center">
                            <h2 class="mb-4 section-title">Happy Client</h2>
                        </div>
                    </div> {/* row */}
                    
                    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                        
                        <div className="row justify-content-center">
                        
                            <a class="carousel-control-prev col-2" href="#carouselExampleIndicators" role="button" data-slide="prev">
                                <span class="carousel-control-prev-icon w-50 pb-5" aria-hidden="true">
                                    <i class="fas fa-arrow-left"/>
                                </span>
                                <span class="sr-only">Previous</span>
                            </a>

                            <div class="carousel-inner col-8">

                                <div class="carousel-item active">

                                    <div class="item-container h-100">
                                        <div class="item-header d-flex mb-3">
                                            <div class="image align-self-center">
                                                <img src={person_1} alt="Person here"/>
                                            </div>
                                            <div class="name-text align-self-center">
                                                <h2 class="heading">First</h2>
                                                <span class="meta">Customer Corp.</span>
                                            </div>
                                        </div>

                                        <div class="text">
                                            <blockquote>
                                                <p>&rdquo; Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat qui, ipsum debitis id
                                                reprehenderit ut soluta possimus consectetur asperiores totam veniam quasi molestiae. Animi doloribus
                                                accusamus eius ex laudantium vitae? &ldquo;</p>
                                            </blockquote>
                                        </div>
                                    </div>    

                                </div> {/*carousel-item 1*/}


                                <div class="carousel-item">
                                
                                    <div class="item-container h-100">
                                            <div class="item-header d-flex mb-3">
                                                <div class="image align-self-center">
                                                    <img src={person_2} alt="Person here"/>
                                                </div>
                                                <div class="name-text align-self-center">
                                                    <h2 class="heading">Second</h2>
                                                    <span class="meta">Customer Corp.</span>
                                                </div>
                                            </div>

                                            <div class="text">
                                                <blockquote>
                                                    <p>&rdquo; Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat qui, ipsum debitis id
                                                    reprehenderit ut soluta possimus consectetur asperiores totam veniam quasi molestiae. Animi doloribus
                                                    accusamus eius ex laudantium vitae? &ldquo;</p>
                                                </blockquote>
                                            </div>
                                    </div>    

                                </div> {/*carousel-item 2*/}



                                <div class="carousel-item">
                                
                                    <div class="item-container h-100">
                                            <div class="item-header d-flex mb-3">
                                                <div class="image align-self-center">
                                                    <img src={person_1} alt="Person here"/>
                                                </div>
                                                <div class="name-text align-self-center">
                                                    <h2 class="heading">Third</h2>
                                                    <span class="meta">Customer Corp.</span>
                                                </div>
                                            </div>

                                            <div class="text">
                                                <blockquote>
                                                    <p>&rdquo; Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat qui, ipsum debitis id
                                                    reprehenderit ut soluta possimus consectetur asperiores totam veniam quasi molestiae. Animi doloribus
                                                    accusamus eius ex laudantium vitae? &ldquo;</p>
                                                </blockquote>
                                            </div>
                                    </div>    

                                </div> {/*carousel-item 3*/}

                                <div class="carousel-item">
                                
                                    <div class="item-container h-100">
                                            <div class="item-header d-flex mb-3">
                                                <div class="image align-self-center">
                                                    <img src={person_2} alt="Person here"/>
                                                </div>
                                                <div class="name-text align-self-center">
                                                    <h2 class="heading">Fourth</h2>
                                                    <span class="meta">Customer Corp.</span>
                                                </div>
                                            </div>

                                            <div class="text">
                                                <blockquote>
                                                    <p>&rdquo; Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat qui, ipsum debitis id
                                                    reprehenderit ut soluta possimus consectetur asperiores totam veniam quasi molestiae. Animi doloribus
                                                    accusamus eius ex laudantium vitae? &ldquo;</p>
                                                </blockquote>
                                            </div>
                                    </div>    

                                </div> {/*carousel-item 4*/}

                                
                            </div> {/* carousel inner */}

                            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                                <span class="carousel-control-next-icon  w-50 pb-5" aria-hidden="true">
                                    <i class="fas fa-arrow-right"/>
                                </span>
                                <span class="sr-only">Next</span>
                            </a>


                        </div> {/* row */}
                        
                        <ol class="carousel-indicators d-flex justify-content-center mt-5">
                            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
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
