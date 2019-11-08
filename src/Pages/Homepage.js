import React, { Component } from 'react'
import './Homepage.css'
import Pagefront from '../Pagefront'
import Services from '../Services'
import Portfolio from '../Portfolio'
import Testimonials from '../Testimonials'
import AboutSection from '../AboutSection'
import GetStarted from '../GetStartedSection'

class Homepage extends Component {
    render() {
        const title = 'We are innova we create great stuff.'
        return (
            <div className="Homepage">
                <Pagefront title={title}/>
                <Services />
                <Portfolio />
                <Testimonials />
                <AboutSection />
                <GetStarted />  
            </div>
            
        )
    }
}

export default Homepage
