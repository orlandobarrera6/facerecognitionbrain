import React, { Component } from 'react';

import './App.css';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo'
import Rank from './components/Rank/Rank'
import ImageLinkForm from './components/ImageLinkForm /ImageLinkForm'
import FaceRecognition from './components/FaceRecognition/FaceRecognition.js'

import 'tachyons'
import Particles from 'react-particles-js'
import Clarifai from 'clarifai'

const app = new Clarifai.App({
  apiKey: '52f8311e8abe48b09b3c4e275b46fcbb'
 });

const particlesOptions = {
  particles: {
    number: {
      value: 40,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
} 


class App extends Component {

  constructor() {
    super()
    this.state = {
      input: '',
      imageURL: '' 
    }
  }

  onInputChange = (event) => {
    this.setState({
      input: event.target.value
    })
  }

  onButtonSubmit = () => {
    console.log('clicky')
    this.setState({imageURL: this.state.input});
    app.models.predict( 
      Clarifai.FACE_DETECT_MODEL, 
      this.state.input)
      .then(
      function(response) {
        console.log(response.outputs[0].data.regions[0].region_info)
      },
      function(err) {
        // there was an error
      }
    );
  }

  render() {
    return (
      <div className="App">
        <Particles className='particles' params={particlesOptions} />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit}/>
        <FaceRecognition imageURL={this.state.input}/> 
      </div>
    );
  }
}

export default App;
