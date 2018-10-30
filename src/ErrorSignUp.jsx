import React, { Component } from 'react';
import './styles/error-signup.scss';

class ErrorSignUp extends Component {

  render() {
    if (this.props.error) {
      return (
        <div id="signupError">
          Password does not match
        </div>
      );
    } else {
      return (
        <div></div>
      );
    }
  }
}

export default ErrorSignUp;