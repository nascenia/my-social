import React, {Component} from 'react';
import { Table } from 'react-bootstrap';

export default class ProfileComponent extends Component {
  render() {
    console.log(this.props.profile);
    return (
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
        </tbody>
      </Table>
    );
  }
}
