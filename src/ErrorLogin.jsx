import React, { Component } from 'react';
import './styles/error-login.scss';

class ErrorLogin extends Component {

  render() {
    if (this.props.error) {
      return (
        <div id="loginError">
          Incorrect Email or Password
        </div>
      );
    } else {
      return (
        <div></div>
      );
    }
  }
}

export default ErrorLogin;