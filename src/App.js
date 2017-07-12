import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
import './App.css';
import LoginComponent from './LoginComponent';
import ProfileComponent from './ProfileComponent';

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
        <Col xs={6} md={4}>
          {!this.state.loggedin && <LoginComponent profile={this.setProfile} />}
          {this.state.loggedin && <ProfileComponent profile={this.state.profile} />}
        </Col>
      </div>
    );
  }
}

export default App;
