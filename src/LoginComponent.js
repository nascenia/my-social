import React, { Component} from 'react';
import FacebookProvider, { Login } from 'react-facebook';
import { Button } from 'react-bootstrap';
var Service = require('./utils/service');

export default class LoginComponent extends Component {
  constructor(props) {
    super(props);
    this.handleResponse = this.handleResponse.bind(this);
    this.state = {
      facebookScope: "email,user_friends,user_events,user_posts, publish_actions"
    }
  }

  handleResponse = (data) => {
    this.props.profile(data);
    console.log(data);
    console.log('-------- facebook postcreate');
    console.log(Service.createFacebookPost(data.profile.id, data.tokenDetail.accessToken, 'this is test post, ingore it'));
  }

  handleError = (error) => {
    this.setState({ error });
  }

  render() {
    return (
      <FacebookProvider appId="152690645277827">
        <Login
          scope={this.state.facebookScope}
          onResponse={this.handleResponse}
          onError={this.handleError}
        >
          <Button bsStyle="primary">Login via Facebook</Button>
        </Login>
      </FacebookProvider>
    );
  }
}
