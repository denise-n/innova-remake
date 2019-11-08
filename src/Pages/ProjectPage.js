import React, { Component } from 'react'
import Pagefront from '../Pagefront'

class ProjectPage extends Component {
    render() {
        const { projects } = this.props
        let projectName = this.props.match.params.project
        let currentProject = projects.find(p => p.name === projectName)
        console.log(currentProject)

        
        return (
            <div className="ProjectPage">
                <Pagefront title={currentProject.title}/>
                
            </div>
        )
    }
}

export default ProjectPage
