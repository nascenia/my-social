import React, { Component} from 'react';
import FacebookProvider, { Login } from 'react-facebook';
import { Button } from 'react-bootstrap';
var Service = require('./utils/service');

export default class LoginComponent extends Component {
  constructor(props) {
    super(props);
    this.handleResponse = this.handleResponse.bind(this);
  }

  handleResponse = (data) => {
    this.props.profile(data.profile);
    console.log(data);
    console.log('-------- facebook feed');
    console.log(Service.facebookFeed(data.profile.id, data.tokenDetail.accessToken));
  }

  handleError = (error) => {
    this.setState({ error });
  }

  render() {
    return (
      <FacebookProvider appId="152690645277827">
        <Login
          scope="email,user_friends,user_events,user_posts"
          onResponse={this.handleResponse}
          onError={this.handleError}
        >
          <Button bsStyle="primary">Login via Facebook</Button>
        </Login>
      </FacebookProvider>
    );
  }
}
