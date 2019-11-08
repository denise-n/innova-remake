import React, { Component } from 'react'
import Pagefront from '../Pagefront'
import ProjectDetailsComponent from '../ProjectDetailsComponent'
import Testimonials from '../Testimonials'

class ProjectPage extends Component {
    render() {
        const { projects } = this.props
        let projectName = this.props.match.params.project
        let currentProject = projects.find(p => p.name === projectName)
        
        return (
            <div className="ProjectPage">
                <Pagefront title={currentProject.title}/>
                <ProjectDetailsComponent project={currentProject}/>
                <Testimonials />
            </div>
        )
    }
}

export default ProjectPage
