import React, {useState} from 'react';
import './App.css';
import HemisphereDisplay from './components/HemisphereDisplay';

class App extends React.Component{

  state = {latitude: null, errorMessage:''}

  componentDidMount(){
    window.navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({latitude: position.coords.latitude})
      },
      error => {
        this.setState({errorMessage: error.message})
      }
    );
  }

  render(){
    if(this.state.errorMessage && !this.state.latitude){
      return <div>{this.state.error}</div>
    }

    if(!this.state.errorMessage && this.state.latitude){
      return <div><HemisphereDisplay latitude={this.state.latitude}/></div>
    }

    else{
      return <div>Loading...</div>
    }
  } 
  
}





export default App;
