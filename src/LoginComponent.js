import React, { Component} from 'react';
import FacebookProvider, { Login } from 'react-facebook';
var axios = require('axios');

export default class LoginComponent extends Component {
  handleResponse = (data) => {
    console.log(data);
    this.getEvents(data.profile.id, data.tokenDetail.accessToken);
  }

  handleError = (error) => {
    this.setState({ error });
  }

  getEvents = (u_id, access_token) =>{
    console.log('--with is getEvents with u_id' + u_id);
    axios.get('https://graph.facebook.com/v2.9/'+ u_id + '/friends?access_token=' + access_token)
      .then(response => {
           console.log(" axios call success ");
           console.log(response);
      })
      .catch(function (error) {
        console.log("axios call fail" + error);
      });
  }

  render() {
    return (
      <FacebookProvider appId="152690645277827">
        <Login
          scope="email,user_friends,user_events"
          onResponse={this.handleResponse}
          onError={this.handleError}
        >
          <span>Login via Facebook</span>
        </Login>
      </FacebookProvider>
    );
  }
}
