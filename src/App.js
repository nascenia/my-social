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
    this.hidePostCreateForm = this.hidePostCreateForm.bind(this);
    this.showPostCreateForm = this.showPostCreateForm.bind(this);
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

  hidePostCreateForm(){
    console.log('------ app hidePostCreateForm has been called');
    this.setState(()=>{
      return{
        showPostForm: false
      };
    })
  }

  showPostCreateForm(){
    console.log('------ app showPostCreateForm has been called');
    this.setState(()=>{
      return{
        showPostForm: true
      };
    })
  }

  render() {
    return (
      <div className="App">
        {!this.state.loggedin && <LoginComponent fb_data={this.setFbData} />}
        {this.state.loggedin &&
          <div className='row'>
            <Col xs={5} md={3}>
              <ProfileComponent
              profile={this.state.profile}
              hideForm={this.hidePostCreateForm}
              showForm={this.showPostCreateForm}
              />
              {
                this.state.loggedin && this.state.showPostForm &&
                <PostComponent facebookUserId={this.state.profile.id}
                access_token={this.state.access_token}/>
              }
            </Col>
            <Col xs={7} md={9}>
              <FeedComponent profile_id={this.state.profile.id} access_token={this.state.access_token} />
            </Col>
          </div>
        }

      </div>
    );
  }
}


export default App;
