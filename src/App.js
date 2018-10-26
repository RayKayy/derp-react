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
      showWelcome: true,
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
        this.setState({route: res.data.google_directions});
        this.setState({showWelcome: false})
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

    _removeSkeletonItem = (i) => () => {
      console.log(i);
      let newSkele = this.state.params.skeleton
      newSkele.splice(i, 1);
      this.setState({
        params: { ...this.state.params,
          skeleton: newSkele
        }
      });
    }

    _userInputedLocation = (latLng) => {
      this.setState({
        params: {
          ...this.state.params,
          coords: {
            lng: latLng.lng,
            lat: latLng.lat
          }
        }
      });
    }

  render() {
    return (
      <div className="App">
        <TopNavbar />
        {this.state.showWelcome && <h1>Welcome User! Plan you day with just a click of a button!!!</h1>}
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
          removeSkeletonItem={this._removeSkeletonItem}
          userInputedLocation={this._userInputedLocation}
          userGivenLocation={this.state.params.coords}
          route={this.state.route}
        />
      </div>
    );
  }
}

export default App;
