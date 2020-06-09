import React, { Component } from 'react';
import './App.css';
import Form from './Form.js'
import ProjectHead from './ProjectHead.js'
import Card from './Card.js'

class App extends Component{

  state = {
    sunriseTime: "",
    showingTime: false,
  }

  setTime = (newTime) => {
    this.setState({
      sunriseTime: newTime
    })
  }

  render(){
    return (
    <>
      <ProjectHead/>
      <Form
        setTime={this.setTime} 
      />  
      <Card
        sunriseTime={this.state.sunriseTime}
      />
    </>
    )
  }
}



export default App;
