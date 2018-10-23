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
      params: {
        skeleton: [],
        date: ''
      }
    }
  }
  componentDidMount() {
    axios.get('/api')
      .then((res) => {
        const min = 0;
        const max = res.data.businesses.length - 1;
        const rand = Math.round(min + (Math.random() * (max - min)));
        console.log(res);
        this.setState({
          events:
          {
            name: res.data.businesses[rand].name,
            img: res.data.businesses[rand].image_url,
            url: res.data.businesses[rand].url
          }
        })
      })
      navigator.geolocation.getCurrentPosition((position)=>{
        this.setState({params: {
          ...this.state.params,
          coords: {lng: position.coords.longitude, lat: position.coords.latitude}
        }});
      });
      // this._getItinerary(this.state.params)
    }

    _getItinerary(params) {
      axios.get('/api/itinerary', { params })
        .then((res) => {
          // this.setState({ itinerary: res.itinerary })
          console.log(res.itinerary);
        })
    }

    _addSkeleton = (type) => {
      this.setState({ params: {...this.state.params, skeleton: [...this.state.params.skeleton, type] }});
    }

    _handleDate = (date) => {
      this.setState({ params: {...this.state.params, date: date}});
    }

  render() {
    return (
      <div className="App">
        <TopNavbar />
        <MainContainer
          restaurant={this.state.events}
          params={this.state.params}
          addSkeleton={this._addSkeleton}
          handleDate={this._handleDate}
        />
      </div>
    );
  }
}

export default App;
