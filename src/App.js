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
      .then((res) => {
        const min = 0;
        const max = res.data.businesses.length - 1;
        const rand = Math.round(min + (Math.random() * (max - min)));
        this.setState({
          events:
          {
            name: res.data.businesses[rand].name,
            img: res.data.businesses[rand].image_url,
            url: res.data.businesses[rand].url
          }
        })
        console.log(res)
      })
    }

  render() {
    return (
      <div className="App">
        <TopNavbar />
        <MainContainer restaurant={this.state.events}/>
      </div>
    );
  }
}

export default App;
