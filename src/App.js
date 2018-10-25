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

    componentWillMount() {
      const GOOGLE_KEY = process.env.REACT_APP_GOOGLE_KEY;
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_KEY}&libraries=places"`;
      document.head.append(script);
    }

    _generateItinerary = () => {
      axios.post('/itineraries', { ...this.state.params })
        .then((res) => {
          //this.setState({ itinerary: res.itinerary })
          console.log(res.data);
          this.setState({events: res.data.itinerary});
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
