import React, { Component } from 'react'
import Pagefront from '../Pagefront'
import PortfolioSection from '../PortfolioSection'
import Testimonials from '../Testimonials'

class PortfolioPage extends Component {
    render() {
        return (
            <div className="PortfolioPage">
                <Pagefront title="My Portfolio" />
                <PortfolioSection />
                <Testimonials />
            </div>
        )
    }
}

export default PortfolioPage
