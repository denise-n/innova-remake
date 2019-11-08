import React, { Component } from 'react'
import './PortfolioSection.css'
import { Link } from 'react-router-dom'

class PortfolioSection extends Component {

    
    render() {
        const { projects } = this.props

        const column = projects.map((project, i) =>  
            <div className="col-sm-6 col-md-6 col-lg-6" data-aos="fade" data-aos-delay="100" data-aos-duration="800" key={i}>
                <Link to={`/portfolio/${project.name}`} className="work-thumb">
                    <div className="work-text">
                        <h2>{project.title}</h2>
                        <p>{project.type}</p>
                    </div>
                    <img src={project.imgSrc} alt="Image" className="img-fluid"/>
                </Link>
            </div>
            )
        
        return (
            <section className="section PortfolioSection">
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
                        {column}
                    </div> {/*row*/}
                
                </div> {/*container */}
            </section>
        )
    }
}

export default PortfolioSection
