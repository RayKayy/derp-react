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
    axios.get('/api')
      .then((response) => {
        const res = response
        this.setState({
          events:
          {name:res.data.businesses[0].name,
            img:res.data.businesses[0].image_url
          }
        })
        console.log(res)
      })
    }

  render() {
    return (
      <div className="App">
        <TopNavbar />
        < MainContainer restaurant={this.state.events}/>
      </div>
    );
  }
}

export default App;
