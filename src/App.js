import React, { Component } from 'react';
// eslint-disable-next-line
import logo from './logo.svg';
import './styles/App.scss';
import TopNavbar from './Top-navbar';
import MainContainer from './Main-container';

class App extends Component {
  render() {
    return (
      <div>
        <TopNavbar />
        <MainContainer />
      </div>
    );
  }
}

export default App;
