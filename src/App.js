import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
import './App.css';
import LoginComponent from './LoginComponent';
import ProfileComponent from './ProfileComponent';
import PostComponent from './PostComponent';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: {},
      loggedin: false,
      showPostForm: false
    };

    this.setProfile = this.setProfile.bind(this);
  }

  setProfile(data) {
    console.console.log("called setProfile");
    this.setState(function () {
      return {
        profile: data.profile,
        u_id: data.profile.id,
        access_token: data.tokenDetail.accessToken,
        loggedin: true,
        showPostForm: true
      };
    });
  }

  render() {
    return (
      <div className="App">
        {!this.state.loggedin && <LoginComponent profile={this.setProfile} />}
        {this.state.loggedin &&
          <Col xs={6} md={4}>
            <ProfileComponent profile={this.state.profile}
             />
          </Col>
        }
        {
          this.state.loggedin && this.state.showPostForm &&
          <PostComponent facebookUserId={this.state.u_id}
          access_token={this.state.access_token}/>
        }
      </div>
    );
  }
}


export default App;
