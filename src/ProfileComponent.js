import React, {Component} from 'react';
import { Table } from 'react-bootstrap';

export default class ProfileComponent extends Component {
  render() {
    return (
      <div>
        <h3>My Profile</h3>
        <Table striped bordered condensed hover>
          <tbody>
            <tr>
              <td>Full Name</td>
              <td>{this.props.profile.name}</td>
            </tr>
            <tr>
              <td>Email</td>
              <td>{this.props.profile.email}</td>
            </tr>
            <tr>
              <td>Gender</td>
              <td>{this.props.profile.gender}</td>
            </tr>
            <tr>
              <td>Actions</td>
              <td>
                <button
                  onClick={this.props.showForm}
                > sho post form
                </button>
                &nbsp;
                <button
                  onClick={this.props.hideForm}
                > Hide post form
                </button>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    );
  }
}
