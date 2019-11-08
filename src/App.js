import React, { Component } from 'react';
import './App.css';
import AOS from 'aos'
import 'aos/dist/aos.css';
import Navbar from './Navbar'
import Routes from './Routes'
import Footer from './Footer'

class App extends Component {
  constructor() {
    super();
    this.state = {
      scrolling: "" 
    }
  }

  componentDidMount(e) {
     window.addEventListener('scroll', this.getWindowHeight);
 }

 componentWillUnmount() {
    window.removeEventListener('scroll', this.getWindowHeight);
}

getWindowHeight = (event) => {

  const distanceY = window.pageYOffset
  const shrinkOn = 100;
  let classValue = ""
  //Now In the condition change the state to smaller so if the condition is true it will change to smaller otherwise to default state
  if (distanceY > shrinkOn) {
    classValue = "scrolling"
  }
  else {
    classValue= ""
  }
  this.setState({
    scrolling: classValue
  })
}

  render () {
    AOS.init()
    // console.log($)
    return (
      <div className="App">
        <Navbar scrolling={this.state.scrolling}/>
        <Routes />
        <Footer />
      </div>
    );
  } 
}

export default App;
