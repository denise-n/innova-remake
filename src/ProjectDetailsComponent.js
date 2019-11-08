import React, { Component } from 'react'
import { projects } from './ProjectsData'

export class ProjectDetailsComponent extends Component {
    render() {
        const { project } = this.props
        return (
            <section className="section">
                <div className="container">
                    <div className="row mb-5">

                        <div className="col-lg-7">
                            <img src={project.imgSrc} alt="Image" className="img-fluid"/>
                        </div>

                        <div className="col-lg-4 ml-auto">
                            <div className="">
                                <h3 className="mb-4">{project.title}</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, magnam!</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa eum quod et, atque expedita ducimus cumque, voluptatibus, fugit eveniet doloremque.</p>
                                <p>Dolore doloribus esse voluptatem illum libero vel, totam velit.</p>
                                <ul className="list-unstyled mb-5">
                                <li className="mb-3">
                                    <strong className="d-block text-dark">Role:</strong>
                                    HTML, CSS, Design, Front-end, WordPress, CMS
                                </li>
                                <li>
                                    <strong className="d-block text-dark">Client:</strong>
                                    XYZ Co.
                                </li>
                                </ul>
                                <p><a href="#" className="btn btn-outline-dark ">Visit Website</a></p>
                            </div>
                        </div>
                    </div> {/* row */}
                
                </div>
            </section>
        )
    }
}

export default ProjectDetailsComponent
