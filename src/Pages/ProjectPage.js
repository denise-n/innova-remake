import React, { Component } from 'react'
import Pagefront from '../Pagefront'

class ProjectPage extends Component {
    render() {
        const { project } = this.props
        return (
            <div className="ProjectPage">
                <Pagefront title={project.title}/>
                
            </div>
        )
    }
}

export default ProjectPage
