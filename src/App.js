import React, { Component } from 'react';
import './App.css';
import Navbar from './Navbar'
import Homepage from './Homepage'

class App extends Component {
  render () {
    return (
      <div className="App">
        <Navbar />
        <Homepage />
      </div>
    );
  } 
}

export default App;
