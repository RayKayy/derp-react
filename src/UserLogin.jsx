import React, { Component } from 'react';
import { ButtonToolbar, Button, Modal, Form, FormGroup, Col, FormControl, NavItem } from 'react-bootstrap';
import axios from 'axios';
import ErrorLogin from './ErrorLogin';
import './styles/login-signup.scss';

class UserLogin extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      show: false,
      error: false
    };
  }

  handleShow = () => {
    this.setState({ show: true });
  }

  handleHide = () => {
    this.setState({ show: false, error: false });
  }

  handleLogin = () => {
    this.setState({ error: false });
    axios.post('/login', {
      email: this.state.email,
      password: this.state.password
    })
      .then((response) => {
        if(response.data.error) {
          this.setState({
            show: true,
            error: true,
            email: '',
            password: ''
          });
        } else {
          this.setState({
            show: false,
            error: false,
            email: '',
            password: ''
          });
        }
        this.props.checkLogin();
      })
      .catch((error) => {
        console.log(error);
        this.setState({
          show: true,
          error: true,
          email: '',
          password: ''
        });
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
              <ErrorLogin error={this.state.error} />
              <Form horizontal>
                <FormGroup controlId="formHorizontalEmail">
                  <Col sm={2}>
                    Email
                  </Col>
                  <Col sm={10}>
                    <FormControl value={this.state.email} onChange={this.handleFormChange('email')} type="email" placeholder="Email" />
                  </Col>
                </FormGroup>

                <FormGroup controlId="formHorizontalPassword">
                  <Col sm={2}>
                    Password
                  </Col>
                  <Col sm={10}>
                    <FormControl value={this.state.password} onChange={this.handleFormChange('password')} type="password" placeholder="Password" />
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