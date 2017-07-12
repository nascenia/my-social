import React, { Component } from 'react';
import './App.css';
import LoginComponent from './LoginComponent';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: {},
      loggedin: false
    };

    this.setProfile = this.setProfile.bind(this);
  }

  setProfile(profile) {
    this.setState(function () {
      return {
        profile: profile,
        loggedin: true
      };
    });
  }

  render() {
    return (
      <div className="App">
        {!this.state.loggedin && <LoginComponent profile={this.setProfile} />}
      </div>
    );
  }
}

export default App;
