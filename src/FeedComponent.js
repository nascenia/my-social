import React, {Component} from 'react';
import { Table } from 'react-bootstrap';
var Service = require('./utils/service');

export default class FeedComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      feed: []
    };
  }

  render(){
    Service.facebookFeed(data.profile.id, data.tokenDetail.accessToken)
      .then(function (response) {
        this.setState(function () {
          return {
            feed: responce.data.data
          };
        });
      }.bind(this));

    return (
      <div>
        <h2>My Feed</h2>
        <Table>
          <tbody>
            <tr>
              <td>Test</td>
            </tr>
          </tbody>
        </Table>
      </div>
    )
  }
}
