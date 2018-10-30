import React, { Component } from 'react';
import { ButtonToolbar, Button, Modal, Form, FormGroup, Col, FormControl } from 'react-bootstrap';
import axios from 'axios';
import ErrorSignUp from './ErrorSignUp';
import './styles/login-signup.scss';

class UserSignUp extends Component {
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

  handleRegistration = () => {
    this.setState({ error: false });
    axios.post('/register', {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password_confirmation: this.state.password_confirmation
    })
      .then((response) => {
        if (response.data.error) {
          this.setState({
            show: true,
            error: true,
            password: '',
            password_confirmation: ''
          });
        } else {
          this.setState({
            show: false,
            error: false
          });
        }
        this.props.checkLogin();
      })
      .catch((error) => {
        console.log(error);
        this.setState({
          show: true,
          error: true,
          password: '',
          password_confirmation: ''
        });
      });

  }

  handleFormChange = (key) => (e) => {
    this.setState({[key]: e.target.value}, () => {console.log(this.state)});
  }

  render() {
    return (
      <ButtonToolbar>
        <Button className="createAccount" bsStyle="success" bsSize="large" onClick={this.handleShow}>
          CREATE A FREE ACCOUNT NOW
        </Button>
        {/* <NavItem className="sign-up-link" >
          Sign Up
        </NavItem> */}

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
              <ErrorSignUp error={this.state.error} />
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
                    <FormControl value={this.state.password} onChange={this.handleFormChange('password')} type="password" placeholder="Password" />
                  </Col>
                </FormGroup>

                <FormGroup controlId="formHorizontalPassword_confirmation">
                  <Col sm={2}>
                    Confirm Password
                  </Col>
                  <Col sm={10}>
                    <FormControl value={this.state.password_confirmation} onChange={this.handleFormChange('password_confirmation')} type="password" placeholder="Password" />
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