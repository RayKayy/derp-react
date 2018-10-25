import React, { Component } from 'react';
// eslint-disable-next-line
import logo from './logo.svg';
import './styles/App.scss';
import TopNavbar from './Top-navbar';
import MainContainer from './Main-container';
import GoogleApiComponent from './GoogleApiComponent';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: {},
      events: [],
      filters: {},
      params: {
        skeleton: [],
        startTime: new Date(),
        endTime: new Date()
      }
    }
  }
  componentDidMount() {
      navigator.geolocation.getCurrentPosition((position)=>{
        this.setState({params: {
          ...this.state.params,
          coords: {lng: position.coords.longitude, lat: position.coords.latitude}
        }});
      });
      // this._getItinerary(this.state.params)
    }

    _generateItinerary = () => {
      axios.post('/itineraries', { ...this.state.params })
        .then((res) => {
          //this.setState({ itinerary: res.itinerary })
          console.log(res.data);
<<<<<<< HEAD
          this.setState({events: res.data});
=======
>>>>>>> 2a05092fc9c316f4cdd55325b5212c92220685a7
        })
    }

    _addSkeleton = (type) => {
      this.setState({ params: {...this.state.params, skeleton: [...this.state.params.skeleton, type] }});
    }

    _handleDate = (date) => {
      this.setState({ params: {...this.state.params, startTime: date}});
    }

    _handleEndTime = (date) => {
      this.setState({ params: {...this.state.params, endTime: date}}, () => {console.log(this.state.params);});
    }

  render() {
    return (
      <div className="App">
        <TopNavbar />
        <MainContainer
          params={this.state.params}
          addSkeleton={this._addSkeleton}
          handleDate={this._handleDate}
          handleEndTime={this._handleEndTime}
          generateItinerary={this._generateItinerary}
          startTime={this.state.startTime}
          endTime={this.state.endTime}
          itinerary={this.state.events}
        />
        <GoogleApiComponent coords={this.state.params.coords} />
      </div>
    );
  }
}

export default App;
