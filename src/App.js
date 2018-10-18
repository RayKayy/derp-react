import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      test: [],
    }
  }
  componentDidMount() {
    axios.get('/')
      .then((response) => {
        console.log(response)
      })
  }
  render() {
    return (
      <div className="App">
        {this.state.test}
      </div>
    );
  }
}

export default App;
