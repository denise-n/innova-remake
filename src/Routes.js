import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import HomePage from './Pages/Homepage'
import AboutPage from './Pages/AboutPage'
import ServicesPage from './Pages/ServicesPage'
import PortfolioPage from './Pages/PortfolioPage'
import ProjectPage from './Pages/ProjectPage'
import ContactPage from './Pages/ContactPage'
import {projects} from './ProjectsData'

export class Routes extends Component {
    

    render() {
        
        return (
            <Switch>
                <Route exact path='/' render={() => <HomePage projects={projects}/>} />
                <Route exact path='/about' render={() => <AboutPage />} />
                <Route exact path='/services' render={() => <ServicesPage />} />
                <Route exact path='/portfolio' render={() => <PortfolioPage projects={projects}/>} />
                <Route exact path= '/portfolio/:project' render={(props) => <ProjectPage {...props} projects={projects} /> }/>
                <Route exact path='/contact' render={() => <ContactPage />} />
                <Redirect to='/' />
            </Switch>
        )
    }
}

export default Routes
