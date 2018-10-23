import React, {Component} from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import UserLogin from './UserLogin';
import UserSignUp from './UserSignUp';
import axios from 'axios';
import './styles/top-navbar.scss';

class TopNavbar extends Component {

  _handleLogout = () => {
    axios.get('/logout')
      .then((response) => {
        console.log(response);
        window.alert('logout successful')
      })
  }

  render() {
    return (
      <Navbar default collapseOnSelect id="top-nav">
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/">DERP</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem eventKey={1} >
              <UserSignUp />
            </NavItem>
            <NavItem eventKey={2}>
              <UserLogin />
            </NavItem>
            <NavItem onClick={this._handleLogout} eventKey={1} >
              Logout
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default TopNavbar;