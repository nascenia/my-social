import React, {Component} from 'react';
import { Table } from 'react-bootstrap';
var Service = require('./utils/service');

export default class FeedComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      feed: []
    };

    Service.facebookFeed(this.props.profile_id, this.props.access_token)
      .then(function (response) {
        console.log('------- Feed -------');
        console.log(response.data.data);
        this.setState(function () {
          return {
            feed: response.data.data
          };
        });
      }.bind(this));
  }

  render(){
    return (
      <div>
        <h3>My Feed</h3>
        <Table striped bordered condensed hover>
          <thead>
            <tr>
              <td>Time</td>
              <td>Story</td>
            </tr>
          </thead>
          <tbody>
            {this.state.feed.map((item) => (
              <tr key={item.id}>
                <td>{item.created_time}</td>
                <td>{item.story}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    )
  }
}
