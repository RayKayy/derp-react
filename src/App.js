import React, { Component } from 'react';
// eslint-disable-next-line
import logo from './logo.svg';
import './styles/App.scss';
import TopNavbar from './Top-navbar';
import MainContainer from './Main-container';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: {},
      events: [{}],
      filters: {},
      test: []
    }
  }
  componentDidMount() {
    axios.get('/')
      .then((response) => {
        // console.log(response)
      })
  }
  render() {
    return (
      <div className="App">
        <TopNavbar />
        <MainContainer />
        {/* {this.state.test} */}
      </div>
    );
  }
}

export default App;
