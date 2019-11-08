import React, { Component } from 'react'
import Pagefront from '../Pagefront'
import ServicesSection from '../ServicesSection'
import Testimonials from '../Testimonials'

class ServicesPage extends Component {
    render() {
        return (
            <div className="ServicesPage">
                <Pagefront title='Our Services' />
                <ServicesSection />
                <ServicesSection />
                <Testimonials />
                
            </div>
        )
    }
}

export default ServicesPage
