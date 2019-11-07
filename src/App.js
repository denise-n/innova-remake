import React, { Component } from 'react';
import './App.css';
import AOS from 'aos'
import 'aos/dist/aos.css';
import Navbar from './Navbar'
import Homepage from './Homepage'
import Services from './Services'
import Portfolio from './Portfolio'

class App extends Component {
  render () {
    AOS.init()
    return (
      <div className="App">
        <Navbar />
        <Homepage />
        <Services />
        <Portfolio />
      </div>
    );
  } 
}

export default App;
