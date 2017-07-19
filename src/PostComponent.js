import React, {Component} from 'react';
var Service = require('./utils/service');

export default class PostComponent extends Component {
  constructor(props) {
    console.log('------------- post compponent has been called');
    console.log(props);
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      msg: '',
      u_id: this.props.facebookUserId,
      accessToken: this.props.access_token
    }
  }

  handleSubmit(event) {
    event.preventDefault();

    Service.createFacebookPost(
      this.state.u_id,
      this.state.accessToken,
      this.state.msg
    ).then(result =>{
      console.log("createFacebookPost call success");
      this.setState(() =>{
        return{
          msg: ''
        }
      });
    })
    .catch(function (error) {
      console.log("createFacebookPost call fail" + error);
    });
  }

  handleChange(event) {
    var message = event.target.value;

    this.setState(function () {
      return {
        msg: message
      }
    });
  }

  render() {
    return (
      <form className='column' onSubmit={this.handleSubmit}>
        <label className='header' htmlFor='username'>{this.props.label}</label>
        <input
          id='username'
          placeholder='enter post message'
          type='text'
          value={this.state.msg}
          autoComplete='off'
          onChange={this.handleChange}
        />
        <button
          className='btn btn-sm btn-success'
          type='submit'
          disabled={this.state.msg.length === 0}>
          submit
        </button>
      </form>
    )
  }
}
