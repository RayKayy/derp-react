import React, { Component } from 'react';
import { ButtonToolbar, Button, Modal, Form, FormGroup, Col, FormControl, NavItem } from 'react-bootstrap';
import axios from 'axios';
import './styles/login-signup.scss';

class UserLogin extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      show: false
    };
  }

  handleShow = () => {
    this.setState({ show: true });
  }

  handleHide = () => {
    this.setState({ show: false });
  }

  handleLogin = () => {
    axios.post('/login', {
      email: this.state.email,
      password: this.state.password
    })
      .then((response) => {
        console.log(response);
        this.setState({
          show: false,
          email: '',
          password: ''
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  handleFormChange = (key) => (e) => {
    this.setState({ [key]: e.target.value }, () => { console.log(this.state) });
  }

  render() {
    return (
      <ButtonToolbar>
        <NavItem className="login-link" onClick={this.handleShow}>
          Login
        </NavItem>

        <Modal
          {...this.props}
          show={this.state.show}
          onHide={this.handleHide}
          dialogClassName="login-modal"
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-lg">
              Sign In
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>
              <Form horizontal>
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

                <FormGroup>
                  <Col smOffset={2} sm={10}>
                    <Button onClick={this.handleLogin} type="submit">Sign in</Button>
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

export default UserLogin;