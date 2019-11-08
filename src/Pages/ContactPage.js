import React, { Component } from 'react'
import Pagefront from '../Pagefront'
import FormSection from '../FormSection'
import Testimonials from '../Testimonials'

class ContactPage extends Component {
    render() {
        return (
            <div className='ContactPage'>
                <Pagefront title="Contact Us"/>
                <FormSection />
                <Testimonials />
            </div>
        )
    }
}

export default ContactPage
