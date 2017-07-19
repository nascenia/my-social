import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
import './App.css';
import LoginComponent from './LoginComponent';
import ProfileComponent from './ProfileComponent';
import PostComponent from './PostComponent';
import FeedComponent from './FeedComponent';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: {},
      loggedin: false,
      showPostForm: false,
      access_token: ''
    };

    this.setFbData = this.setFbData.bind(this);
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

  setFbData(profile, access_token) {
    this.setState(function () {
      return {
        profile: profile,
        access_token: access_token,
        loggedin: true
      };
    });
  }

  render() {
    return (
      <div className="App">
        {!this.state.loggedin && <LoginComponent fb_data={this.setFbData} />}
        {this.state.loggedin &&
          <div>
            <Col xs={5} md={3}>
              <ProfileComponent profile={this.state.profile} />
            </Col>
            <Col xs={7} md={9}>
              <FeedComponent profile_id={this.state.profile.id} access_token={this.state.access_token} />
            </Col>
          </div>
        }
        {
          this.state.loggedin &&
          <PostComponent facebookUserId={this.state.profile.id}
          access_token={this.state.access_token}/>
        }
      </div>
    );
  }
}


export default App;
