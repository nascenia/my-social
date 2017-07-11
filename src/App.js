import React, { Component } from 'react';
import './App.css';
import LoginComponent from './LoginComponent';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(profile) {
    this.setState(function () {
      return profile;
    });
  }

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
