import React, { Component } from 'react'
import Pagefront from '../Pagefront'
import ServicesSection from '../ServicesSection'
import PortfolioSection from '../PortfolioSection'
import Testimonials from '../Testimonials'
import AboutSection from '../AboutSection'
import GetStarted from '../GetStartedSection'

class Homepage extends Component {
    render() {
        const title = 'We are innova we create great stuff.'
        return (
            <div className="Homepage">
                <Pagefront title={title}/>
                <ServicesSection />
                <PortfolioSection />
                <Testimonials />
                <AboutSection />
                <GetStarted />  
            </div>
            
        )
    }
}

export default Homepage
