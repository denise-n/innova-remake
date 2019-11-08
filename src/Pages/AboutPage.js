import React, { Component } from 'react'
import Pagefront from '../Pagefront'
import TextSection from '../TextSection'
import LeadershipSection from '../LeadershipSection'
import Testimonials from '../Testimonials'
import hero_2 from '../images/hero_2.jpg'
import about_2 from '../images/about_2.jpg'
import person_1 from '../images/person_1.jpg'
import person_2 from '../images/person_2.jpg'

class AboutPage extends Component {
    render() {
        return (
            <div className="AboutPage">
                <Pagefront title='Office Life'/>
                <TextSection image={hero_2} order='order-md-2'/>
                <LeadershipSection person1={person_1} person2={person_2} />
                <TextSection image={about_2} />
                <Testimonials />

                
            </div>
        )
    }
}

export default AboutPage
