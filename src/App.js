import React, { Component } from 'react';
import './App.css';
import LoginComponent from './LoginComponent';

class App extends Component {
  render() {
    var profile = this.state.profile;

    return (
      <div className="App">
        {!profile.name && <LoginComponent />}
      </div>
    );
  }
}

export default App;
