import React, { Component } from 'react'
import Pagefront from '../Pagefront'
import PortfolioSection from '../PortfolioSection'
import Testimonials from '../Testimonials'

class PortfolioPage extends Component {
    render() {
        const { projects} = this.props
        return (
            <div className="PortfolioPage">
                <Pagefront title="My Portfolio" />
                <PortfolioSection projects={projects}/>
                <Testimonials />
            </div>
        )
    }
}

export default PortfolioPage
