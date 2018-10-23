import React, { Component } from 'react';
import { ButtonToolbar, Button, Modal, Form, FormGroup, Col, FormControl, NavItem } from 'react-bootstrap';
import axios from 'axios';
import './styles/login-signup.scss';

class UserSignUp extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleHide = this.handleHide.bind(this);

    this.state = {
      show: false
    };
  }

  handleShow() {
    this.setState({ show: true });
  }

  handleHide() {
    this.setState({ show: false });
  }

  handleRegistration = () => {
    axios.post('/register', {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password_confirmation: this.state.password_confirmation
    })
      .then((response) => {
        console.log(response);
        this.setState({ show: false });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  handleFormChange = (key) => (e) => {
    this.setState({[key]: e.target.value}, () => {console.log(this.state)});
  }

  render() {
    return (
      <ButtonToolbar>
        <NavItem className="sign-up-link" onClick={this.handleShow}>
          Sign Up
        </NavItem>

        <Modal
          {...this.props}
          show={this.state.show}
          onHide={this.handleHide}
          dialogClassName="login-modal"
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-lg">
              Register
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>
              <Form horizontal>
                <FormGroup controlId="formHorizontalText">
                  <Col sm={2}>
                    Name
                  </Col>
                  <Col sm={10}>
                    <FormControl onChange={this.handleFormChange('name')} type="text" placeholder="Name" />
                  </Col>
                </FormGroup>

                <FormGroup controlId="formHorizontalEmail">
                  <Col sm={2}>
                    Email
                  </Col>
                  <Col sm={10}>
                    <FormControl onChange={this.handleFormChange('email')} type="email" placeholder="Email" />
                  </Col>
                </FormGroup>

                <FormGroup controlId="formHorizontalPassword">
                  <Col sm={2}>
                    Password
                  </Col>
                  <Col sm={10}>
                    <FormControl onChange={this.handleFormChange('password')} type="password" placeholder="Password" />
                  </Col>
                </FormGroup>

                <FormGroup controlId="formHorizontalPassword_confirmation">
                  <Col sm={2}>
                    Confirm Password
                  </Col>
                  <Col sm={10}>
                    <FormControl onChange={this.handleFormChange('password_confirmation')} type="password" placeholder="Password" />
                  </Col>
                </FormGroup>

                <FormGroup>
                  <Col smOffset={2} sm={10}>
                    <Button onClick={this.handleRegistration} type="submit">Register</Button>
                  </Col>
                </FormGroup>
              </Form>
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleHide}>Close</Button>
          </Modal.Footer>
        </Modal>
      </ButtonToolbar>
    );
  }
}

export default UserSignUp;