import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
import './App.css';
import LoginComponent from './LoginComponent';
import ProfileComponent from './ProfileComponent';
import FeedComponent from './FeedComponent';

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
        {this.state.loggedin &&
          <div>
            <Col xs={5} md={3}>
              <ProfileComponent profile={this.state.profile} />
            </Col>
            <Col xs={7} md={5}>
              <FeedComponent profile={this.state.profile} />
            </Col>
          </div>
        }
      </div>
    );
  }
}

export default App;
