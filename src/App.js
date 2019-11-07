import React, { Component } from 'react';
import './App.css';
import AOS from 'aos'
import 'aos/dist/aos.css';
import Navbar from './Navbar'
import Homepage from './Homepage'
import Services from './Services'
import Portfolio from './Portfolio'
import Testimonials from './Testimonials'

class App extends Component {
  render () {
    AOS.init()
    // console.log($)
    return (
      <div className="App">
        <Navbar />
        <Homepage />
        <Services />
        <Portfolio />
        <Testimonials />
      </div>
    );
  } 
}

export default App;
