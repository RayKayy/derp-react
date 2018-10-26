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
      showForm: true,
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
    this.setState({ showForm: false })
    axios.post('/itineraries', { ...this.state.params })
      .then((res) => {
        //this.setState({ itinerary: res.itinerary })
        console.log(res.data);
        this.setState({events: res.data.itinerary});
        this.setState({route: res.data.route});
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

  _toggleForm = () => {
    this.setState({ showForm: !this.state.showForm })
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
          showForm={this.state.showForm}
          toggleForm={this._toggleForm}
        />
        <GoogleApiComponent coords={this.state.params.coords} locations={this.state.events} />
      </div>
    );
  }
}

export default App;
