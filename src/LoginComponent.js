import React, { Component} from 'react';
import FacebookProvider, { Login } from 'react-facebook';
import { Button } from 'react-bootstrap';

export default class LoginComponent extends Component {
  constructor(props) {
    super(props);
    this.handleResponse = this.handleResponse.bind(this);
    this.state = {
      facebookScope: "email,user_friends,user_events,user_posts, publish_actions"
    }
  }

  handleResponse = (data) => {
    this.props.fb_data(data.profile, data.tokenDetail.accessToken);
    console.log('--------- Profile ---------');
    console.log(data);
  }

  handleError = (error) => {
    console.log(error);
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
