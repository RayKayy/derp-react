import React, {Component} from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import UserLogin from './UserLogin';
import UserSignUp from './UserSignUp';
import './styles/top-navbar.scss';

class TopNavbar extends Component {
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
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default TopNavbar;