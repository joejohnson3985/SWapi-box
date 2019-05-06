import React, { Component } from 'react';
import './App.css';
import InfoContainer from '../InfoContainer/InfoContainer.js'


class App extends Component {
  constructor() {
    super()
    this.state = {

    }
  }

  render() {
    return(
      <div>
        <InfoContainer />
      </div>
    )
  }
}


export default App;
