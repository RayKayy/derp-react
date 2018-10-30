import React, {Component, Fragment} from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import UserLogin from './UserLogin';
import './styles/top-navbar.scss';

class TopNavbar extends Component {

  render() {
    return (
      <Navbar default collapseOnSelect id="top-nav" fixedTop={true}>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/">DERP</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            {this.props.userinfo.name ? (
              <Fragment>
                <Navbar.Text>Welcome {this.props.userinfo.name}</Navbar.Text>
                <NavItem onClick={this.props.logout} eventKey={1} >
                  Logout
                </NavItem>
              </Fragment>
              ) : (
              <Fragment>
                <NavItem eventKey={2}>
                  <UserLogin checkLogin={this.props.checkLogin} />
                </NavItem>
              </Fragment>
            )}

          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default TopNavbar;